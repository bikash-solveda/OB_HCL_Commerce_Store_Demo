/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2021
 *
 *==================================================
 */

//Standard libraries
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Axios, { Canceler } from "axios";
import { useNavigate } from "react-router-dom";
//Redux
import { getSite, useSite } from "./useSite";
import { site } from "../constants/site";
import { OK } from "http-status-codes";
import {
  GET_CART_ACTION,
  FETCH_ALL_ORDERS_ACTION,
  SET_ACTIVE_INPROGRESS_ORDER_ACTION,
  FETCH_ACTIVE_INPROGRESS_ORDER_ITEM_ACTION,
  RESET_ACTIVE_INPROGRESS_ORDER_ACTION,
} from "../../redux/actions/order";
import { activeInprogressOrderSelector, cartSelector, ordersListSelector } from "../../redux/selectors/order";
import { CONFIRMATION_COMMS_ACTION, OPEN_CONFIRMATION_ACTION } from "../../redux/actions/confirmation";
import { ConfirmationReducerState } from "../../redux/reducers";
//Custom libraries
import { CONSTANTS } from "../../constants/inprogress-orders";

import { IP_ORDER_DETAILS } from "../../constants/routes";
import { CartApi } from "@hcl-commerce-store-sdk/typescript-axios-transaction";
import * as successActions from "../../redux/actions/success";
import { ORDER_STATUS } from "../../constants/order";
//UI libraries
import {
  PriceDisplay,
  TableColumnDef,
  StyledIconButton,
  StyledRadio,
  StyledTextField,
  StyledLink,
  StyledTooltip,
} from "@hcl-commerce-store-sdk/react-component";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import GoToOrderDetailsOutlinedIcon from "@mui/icons-material/ChevronRight";
import { EMPTY_STRING, PAGINATION } from "../../constants/common";
import { forUserIdSelector, userIdSelector } from "../../redux/selectors/user";
import { get } from "lodash-es";
import addressUtil from "../../utils/addressUtil";

const CopyOrderInputNameDialog = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [local, setLocal] = useState<string>(EMPTY_STRING);

  return (
    <StyledTextField
      required
      label={t("InprogressItems.nameForCopiedOrder")}
      name="copiedOrderName"
      autoFocus
      fullWidth
      value={local}
      onChange={(e) => {
        const n = e.target.value;
        if (addressUtil.validateNickName(n)) {
          setLocal(n);
          dispatch(CONFIRMATION_COMMS_ACTION({ newName: n, okDisabled: !n.trim() }));
        }
      }}
      inputProps={{ maxLength: 254 }}
    />
  );
};

const ActionsCell = ({ rowData, ...props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const siteInfo = getSite();
  const storeId = siteInfo?.storeID as string;
  const cancels: Canceler[] = [];
  const { t } = useTranslation();
  const CancelToken = Axios.CancelToken;
  const payloadBase: any = {
    widget: "Inprogress Orders Table",
    cancelToken: new CancelToken((c) => cancels.push(c)),
  };
  const activeInprogressOrder = useSelector(activeInprogressOrderSelector);
  const forUserId = useSelector(forUserIdSelector);
  const uId = useSelector(userIdSelector);
  const userId = forUserId ?? uId;
  /**
   * refetch cart and orders-list so state gets updated -- don't cancel as we necessarily
   *   want the fetch to succeed
   */
  const refetch = () => {
    const { cancelToken, ...rest } = payloadBase;
    dispatch(GET_CART_ACTION({ ...rest }));
    dispatch(
      FETCH_ALL_ORDERS_ACTION({
        query: {
          activeOrg: true,
        },
        orderType: "all",
        status: ORDER_STATUS.PendingOrder,
        ...rest,
      })
    );
  };

  /**
   * Onclick event handler for Delete order
   */
  const deleteOrder = (rowData) => {
    const confirmState: ConfirmationReducerState = {
      key: "InprogressOrders.DeleteDialogHeading",
      messageParameters: {},
      title: "InprogressOrders.DeleteDialogTitle",
      okAction: () => confirmDelete(rowData),
    };
    dispatch(OPEN_CONFIRMATION_ACTION(confirmState));
  };

  /**
   * Delete Dialog confirm event
   */
  const confirmDelete = (rowData) => {
    const cartApi = new CartApi(undefined, site.transactionContext);
    const orderId = rowData.orderId;
    const orderName = rowData.orderDescription;

    cartApi
      .cartCancelOrder(storeId, orderId)
      .then((res) => {
        if (res.status === OK) {
          const msg = {
            key: "success-message.DELETE_ORDER_SUCCESS",
            messageParameters: { "0": orderName ? orderName : orderId },
          };
          dispatch(successActions.HANDLE_SUCCESS_MESSAGE_ACTION(msg));
          if (activeInprogressOrder && orderId === activeInprogressOrder.orderId) {
            dispatch(RESET_ACTIVE_INPROGRESS_ORDER_ACTION());
          }
          refetch();
        }
      })
      .catch((e) => {
        console.log("Could not delete order", e);
      });
  };

  /**
   * Onclick event handler for Copy order
   */
  const copyOrder = (rowData) => {
    // disable OK button at start
    dispatch(CONFIRMATION_COMMS_ACTION({ okDisabled: true }));

    const confirmState: ConfirmationReducerState = {
      key: EMPTY_STRING,
      template: <CopyOrderInputNameDialog />,
      title: "InprogressOrders.CopyTitle",
      okAction: (data) => confirmCopy(rowData, data),
    };
    dispatch(OPEN_CONFIRMATION_ACTION(confirmState));
  };

  /**
   * Copy Dialog confirm event
   */
  const confirmCopy = (rowData, data) => {
    const body: any = {
      fromOrderId_1: rowData.orderId,
      description: data.newName,
      copyOrderItemId_1: "*",
    };
    const { cancelToken, ...others } = payloadBase;
    const cartApi = new CartApi(undefined, site.transactionContext);
    const payload = { ...others, ...body };
    cartApi
      .cartCopyOrder(storeId, "json", { ...payload })
      .then((res) => {
        if (res.status === OK) {
          const key = "success-message.COPY_ORDER_SUCCESS";
          dispatch(successActions.HANDLE_SUCCESS_MESSAGE_ACTION({ key }));
          refetch();
          dispatch(RESET_ACTIVE_INPROGRESS_ORDER_ACTION());

          const orderIdArray = res.data?.orderId;
          const newOrderId = orderIdArray ? orderIdArray[0] : null;

          if (newOrderId) {
            navigate(`${IP_ORDER_DETAILS}/${newOrderId}`);
          } else {
            console.log("Order Id is null");
          }
        }
      })
      .catch((e) => {
        console.log("Could not copy order", e);
      });
  };

  const goToOrder = (rowData) => {
    navigate(`${IP_ORDER_DETAILS}/${rowData.orderId}`);
  };

  useEffect(() => {
    return () => {
      cancels.forEach((cancel) => cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <StyledIconButton
        style={{ padding: "0" }}
        color="primary"
        disabled={rowData.orderInfo.buyerId === userId ? false : true}
        onClick={() => copyOrder(rowData)}
        data-testid="use-inprogress-content-copy-icon-button">
        <StyledTooltip title={t("InprogressOrders.CopyOrder")}>
          <ContentCopyOutlinedIcon />
        </StyledTooltip>
      </StyledIconButton>
      <StyledIconButton
        style={{ padding: "0" }}
        color="primary"
        disabled={rowData.orderInfo.buyerId === userId ? false : true}
        onClick={() => deleteOrder(rowData)}
        data-testid="use-inprogress-delete-outline-icon-button">
        <StyledTooltip title={t("InprogressOrders.DeleteOrder")}>
          <DeleteOutlineOutlinedIcon />
        </StyledTooltip>
      </StyledIconButton>
      <StyledIconButton
        style={{ padding: "0" }}
        color="primary"
        onClick={() => goToOrder(rowData)}
        data-testid="use-inprogress-goto-order-outline-icon-button">
        <StyledTooltip title={t("InprogressOrders.OrderDetail")}>
          <GoToOrderDetailsOutlinedIcon />
        </StyledTooltip>
      </StyledIconButton>
    </div>
  );
};

const TogglerCell = ({ rowData, fullTable, headers, ...props }) => {
  const dispatch = useDispatch();
  const { mySite } = useSite();
  const cancels: Canceler[] = [];
  const CancelToken = Axios.CancelToken;
  const currency: string = mySite?.defaultCurrencyID ?? "";
  const ipOrder = useSelector(activeInprogressOrderSelector);

  const payload: any = {
    orderId: rowData.orderId,
    currency: currency,
    skipErrorSnackbar: true,
    widget: "Inprogress Orders Table",
    cancelToken: new CancelToken((c) => cancels.push(c)),
  };
  const toggleOrderActivation = (isCurrentCart, rowData) => {
    if (!isCurrentCart) {
      dispatch(SET_ACTIVE_INPROGRESS_ORDER_ACTION({ order: rowData }));
      dispatch(FETCH_ACTIVE_INPROGRESS_ORDER_ITEM_ACTION(payload));
    }
  };
  const cart = useSelector(cartSelector);

  // on first load, check to see if current-order is same as current-row and inprogress-order-redux isn't
  //   active, activate it
  useEffect(() => {
    if (!ipOrder && cart?.orderId === rowData?.orderId) {
      dispatch(SET_ACTIVE_INPROGRESS_ORDER_ACTION({ order: rowData }));
      dispatch(FETCH_ACTIVE_INPROGRESS_ORDER_ITEM_ACTION(payload));
    }
  }, [cart, rowData]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledRadio
      onChange={() => toggleOrderActivation(cart?.orderId === rowData?.orderId, rowData)}
      checked={cart?.orderId === rowData?.orderId}
      value={rowData?.orderId}
    />
  );
};

const OrderIdCell = ({ rowData, ...props }) => {
  const cart = useSelector(cartSelector);
  const { t } = useTranslation();
  const disp =
    cart?.orderId === rowData?.orderId ? (
      t("InprogressOrders.CurrentCart", { orderId: rowData.orderId })
    ) : rowData.orderId ? (
      rowData.orderId
    ) : (
      <span>&nbsp;</span>
    );
  return <StyledLink to={`${IP_ORDER_DETAILS}/${rowData.orderId}`}>{disp}</StyledLink>;
};

export const useInprogressOrders = (): any => {
  const dispatch = useDispatch();
  const cancels: Canceler[] = [];
  const CancelToken = Axios.CancelToken;
  const payloadBase: any = {
    widget: "Inprogress Orders Table",
    cancelToken: new CancelToken((c) => cancels.push(c)),
  };
  const { t, i18n } = useTranslation();
  const fromState = useSelector(ordersListSelector);
  const [orig, setOrig] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  const columns = useMemo(() => {
    const priceMsg = t("PriceDisplay.Labels.Pending");
    const lang = i18n.languages[0];
    const cellStyle = { verticalAlign: "middle" };

    const columns: TableColumnDef[] = [
      {
        title: t("InprogressOrders.Columns.Active"),
        keyLookup: {
          key: CONSTANTS.active,
        },
        idProp: "orderId",
        display: {
          cellStyle,
          template: TogglerCell,
        },
      },
      {
        title: t("InprogressOrders.Columns.OrderId"),
        keyLookup: {
          key: CONSTANTS.orderId,
        },
        display: {
          cellStyle,
          template: OrderIdCell,
        },
        sortable: {},
      },
      {
        title: t("InprogressOrders.Columns.Name"),
        keyLookup: {
          key: CONSTANTS.orderDescription,
        },
        display: {
          cellStyle: {
            ...cellStyle,
            wordBreak: "break-word",
          },
        },
        sortable: {},
      },
      {
        title: t("InprogressOrders.Columns.LastUpdated"),
        keyLookup: {
          key: CONSTANTS.lastUpdated,
        },
        display: { cellStyle },
        sortable: {},
      },
      {
        title: t("InprogressOrders.Columns.TotalPrice"),
        keyLookup: {
          key: CONSTANTS.totalPrice,
        },
        display: {
          cellStyle,
          template: ({ rowData, ...props }) => (
            <PriceDisplay
              min={rowData.totalPrice}
              currency={rowData.grandTotalCurrency}
              language={lang}
              message={priceMsg}
            />
          ),
        },
        sortable: { numeric: true },
      },
      {
        title: t("InprogressOrders.Columns.Type"),
        keyLookup: {
          key: CONSTANTS.type,
        },
        display: { cellStyle },
        sortable: {},
      },
      {
        title: t("InprogressOrders.Columns.Actions"),
        keyLookup: {
          key: CONSTANTS.actions,
        },
        display: {
          cellStyle,
          template: ActionsCell,
        },
      },
    ];
    return columns;
  }, [t, i18n]);

  useEffect(() => {
    dispatch(
      FETCH_ALL_ORDERS_ACTION({
        status: ORDER_STATUS.PendingOrder,
        orderType: "all",
        query: {
          activeOrg: true,
        },
        ...payloadBase,
      })
    );
    return () => {
      cancels.forEach((cancel) => cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const opts: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const fmt = new Intl.DateTimeFormat(i18n.languages[0], opts);
    const r = get(fromState, "Order", [] as any[]).map((e) => ({
      status: e.orderStatus,
      orderId: e.orderId,
      orderDescription: e.orderDescription,
      lastUpdated: fmt.format(new Date(e.lastUpdateDate)),
      totalPrice: parseFloat(e.grandTotal).toString(),
      grandTotalCurrency: e.grandTotalCurrency,
      type: t(`${CONSTANTS.inProgressOrders}${e.orderTypeCode}`),
      orderInfo: e,
      message: t("PriceDisplay.Labels.Pending"),
      language: i18n.languages[0],
    }));
    setOrig(r);
    setRows(r);
  }, [fromState, i18n, t]);

  const doSearch = ({ search }) => {
    const s = (search ?? EMPTY_STRING).trim();
    let f = orig;
    if (s) {
      const re = new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      f = orig.filter((r) => re.test(r.orderId) || re.test(r.orderDescription));
    }
    setRows(f);
  };

  return {
    labels: {
      emptyMsg: "Order.NoRecord",
    },
    t,
    columns,
    data: rows,
    actionData: {
      getPage: doSearch,
      headers: columns,
      hasSearch: true,
      labels: {
        searchPlaceholder: "InprogressOrders.searchPh",
      },
    },
    paginationData: {
      clientSide: true,
      t,
      sizes: PAGINATION.sizes,
      labels: {
        ofTotalCount: "commonTable.ofTotalCount",
      },
    },
  };
};
