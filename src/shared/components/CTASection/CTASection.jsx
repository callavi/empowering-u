import Container from "../Container/Container";
import styles from "./CTASection.module.css"
import { CTA } from "../CTA/cta";

export function CTASection ({cta}) {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-4">
                    <CTA  info={cta} />
                </div>
            </Container>
        </section>
    )
}