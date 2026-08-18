import { useEffect, useState } from "react";
import styles from "./CatalogueSection.module.css";
import { CatalogueGrid } from "./CatalogueGrid";
import { getServices } from "../../lib/service";
import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { CatalogueSkeleton } from "./CatalogueSkeleton";
import { Hero } from "../Hero/hero";
import { Heroes } from "../../data/heroConfig";

export function CatalogueSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function loadServices() {
            try {
                setLoading(true);
                setError(null);

                const services = await getServices();

                if (!cancelled) {
                    setProducts(services);
                }
            } catch (error) {
                console.error("Failed to load catalogue:", error);

                if (!cancelled) {
                    setError(error);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadServices();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
        <Hero hero={Heroes.catalogue} />
        <section className={styles.section} id="catalogue">
            <Container>
                <SectionHeading
                    title="Our Services"
                    description="We offer a wide range of services to meet your needs. Explore our catalogue below"
                    align="center"
                />

                {loading && <CatalogueSkeleton />}

                {error && (
                    <p>
                        Something went wrong while loading our services.
                    </p>
                )}

                {!loading && !error && (
                    <CatalogueGrid products={products} />
                )}
            </Container>
        </section>
    </>
    );
}