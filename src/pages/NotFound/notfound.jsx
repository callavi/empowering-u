import { ArrowLeft, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Button } from "../../shared/components/Button/Button";
import Container from "../../shared/components/Container/Container";
import SEO from "../../shared/components/SEO/seo";

import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={styles.page}>
            <SEO
                title="Page Not Found | Empowering Biz"
                description="The page you're looking for could not be found."
                path="/404"
                noIndex={true}
            />

            <Container>
                <section className={styles.content}>
                    <p className={styles.code}>404</p>

                    <h1>Page not found</h1>

                    <p className={styles.description}>
                        Sorry, we couldn't find the page you're looking for.
                        It may have moved, changed, or no longer exist.
                    </p>

                    <div className={styles.actions}>
                        <Button
                            as={NavLink}
                            to="/"
                            variant="primary"
                            size="large"
                            endIcon={<ArrowRight size={18} />}
                        >
                            Back to Home
                        </Button>

                        <Button
                            as={NavLink}
                            to="/catalogue"
                            variant="outline"
                            size="large"
                            startIcon={<ArrowLeft size={18} />}
                        >
                            Explore Services
                        </Button>
                    </div>
                </section>
            </Container>
        </main>
    );
}