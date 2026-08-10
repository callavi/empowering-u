import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./ServicesSection.module.css"

import { ServiceCard } from "../Cards/ServiceCard/ServiceCard";
import { services } from "../../data/serviceinfo";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";



export function ServicesSection () {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-4" id="services">
                    <SectionHeading title="Or, browse all our services" align="center" />
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((item) => (
                        <ServiceCard
                        key={item.id}
                        service={item}
                        />
                    ))}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                            <Button variant="text" size="large"
                            as={NavLink}
                            to="/catalogue">
                            View All
                            </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}