import { ContactForm } from "../ContactForm/ContactForm";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import styles from "./ContactFormSection.module.css";
import Container from "../Container/Container";
import { products } from "../../data/services/index";
import { information } from "../../data/contactInfo";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import Reveal from "../../motion/Reveal";

const services = Object.values(products).map(({ label }) => label);

export function ContactFormSection() {

async function handleSubmit(formData) {
    try {
        const response = await fetch(
            "https://ulledgxoqjdndyrwlmma.supabase.co/functions/v1/contact-form",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to send message.");
        }

        console.log("Contact form submitted:", result);
            return result;

    } catch (error) {
        console.error("Contact form error:", error);
        throw error;
    }
}

    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-8">
                    <SectionHeading 
                    title="Talk to Us" 
                    eyebrow="Not sure which service you need?" 
                    description="Don't worry—we'll help you choose the right one before you spend anything."
                    align="center" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                        <Reveal direction="up">
                            <div className="flex items-center justify-center">
                                <ContactForm
                                    services={services}
                                    onSubmit={handleSubmit}
                                />
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.1}>
                            <div>
                                <ContactInfo {...information} />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
    </section>
    );
}