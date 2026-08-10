import {gst} from "./GSTRegistration";
import { logo } from "./LogoDesign";
import { startup } from "./StartupMentoring";
import { basicWebsite } from "./BasicWebsite";
import { businessEmailSetup } from "./BusinessEmailSetup";
import { businessPlanPreparation } from "./BusinessPlanPreparation";
import { companyRegistrations } from "./CompanyRegistrations";
import { copyrightRegistration } from "./CopyrightRegistration";
import { digitalSignatureCertificate } from "./DigitalSignatureCertificate";
import {eCommerceStoreSetup} from "./ECommerceStoreSetup";
import { fssaiRegistration } from "./FSSAIRegistration";
import { googleBusinessProfileSetup } from "./GoogleBusinessProfileSetup";
import { msmeConsultation } from "./MSMEConsultation";
import { msmeRegistration } from "./MSMERegistration";
import { panTanRegistration } from "./PANTANRegistration";
import { partnershipDeedDrafting } from "./PartnershipDeedDrafting";
import { premiumWebsite } from "./PremiumWebsite";
import { projectReportBankLoan } from "./ProjectReportBankLoan";
import { section8CompanyRegistration } from "./Section8CompanyRegistration";
import { shopEstablishmentRegistration } from "./ShopEstablishmentRegistration";
import { socialMediaManagement } from "./SocialMediaManagement";
import { tradeLicenseAssistance } from "./TradeLicenseAssistance";
import { trademarkRegistration } from "./TrademarkRegistration";
import { startYourBusiness } from "../startyourbusinessprocess";
import { growYourBusiness } from "../growyourbusiness";

export const products = {

    [gst.slug]: gst,
    [logo.slug]:logo,
    [startup.slug]: startup,
    [basicWebsite.slug]:basicWebsite,
    [businessEmailSetup.slug]:businessEmailSetup,
    [businessPlanPreparation.slug]: businessPlanPreparation,
    [companyRegistrations.slug]: companyRegistrations,
    [copyrightRegistration.slug]: copyrightRegistration,
    [digitalSignatureCertificate.slug]:digitalSignatureCertificate,
    [eCommerceStoreSetup.slug]: eCommerceStoreSetup,
    [fssaiRegistration.slug]: fssaiRegistration,
    [googleBusinessProfileSetup.slug]:googleBusinessProfileSetup,
    [msmeConsultation.slug]: msmeConsultation,
    [msmeRegistration.slug]: msmeRegistration,
    [panTanRegistration.slug]: panTanRegistration,
    [partnershipDeedDrafting.slug]:partnershipDeedDrafting,
    [premiumWebsite.slug]: premiumWebsite,
    [projectReportBankLoan.slug]: projectReportBankLoan,
    [section8CompanyRegistration.slug]: section8CompanyRegistration,
    [shopEstablishmentRegistration.slug]:shopEstablishmentRegistration,
    [socialMediaManagement.slug]: socialMediaManagement,
    [tradeLicenseAssistance.slug]:tradeLicenseAssistance,
    [trademarkRegistration.slug]: trademarkRegistration,
    [startYourBusiness.slug]: startYourBusiness,
    [growYourBusiness.slug]: growYourBusiness,
};

export default products;

export const productList = Object.values(products);