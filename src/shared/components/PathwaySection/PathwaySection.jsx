import { PathwayCard } from "../Cards/PathwayCard/PathwayCard";
import { pathways } from "../../data/pathway";
import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import Reveal from "../../motion/Reveal";

import styles from "./PathwaySection.module.css"


export function PathwaySection () {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-4" id="pathway">
                    <SectionHeading title="Choose Your Path. We'll handle the rest" eyebrow="Not sure what you need?" align="center"/>
                        <div className="grid gap-18 md:grid-cols-2 mb-4">
                            {pathways.map((item, index) => (
                                <Reveal
                                    key={item.id}
                                    direction="up"
                                    delay={index * 0.19}
                                >
                                    <PathwayCard pathway={item} />
                                </Reveal>
                            ))}
                        </div>
                </div>
            </Container>
        </section>
    )
}