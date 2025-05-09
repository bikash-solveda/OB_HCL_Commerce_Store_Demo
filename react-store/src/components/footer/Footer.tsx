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
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { paramCase } from "change-case";
//Foundation libraries
import { useSite } from "../../_foundation/hooks/useSite";
//Custom libraries
import { footerConfig } from "./footerConstant";
import ContentRecommendationWidget from "../commerce-widgets/content-recommendation-widget";
import { SessionErrorDialog } from "../widgets/session-error-modal";
import ConfirmationDialog from "../widgets/confirmation-dialog/ConfirmationDialog";
import footerlogo from "../../sapphireimages/images/ON_Logo_notagline_horizontal_RGB.png";
//UI
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  StyledGrid,
  StyledContainer,
  StyledTypography,
  StyledFooter,
  StyledTooltip,
} from "@hcl-commerce-store-sdk/react-component";

function Footer(props: any) {
  const { t } = useTranslation();
  const { mySite } = useSite();
  const Logo = useCallback(() => {
    return mySite != null ? (
      <div className="footer-logo">
        <img src={footerlogo} alt="logo" width="213" height="68" style={{ cursor: "pointer" }} />
        {/* <ContentRecommendationWidget
          {...{
            widget: {
              id: `footer-${paramCase(footerConfig.espot.eSpotName)}`,
              widgetName: "content-recommendation-widget",
              name: footerConfig.espot.eSpotName,
              properties: {
                emsName: footerConfig.espot.eSpotName,
              },
            },
            page: { name: "" },
          }}></ContentRecommendationWidget> */}
      </div>
    ) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, mySite]);

  const CustomerServiceLinks = () => {
    const customerServiceLinks = [
      {
        linkDescription: t("Footer.CustomerService.ContactUsDescription"),
        linkText: t("Footer.CustomerService.ContactUs"),
        linkURL: "contact-us",
      },
      {
        linkText: t("Footer.CustomerService.PrivacyPolicy"),
        linkURL: "privacy-policy",
      },
    ];
    return (
      <div className="footer-nav">
        <StyledTypography variant="overline">{t("Footer.CustomerService.Label")}</StyledTypography>
        <StyledTypography variant="caption">
          {customerServiceLinks.map((v: any) => (
            <div key={v.linkURL}>
              <StyledTooltip title={`${t("Footer.DisabledMessage")}`}>
                <Link
                  key={v.linkURL}
                  data-testid={v.linkURL}
                  // to={`/${v.linkURL}`}
                  to="/"
                  onClick={(event) => event.preventDefault()}
                  // title={ v["linkDescription"] ? v["linkDescription"] : v.linkText}
                >
                  {v.linkText}
                </Link>
              </StyledTooltip>
            </div>
          ))}
        </StyledTypography>
      </div>
    );
  };

  const CompanyLinks = () => {
    const companyLinks = [
      {
        linkText: t("Footer.CompanyLinks.OurStory"),
        linkURL: "our-story",
      },
      {
        linkText: t("Footer.CompanyLinks.Careers"),
        linkURL: "careers",
      },
    ];
    return (
      <div className="contact-us">
        <StyledTypography variant="overline">{t("Footer.CompanyLinks.Label")}</StyledTypography>
        <StyledTypography variant="caption">
          {companyLinks.map((v: any) => (
            <div key={v.linkURL}>
              <StyledTooltip title={`${t("Footer.DisabledMessage")}`}>
                <Link data-testid={v.linkURL} key={v.linkURL} to="/" onClick={(event) => event.preventDefault()}>
                  {v.linkText}
                </Link>
              </StyledTooltip>
            </div>
          ))}
        </StyledTypography>
      </div>
    );
  };

  const Copyright = () => {
    return (
      <div className="copyright">
        <StyledTypography variant="caption">
          &copy; <span>{new Date().getFullYear()}</span>
          <span> {t("Footer.Copyright")}</span>
        </StyledTypography>
      </div>
    );
  };

  return (
    <>
      <StyledFooter>
        <StyledContainer>
          <StyledGrid container spacing={2} className="footer-top">
            <StyledGrid item xs={12} lg={4}>
              <Logo />
              <StyledTypography variant="caption">{t("Footer.Description")}</StyledTypography>
            </StyledGrid>
            <StyledGrid item xs={6} sm={4} lg={2}>
              <CustomerServiceLinks />
            </StyledGrid>
            <StyledGrid item xs={6} sm={4} lg={2}>
              <CompanyLinks />
            </StyledGrid>
            <StyledGrid item xs={12} sm={4} lg={4}>
              <div>
                <StyledTypography variant="caption">{t("Footer.FollowUs")}</StyledTypography>
              </div>
              <div className="footer-social-link">
                <FacebookIcon />
              </div>
              <div className="footer-social-link">
                <TwitterIcon />
              </div>
              <div className="footer-social-link">
                <InstagramIcon />
              </div>
            </StyledGrid>
          </StyledGrid>
          <StyledGrid container className="footer-bottom">
            <StyledGrid item xs={12} sm={9}>
              <Copyright />
            </StyledGrid>
          </StyledGrid>
        </StyledContainer>
      </StyledFooter>
      <SessionErrorDialog />
      <ConfirmationDialog />
    </>
  );
}

export default React.memo(Footer);
