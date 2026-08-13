import { Button } from "../Button/Button";
import styles from "./hero.module.css";
import Container from "../Container/Container";

export function Hero ({hero}) {

    const {
        badge,
        title,
        description,
        primaryActions,
        illustration: Illustration,
        floatingCards,
    } = hero;

    return (
        <section  className={styles.hero}>
            <Container>
                <section className = "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-36 py-12 md:py-20">
                    <div className={styles.heroContent}>
                        {badge && (
                        <div className={styles.badge}>
                            {badge}
                        </div>
                        )}
                        <div className="flex flex-col gap-2 mb-4">
                            <h1 className={styles.heading}>
                                {title.before}{" "}
                                    <span className={styles.highlight}>
                                        {title.highlight}
                                    </span>
                            </h1>
                            <p className={styles.subheading}>
                                {description}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {primaryActions.map((action) => (
                                    <Button
                                        variant={action.variant}
                                        size={action.size}
                                        className={styles.button}
                                        as="a"
                                        key={action.label}
                                        href={action.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {action.label}
                                    </Button>
                            )
                            )}
                        </div>
                    </div>
                    <div className={styles.media}>
                        {Illustration && <Illustration cards={floatingCards} />}
                    </div>
                </section>
            </Container>
        </section>
    )

}