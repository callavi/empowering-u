import { WhyCard } from "../Cards/WhyCard/WhyCard";
import styles from "./WhySection.module.css";
import Container from "../Container/Container";
import {SectionHeading} from "../SectionHeading/SectionHeading"
import Reveal from "../../motion/Reveal";

export function WhySection ({campaign}) {
    const {headline,features} = campaign.benefits;
    return (
        <section className={styles.section}>
            <Container>
                <SectionHeading title={headline} align="center"/>
                    <div className={styles.grid}>
                        {features.map((item, index) => (
                            <Reveal
                                key={item.id}
                                direction="left"
                                delay={index * 0.2}
                            >
                                <WhyCard campaign={item} />
                            </Reveal>
                        ))}
                    </div>
            </Container>
        </section>
    )
}