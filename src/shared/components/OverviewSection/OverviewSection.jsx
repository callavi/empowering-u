import Container from "../Container/Container"
import { OverviewSectionContent } from "./OverviewSectionContent"
import {PriceCard} from "../Cards/PriceCard/PriceCard"
import styles from "./OverviewSection.module.css"

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
                    <OverviewSectionContent product={product} />
                    <div className="flex items-center w-full justify-center m-auto">
                        <PriceCard product={product}/>
                    </div>
                </section>
            </Container>
        </section>
    )
}
