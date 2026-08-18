import Container from "../Container/Container"
import { OverviewSectionContent } from "./OverviewSectionContent"
import {PriceCard} from "../Cards/PriceCard/PriceCard"
import styles from "./OverviewSection.module.css"
import Reveal from "../../motion/Reveal"

export function OverviewSection ({product}) {
    return (
        <section className={styles.section}>
            <Container>
                <section className="grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-16
                                xl:gap-24
                                items-center">

                    <Reveal direction="up">
                        <OverviewSectionContent product={product} />
                    </Reveal>

                    <Reveal direction="up" delay={0.1}>
                        <div className="flex items-center w-full justify-center m-auto">
                            <PriceCard product={product} />
                        </div>
                    </Reveal>

                </section>
            </Container>
        </section>
    )
}
