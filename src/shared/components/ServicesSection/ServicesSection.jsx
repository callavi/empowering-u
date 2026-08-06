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
                <div className="flex flex-col gap-4">
                    <SectionHeading title="Or, browse all our services" align="center" />
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((item) => (
                        <ServiceCard
                        key={item.path}
                        service={item}
                        />
                    ))}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <NavLink to="/catalogue">
                            <Button variant="text" size="large">
                            View All
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    )
}