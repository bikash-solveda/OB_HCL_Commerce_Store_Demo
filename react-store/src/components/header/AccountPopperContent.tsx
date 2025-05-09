/*
 *==================================================
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *==================================================
 */
//Standard libraries
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
//Custom libraries
import * as ROUTES from "../../constants/routes";
//Redux
import { entitledOrgSelector, activeOrgSelector } from "../../redux/selectors/organization";
import { currentContractIdSelector, contractSelector } from "../../redux/selectors/contract";

//UI
import {
  StyledTypography,
  StyledSelect,
  StyledList,
  StyledListItem,
  StyledListItemText,
  StyledListItemIcon,
  StyledButton,
  StyledFormControl,
  StyledInputLabel,
  StyledProgressPlaceholder,
  StyledLink,
} from "@hcl-commerce-store-sdk/react-component";
import { Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import styled from "@mui/styled-engine-sc";
import { forUserIdSelector } from "../../redux/selectors/user";

const StyledB2BOrgSection = styled("div")`
  ${({ theme }) => `
    background: ${theme.palette.background.default};
    padding: ${theme.spacing(2)};
  `}
`;

function AccountPopperContent(props: any): JSX.Element {
  const { isB2B, userName, handleClose, handleOrgChange, handleContractChange, handleLogout } = props;
  const { t } = useTranslation();
  const [activeOrg, setActiveOrg] = useState<any>(null);
  const [activeContract, setActiveContract] = useState<any>(null);

  const entitledOrgs = useSelector(entitledOrgSelector);
  const activeOrgId = useSelector(activeOrgSelector);
  const currentContractId = useSelector(currentContractIdSelector);
  const eligibleContracts = useSelector(contractSelector);
  const forUserId = useSelector(forUserIdSelector);

  const [edit, setEdit] = useState<boolean>(false);

  const handleEditClicked = () => {
    setEdit(true);
  };

  const onOrgChange = (event) => {
    setActiveContract(null);
    setEdit(false);
    handleOrgChange(event);
  };

  const onContractChange = (event) => {
    setActiveContract(null);
    setEdit(false);
    handleContractChange(event);
  };

  useEffect(() => {
    if (entitledOrgs && activeOrgId) {
      const org = entitledOrgs.filter((o) => o.organizationId === activeOrgId)[0];
      if (org) {
        setActiveOrg(org);
      }
    }
    if (eligibleContracts && currentContractId) {
      const c = eligibleContracts[currentContractId];
      if (c) {
        setActiveContract(c);
      } else {
        setActiveContract(null);
      }
    }
  }, [entitledOrgs, activeOrgId, currentContractId, eligibleContracts]);

  const B2BOrgContractReadOnly = () => {
    return (
      <>
        <StyledTypography variant="body2" id="header-account-org">
          {t("Header.AccountPopper.Organization")}
        </StyledTypography>
        <StyledTypography id="header-account-activeOrg" aria-describedby="header-account-org" gutterBottom>
          {activeOrg.displayName}
        </StyledTypography>
        <StyledTypography variant="body2" id="header-account-contract">
          {t("Header.AccountPopper.Contract")}
        </StyledTypography>
        <StyledTypography id="header-account-activeContract" aria-describedby="header-account-contract" gutterBottom>
          {activeContract}
        </StyledTypography>
        <StyledButton
          testId="header-accountPopper-edit"
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleEditClicked}>
          {t("Header.AccountPopper.Edit")}
        </StyledButton>
      </>
    );
  };

  const B2BOrgContractForm = () => {
    return (
      <form name="headerOrgSwitchForm" id={`header-org-contract-form`} noValidate>
        {activeOrg && (
          <StyledFormControl variant="outlined">
            <StyledInputLabel disableAnimation={true} htmlFor="header-account-org">
              {t("Header.AccountPopper.Organization")}
            </StyledInputLabel>
            <StyledSelect
              data-testid="account-popper-org-select"
              native
              fullWidth
              value={activeOrg.organizationId}
              onChange={(event) => onOrgChange(event)}
              id="header-account-org">
              {entitledOrgs.map((o) => {
                return (
                  <option key={o.organizationId} value={o.organizationId}>
                    {o.displayName}
                  </option>
                );
              })}
            </StyledSelect>
          </StyledFormControl>
        )}
        {eligibleContracts && (
          <StyledFormControl variant="outlined">
            <StyledInputLabel disableAnimation={true} htmlFor="header-account-contract">
              {t("Header.AccountPopper.Contract")}
            </StyledInputLabel>
            <StyledSelect
              data-testid="account-popper-contract-select"
              native
              fullWidth
              value={currentContractId}
              onChange={(event) => onContractChange(event)}
              id="header-account-contract">
              {Object.entries(eligibleContracts).map((v) => {
                const [k, c] = v;
                return (
                  <option key={k} value={k}>
                    {c}
                  </option>
                );
              })}
            </StyledSelect>
          </StyledFormControl>
        )}
      </form>
    );
  };

  const OrgAndContract = () => {
    return (
      <StyledB2BOrgSection>
        {activeContract ? edit ? <B2BOrgContractForm /> : <B2BOrgContractReadOnly /> : <StyledProgressPlaceholder />}
      </StyledB2BOrgSection>
    );
  };

  const WelcomeSection = () => {
    return (
      <StyledListItem>
        <StyledListItemText
          primary={
            <StyledTypography className="account-welcome-popup" variant="body2">
              {t("Header.AccountPopper.Welcome", { ...userName })}
            </StyledTypography>
          }></StyledListItemText>
      </StyledListItem>
    );
  };

  const AccountSetting = () => {
    return (
      <StyledLink
        testId={`account-popper-${isB2B ? "dashboard" : "account"}`}
        to={isB2B ? ROUTES.DASHBOARD : ROUTES.ACCOUNT}
        id="acount-popper-myaccount-dashboard-link"
        onClick={handleClose}>
        <StyledListItem>
          <StyledListItemIcon>
            <AccountCircleIcon />
          </StyledListItemIcon>
          <StyledListItemText
            primary={
              <>{isB2B ? t("Dashboard.Title") : t("Header.AccountPopper.AccountSetting")}</>
            }></StyledListItemText>
        </StyledListItem>
      </StyledLink>
    );
  };

  const LogoutSection = () => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <StyledLink testId={`account-popper-signout`} to="" onClick={(event) => handleLogout(event)}>
        <StyledListItem>
          <StyledListItemIcon>
            <ExitToAppIcon />
          </StyledListItemIcon>
          <StyledListItemText primary={<>{t("Header.AccountPopper.SignOut")}</>}></StyledListItemText>
        </StyledListItem>
      </StyledLink>
    );
  };

  return (
    <StyledList disablePadding>
      <WelcomeSection />

      {isB2B && activeOrg && (
        <>
          {/* <Divider component="li" />
          <OrgAndContract /> */}
        </>
      )}

      <Divider component="li" />
      <AccountSetting />

      {!forUserId && (
        <>
          <Divider component="li" />
          <LogoutSection />
        </>
      )}
    </StyledList>
  );
}

AccountPopperContent.propTypes = {
  isB2B: PropTypes.bool.isRequired,
  userName: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOrgChange: PropTypes.func.isRequired,
  handleContractChange: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default AccountPopperContent;
