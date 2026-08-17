import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./ServicesSection.module.css"

import { ServiceCard } from "../Cards/ServiceCard/ServiceCard";
import { services } from "../../data/serviceinfo";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

import Reveal from "../../motion/Reveal";



export function ServicesSection () {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-4" id="services">
                    <SectionHeading title="What can we help you with?" align="center" eyebrow="our services"/>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {services.map((item, index) => (
                                <Reveal
                                    key={item.id}
                                    direction="up"
                                    delay={index * 0.19}
                                >
                                    <ServiceCard service={item} />
                                </Reveal>
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