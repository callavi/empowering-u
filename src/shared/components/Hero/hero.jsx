import { NavLink } from "react-router-dom";
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

    console.log(hero);
    console.log(primaryActions);

    return (
        <section  className={styles.hero}>
            <Container>
                <section className = "grid md:grid-cols-2 gap-36 py-20">
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
                        <div>
                            {primaryActions.map((action) => (
                                <NavLink
                                    key={action.label}
                                    to={action.to}
                                >
                                    <Button
                                        variant={action.variant}
                                        size={action.size}
                                        className={styles.button}
                                    >
                                        {action.label}
                                    </Button>
                                </NavLink>
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