import { CampaignHero } from "../../shared/components/Hero/CampaignHero";
import { WhySection } from "../../shared/components/WhySection/WhySection";
import {ProcessSection} from "../../shared/components/ProcessSection/ProcessSection";
import {FAQSection} from "../../shared/components/FAQ/FAQSection";
import { growYourBusiness } from "../../shared/data/growyourbusiness";

export default function StartYourBusiness () {
    return (
        <>
        <CampaignHero campaign={growYourBusiness} />
        <WhySection campaign={growYourBusiness}/>
        <ProcessSection {...growYourBusiness.process} />
        <FAQSection contents={growYourBusiness} />
        </>
    )
}