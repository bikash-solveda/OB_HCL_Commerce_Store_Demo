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
import { useState, useEffect, MouseEvent, ChangeEvent, KeyboardEvent, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios, { Canceler } from "axios";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import getDisplayName from "react-display-name";

//Foundation libraries
import { useSite } from "../../_foundation/hooks/useSite";
import assignedPromotionCode from "../../_foundation/apis/transaction/assignedPromotionCode.service";
import { localStorageUtil } from "../../_foundation/utils/storageUtil";
import { ACCOUNT, SELECTED_PROFILE } from "../../_foundation/constants/common";
//Custom libraries
import { CHECKOUT, CHECKOUT_REVIEW, SIGNIN } from "../../constants/routes";
import { RECURRING_ORDER_OPTIONS, RESOURCE_NAME_CART } from "../../constants/order";
import {
  INVENTORY,
  CommerceEnvironment,
  KEY_CODES,
  ORDER_ID,
  HYPHEN,
  EMPTY_STRING,
  SLASH,
} from "../../constants/common";
//Redux
import * as orderActions from "../../redux/actions/order";
import {
  cartSelector,
  orderItemsSelector,
  isCheckoutDisabledSelector,
  isRecurringOrderDisabledSelector,
  isFetchingSelector,
} from "../../redux/selectors/order";
import { forUserIdSelector, loginStatusSelector } from "../../redux/selectors/user";
import { currentContractIdSelector } from "../../redux/selectors/contract";
import { entitledOrgSelector, activeOrgSelector } from "../../redux/selectors/organization";
import { sellersSelector } from "../../redux/selectors/sellers";

import { enUS, fr, de, it, es, ptBR, zhCN, zhTW, ja, ru, ro } from "date-fns/locale";
//GA360
import AsyncCall from "../../_foundation/gtm/async.service";
import cartService from "../apis/transaction/cart.service";
import storeUtil from "../../utils/storeUtil";
import { ORDER_CONFIGS } from "../../configs/order";
/**
 * Shopping cart component
 * displays order item table, order total summary and promo code section
 * @param props
 */
export const useCart = () => {
  const forUserId = useSelector(forUserIdSelector);
  const widgetName = getDisplayName("CartWidget");
  const contractId = useSelector(currentContractIdSelector);
  const cart = useSelector(cartSelector);
  const orderItems = useSelector(orderItemsSelector);
  const isCheckoutDisabled = useSelector(isCheckoutDisabledSelector);
  const [isRecurringOrder, setIsRecurringOrder] = useState<boolean>(false);
  const [recurringOrderFrequency, setRecurringOrderFrequency] = useState<string>("0");
  const [recurringOrderStartDate, setRecurringOrderStartDate] = useState<Date>(() => new Date());
  const isRecurringOrderDisabled = useSelector(isRecurringOrderDisabledSelector);
  const recurringOrderDetails = useMemo(
    () => localStorageUtil.get(ACCOUNT + HYPHEN + ORDER_ID + HYPHEN + cart?.orderId),
    [cart]
  );
  const [selectedProfile, setSelectedProfile] = useState<string>(
    localStorageUtil.get(SELECTED_PROFILE) ?? EMPTY_STRING
  );
  const [isFetching, setFetching] = useState<boolean>(true);
  const cartBeingFetched = useSelector(isFetchingSelector);
  const loginStatus = useSelector(loginStatusSelector);
  const [partitionedBySellers, setPartBySellers] = useState<any[]>([]);
  const [promoCode, setPromoCode] = useState<string>(EMPTY_STRING);
  const [promoCodeError, setPromoCodeError] = useState<boolean>(false);
  const [recurringOrderStartDateError, setRecurringOrderStartDateError] = useState<boolean>(false);

  const entitledOrgs = useSelector(entitledOrgSelector);
  const activeOrgId = useSelector(activeOrgSelector);
  const sellers = useSelector(sellersSelector);

  const selectedPromoCodes: any[] = cart ? (cart.promotionCode ? cart.promotionCode : []) : [];
  const isCartLocked = (): boolean => {
    if (forUserId) {
      return false;
    } else {
      return cart ? (cart.locked === "true" || cart.locked === true ? true : false) : false;
    }
  };
  const frequencyOptions = RECURRING_ORDER_OPTIONS;
  const hasDiscounts = cart && cart.adjustment ? true : false;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { mySite, storeDisplayName } = useSite();
  const CancelToken = Axios.CancelToken;
  const cancels: Canceler[] = useMemo(() => [], []);

  const defaultCurrencyID: string = mySite ? mySite.defaultCurrencyID : "";
  const checkInventory: boolean = mySite ? mySite.inventorySystem === INVENTORY.NON_ATP : false;
  const isRecurringOrderFeatureEnabled = mySite?.isB2B && loginStatus;
  const locale: string = i18n.languages[0].split("-").join("_");
  const localeList = [enUS, fr, de, it, es, ptBR, zhCN, zhTW, ja, ru, ro];
  const localeMap = initLocaleMap();

  const payloadBase: any = {
    currency: defaultCurrencyID,
    contractId: contractId,
    checkInventory: checkInventory,
    widget: widgetName,
  };

  useEffect(() => {
    if (recurringOrderDetails && recurringOrderDetails.length === 3) {
      setIsRecurringOrder(recurringOrderDetails[0]);
      setRecurringOrderFrequency(recurringOrderDetails[1]);
      setRecurringOrderStartDate(recurringOrderDetails[2]);
    }
  }, [recurringOrderDetails]);

  useEffect(() => {
    if (contractId && defaultCurrencyID) {
      if (cart && cart.resourceName !== RESOURCE_NAME_CART) {
        const cartPayload: any = {
          orderId: cart?.orderId,
          body: {
            orderId: cart?.orderId,
          },
          ...payloadBase,
        };
        // no matter whether setPendingOrder succeeds, we are working on current cart.
        dispatch(orderActions.RESET_ACTIVE_INPROGRESS_ORDER_ACTION());
        cartService
          .setPendingOrder(cartPayload)
          .catch((e) => {
            console.log("Could not set pending order ", e);
          })
          .finally(() => {
            const payload = {
              ...payloadBase,
              fetchCatentries: true,
              cancelToken: new CancelToken(function executor(c) {
                cancels.push(c);
              }),
            };
            dispatch(orderActions.FETCHING_CART_ACTION({ ...payload }));
          });
      } else {
        const payload = {
          ...payloadBase,
          fetchCatentries: true,
          cancelToken: new CancelToken(function executor(c) {
            cancels.push(c);
          }),
        };
        dispatch(orderActions.FETCHING_CART_ACTION({ ...payload }));
      }
    } else {
      // site is in some weird state, so just mark the page ready since there's nothing else we can really do
      setFetching(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractId, defaultCurrencyID, i18n.language]);

  //GA360
  useEffect(() => {
    if (mySite.enableGA) {
      const storeName = mySite.storeName;
      AsyncCall.sendCartPageViewEvent(
        { pageTitle: storeDisplayName, entitledOrgs, activeOrgId, sellers, storeName },
        { enableUA: mySite.enableUA, enableGA4: mySite.enableGA4 }
      );
      AsyncCall.sendViewCartEvent(
        { cart, orderItems, entitledOrgs, activeOrgId, sellers, storeName },
        { enableUA: mySite.enableUA, enableGA4: mySite.enableGA4 }
      );
    }
    return () => {
      cancels.forEach((cancel) => cancel());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initLocaleMap() {
    const localeMap = {};
    for (const i in CommerceEnvironment.reverseLanguageMapForDateFns) {
      const dateFnCode = CommerceEnvironment.reverseLanguageMapForDateFns[i];

      for (let j = 0; j < localeList.length; j++) {
        if (localeList[j].code === dateFnCode) {
          localeMap[i] = localeList[j];
        }
      }
    }
    return localeMap;
  }

  /**
   * Reset promo code error if it was true
   */
  function resetPromoCodeError() {
    if (promoCodeError === true) {
      setPromoCodeError(false);
    }
  }

  const applyPromotionCode = useCallback(() => {
    const code = promoCode.trim();

    if (code !== "") {
      const payload = {
        ...payloadBase,
        promoCode: code,
      };
      const body = {
        body: { ...payload },
        cancelToken: new CancelToken(function executor(c) {
          cancels.push(c);
        }),
      };

      if (payload?.widget) {
        body["widget"] = payload.widget;
      }

      assignedPromotionCode
        .applyPromotioncode(body)
        .then((res) => {
          const payload = {
            ...payloadBase,
            fetchCatentries: true,
            cancelToken: new CancelToken(function executor(c) {
              cancels.push(c);
            }),
          };
          dispatch(orderActions.FETCHING_CART_ACTION({ ...payload }));
          setPromoCodeError(false);
          setPromoCode("");
        })
        .catch((e) => {
          console.log("Could not add promo code");
          setPromoCodeError(true);
        });
    } else {
      setPromoCodeError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promoCode]);

  function applyPromoCodeBasedOnKey(e: KeyboardEvent<HTMLAnchorElement>) {
    if (e.keyCode === KEY_CODES.ENTER) {
      applyPromotionCode();
    }
  }

  /**
   * Update promotion code state upon input change
   */
  function onPromoCodeChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const newPromoCode = event.target.value;
    setPromoCode(newPromoCode);
  }

  /**
   * Apply promo code to cart if code is not empty
   */
  function applyPromoCode(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    applyPromotionCode();
  }

  /**
   * Remove applied promo code from cart
   */
  const onPromoCodeRemove = useCallback(
    (code: string) => {
      if (code !== "") {
        const parameters = {
          ...payloadBase,
          promoCode: code,
          cancelToken: new CancelToken(function executor(c) {
            cancels.push(c);
          }),
        };

        if (payloadBase?.widget) {
          parameters["widget"] = payloadBase.widget;
        }

        assignedPromotionCode
          .removePromotionCode({ ...parameters })
          .then((res) => {
            const payload = {
              ...payloadBase,
              fetchCatentries: true,
              cancelToken: new CancelToken(function executor(c) {
                cancels.push(c);
              }),
            };
            dispatch(orderActions.FETCHING_CART_ACTION({ ...payload }));
          })
          .catch((e) => {
            console.log("Could not remove promo code");
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  /**
   * Handle recurring order start date change
   */
  function onDateChange(date: Date | null) {
    date ? setRecurringOrderStartDate(date) : setRecurringOrderStartDate(new Date());
  }

  function onDateError(error) {
    if (error !== "") {
      setRecurringOrderStartDateError(true);
    } else {
      setRecurringOrderStartDateError(false);
    }
  }

  /**
   * Check if user can continue to checkout
   */
  function canContinue() {
    return (
      !isCartLocked() &&
      !isCheckoutDisabled &&
      (!isRecurringOrder ||
        (isRecurringOrder &&
          !isRecurringOrderDisabled &&
          recurringOrderFrequency !== "" &&
          recurringOrderStartDate != null &&
          !recurringOrderStartDateError))
    );
  }

  /**
   * Proceed to checkout if cart is valid
   */
  async function checkout() {
    if (canContinue()) {
      if (cart && cart.orderId) {
        const recurringOrderInfo: any[] = [isRecurringOrder, recurringOrderFrequency, recurringOrderStartDate];
        localStorageUtil.set(ACCOUNT + HYPHEN + ORDER_ID + HYPHEN + cart.orderId, recurringOrderInfo);
      }

      if (selectedProfile) {
        dispatch(orderActions.FETCH_ALLOWABLE_SHIPMODES_ACTION({}));
        const parameters = {
          ...payloadBase,
          body: {
            toOrderId: ".",
            payInfoFrom: selectedProfile,
            shippingAddressFromOrderProfile: 1,
            shippingModeFromOrderProfile: 1,
          },
        };

        try {
          let res = await cartService.copyOrder(parameters);

          // also need to call calculate -- since the copy_order API doesn't
          parameters.body = { calculationUsageId: ORDER_CONFIGS.calculationUsage.split(",") };
          res = await cartService.calculateOrder(parameters);

          if (res?.status === 200) {
            navigate(`${CHECKOUT}${SLASH}${CHECKOUT_REVIEW}`, { state: { selectedProfile } });
          }
        } catch (e) {
          console.log("Couldn't copy shipping info from checkout profile");
        }
      } else {
        if (loginStatus) {
          navigate(CHECKOUT);
        } else {
          navigate(SIGNIN, { state: { checkoutFlow: true } });
        }
      }
    }
  }

  useEffect(() => {
    const parts = storeUtil.partitionBySellers(orderItems, storeDisplayName, mySite);
    setPartBySellers(parts);
  }, [orderItems]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // intent here is to indicate when fetching is done -- so if the cart is still being
    //   fetched, keep old value (`prev`), otherwise set to `cartBeingFetched`
    setFetching((prev) => (cartBeingFetched ? prev : !!cartBeingFetched));
  }, [cartBeingFetched]);

  return {
    isFetching,
    orderItems,
    isRecurringOrderFeatureEnabled,
    isRecurringOrder,
    isRecurringOrderDisabled,
    recurringOrderFrequency,
    setIsRecurringOrder,
    setRecurringOrderFrequency,
    hasDiscounts,
    recurringOrderStartDate,
    frequencyOptions,
    localeMap,
    locale,
    onDateChange,
    onDateError,
    promoCode,
    resetPromoCodeError,
    onPromoCodeChange,
    applyPromoCodeBasedOnKey,
    promoCodeError,
    applyPromoCode,
    selectedPromoCodes,
    onPromoCodeRemove,
    cart,
    canContinue,
    checkout,
    selectedProfile,
    setSelectedProfile,
    partitionedBySellers,
  };
};
