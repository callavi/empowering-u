import styles from "./CatalogueSection.module.css"
import { CatalogueGrid } from "./CatalogueGrid"
import { productList } from "../../data/services"
import Container from "../Container/Container"
import { SectionHeading } from "../SectionHeading/SectionHeading"

export function CatalogueSection () {
    return (
        <section className={styles.section}>
            <Container>
                <SectionHeading
                    title="Our Services"
                    description="We offer a wide range of services to meet your needs. Explore our catalogue below" />
                <CatalogueGrid products={productList} />
            </Container>
        </section>
    )
}