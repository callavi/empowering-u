import { PathwayCard } from "../Cards/PathwayCard/PathwayCard";
import { pathways } from "../../data/pathway";
import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import styles from "./PathwaySection.module.css"


export function PathwaySection () {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-4">
                    <SectionHeading title="Choose Your Path. We'll handle the rest" eyebrow="Not sure what you need?" align="center"/>
                    <div className="grid gap-18 md:grid-cols-2 mb-4">
                    {pathways.map((item) => (
                        <PathwayCard
                        key={item.path}
                        pathway={item}
                        />
                    ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}