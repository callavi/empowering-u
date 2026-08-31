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
import { AOC4Filing } from "./AOC4Filing";
import { AdvanceTaxCalculations } from "./AdvanceTaxCalculations";
import { AnnualROCFilings } from "./AnnualROCFilings";
import { BoardResolutionsMinutes } from "./BoardResolutionsMinutes";
import { BusinessAgreements } from "./BusinessAgreements";
import { DirectorRelatedFilings } from "./DirectorRelatedFilings";
import { EInvoicingEWayBillSupport } from "./EInvoicingEWayBillSupport";
import { EPFOPFCompliance } from "./EPFOPFCompliance";
import { ESICCompliance } from "./ESICCompliance";
import { EmployeeDocumentation } from "./EmployeeDocumentation";
import { EmploymentAgreements } from "./EmploymentAgreements";
import { Form16Support } from "./Form16Support";
import { GSTAnnualReturn } from "./GSTAnnualReturn";
import { GSTCancellationAmendment } from "./GSTCancellationAmendment";
import { GSTNoticeResponse } from "./GSTNoticeResponse";
import { GSTReconciliation } from "./GSTReconciliation";
import { GSTReturnFiling } from "./GSTReturnFiling";
import { IPDocumentation } from "./IPDocumentation";
import { IncomeTaxReturnFiling } from "./IncomeTaxReturnFiling";
import { IncorporationCompliance } from "./IncorporationCompliance";
import { LLPAnnualFilings } from "./LLPAnnualFilings";
import { LabourLawRegistrationsFilings } from "./LabourLawRegistrationsFilings";
import { LeaveAttendanceSalaryCompliance } from "./LeaveAttendanceSalaryCompliance";
import { MGT7MGT7AFiling } from "./MGT7MGT7AFiling";
import { NDAConfidentialityAgreements } from "./NDAConfidentialityAgreements";
import { PayrollProcessing } from "./PayrollProcessing";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { ProfessionalTaxCompliance } from "./ProfessionalTaxCompliance";
import { ProfessionalTaxRegistration } from "./ProfessionalTaxRegistration";
import { TDSReturnFiling } from "./TDSReturnFiling";
import { TaxAuditSupport } from "./TaxAuditSupport";
import { TaxNoticeResponse } from "./TaxNoticeResponse";
import { TermsConditions } from "./TermsConditions";
import { TrademarkObjectionOpposition } from "./TrademarkObjectionOpposition";
import { TrademarkRenewal } from "./TrademarkRenewal";
import { VendorAgreements } from "./VendorAgreements";
import { WebsiteComplianceDocumentation } from "./WebsiteComplianceDocumentation";

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
    [AOC4Filing.slug]: AOC4Filing,
    [AdvanceTaxCalculations.slug]: AdvanceTaxCalculations,
    [AnnualROCFilings.slug]: AnnualROCFilings,
    [BoardResolutionsMinutes.slug]: BoardResolutionsMinutes,
    [BusinessAgreements.slug]: BusinessAgreements,
    [DirectorRelatedFilings.slug]: DirectorRelatedFilings,
    [EInvoicingEWayBillSupport.slug]: EInvoicingEWayBillSupport,
    [EPFOPFCompliance.slug]: EPFOPFCompliance,
    [ESICCompliance.slug]: ESICCompliance,
    [EmployeeDocumentation.slug]: EmployeeDocumentation,
    [EmploymentAgreements.slug]: EmploymentAgreements,
    [Form16Support.slug]: Form16Support,
    [GSTAnnualReturn.slug]: GSTAnnualReturn,
    [GSTCancellationAmendment.slug]: GSTCancellationAmendment,
    [GSTNoticeResponse.slug]: GSTNoticeResponse,
    [GSTReconciliation.slug]: GSTReconciliation,
    [GSTReturnFiling.slug]: GSTReturnFiling,
    [IPDocumentation.slug]: IPDocumentation,
    [IncomeTaxReturnFiling.slug]: IncomeTaxReturnFiling,
    [IncorporationCompliance.slug]: IncorporationCompliance,
    [LLPAnnualFilings.slug]: LLPAnnualFilings,
    [LabourLawRegistrationsFilings.slug]: LabourLawRegistrationsFilings,
    [LeaveAttendanceSalaryCompliance.slug]: LeaveAttendanceSalaryCompliance,
    [MGT7MGT7AFiling.slug]: MGT7MGT7AFiling,
    [NDAConfidentialityAgreements.slug]: NDAConfidentialityAgreements,
    [PayrollProcessing.slug]: PayrollProcessing,
    [PrivacyPolicy.slug]: PrivacyPolicy,
    [ProfessionalTaxCompliance.slug]: ProfessionalTaxCompliance,
    [ProfessionalTaxRegistration.slug]: ProfessionalTaxRegistration,
    [TDSReturnFiling.slug]: TDSReturnFiling,
    [TaxAuditSupport.slug]: TaxAuditSupport,
    [TaxNoticeResponse.slug]: TaxNoticeResponse,
    [TermsConditions.slug]: TermsConditions,
    [TrademarkObjectionOpposition.slug]: TrademarkObjectionOpposition,
    [TrademarkRenewal.slug]: TrademarkRenewal,
    [VendorAgreements.slug]: VendorAgreements,
    [WebsiteComplianceDocumentation.slug]: WebsiteComplianceDocumentation,
};

export default products;

export const productList = Object.values(products);