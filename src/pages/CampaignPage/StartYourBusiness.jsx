import { CampaignHero } from "../../shared/components/Hero/CampaignHero";
import { WhySection } from "../../shared/components/WhySection/WhySection";
import {ProcessSection} from "../../shared/components/ProcessSection/ProcessSection";
import {FAQSection} from "../../shared/components/FAQ/FAQSection";
import { startYourBusiness } from "../../shared/data/startyourbusinessprocess";

export default function StartYourBusiness () {
    return (
        <>
        <CampaignHero campaign={startYourBusiness} />
        <WhySection campaign={startYourBusiness}/>
        <ProcessSection {...startYourBusiness.process} />
        <FAQSection contents={startYourBusiness} />
        </>
    )
}