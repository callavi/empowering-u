import { useEffect, useState } from "react";

import { CampaignHero } from "../../shared/components/Hero/CampaignHero";
import { WhySection } from "../../shared/components/WhySection/WhySection";
import { ProcessSection } from "../../shared/components/ProcessSection/ProcessSection";
import { FAQSection } from "../../shared/components/FAQ/FAQSection";

import { getService } from "../../shared/lib/service";

export default function StartYourBusiness() {
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function loadCampaign() {
            try {
                setLoading(true);
                setError(null);

                const service = await getService("start-your-business");

                if (!cancelled) {
                    setCampaign(service);
                }
            } catch (error) {
                console.error("Failed to load Start Your Business:", error);

                if (!cancelled) {
                    setError(error);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadCampaign();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !campaign) {
        return <div>Something went wrong while loading this package.</div>;
    }

    return (
        <>
            <CampaignHero campaign={campaign} />
            <WhySection campaign={campaign} />
            <ProcessSection {...campaign.process} />
            <FAQSection contents={campaign} />
        </>
    );
}