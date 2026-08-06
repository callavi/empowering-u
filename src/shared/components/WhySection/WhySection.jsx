import { WhyCard } from "../Cards/WhyCard/WhyCard";
import styles from "./WhySection.module.css";
import Container from "../Container/Container";
import {SectionHeading} from "../SectionHeading/SectionHeading"

export function WhySection ({campaign}) {
    const {headline,features} = campaign.benefits;
    return (
        <section className={styles.section}>
            <Container>
                <SectionHeading title={headline} align="center"/>
                <div className={styles.grid}>
                    {features.map((item) => (
                        <WhyCard
                            key={item.id}
                            campaign={item}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}