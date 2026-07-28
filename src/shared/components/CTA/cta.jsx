import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import styles from "./cta.module.css";

export function CTA ({info}) {
    const {
        heading,
        subheading,
        Illustration,
        actions,
    } = info;


    return (
        <section className="flex items-center justify-center">
            <div className={`grid md:grid-cols-2 gap-4 cta-illustration ${styles.cta}`}>
                <div className="flex flex-col justify-center gap-4 p-6">
                    <div className="flex flex-col items-start justify-center gap-4">
                        <h3 className={styles.heading}>{heading}</h3>
                        <p className={styles.subheading}>{subheading}</p>
                    </div>
                    <div className="flex justify-start gap-2">
                        {actions.map((action) => {
                            const Icon = action.icon;
                            return action.href ? (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant={action.variant}
                                        size={action.size}
                                        startIcon={Icon && <Icon size={18} />}
                                        className={styles.button}
                                    >
                                        {action.label}
                                    </Button>
                                </a>
                            ) : (
                                <NavLink
                                    key={action.label}
                                    to={action.to}
                                >
                                    <Button
                                        variant={action.variant}
                                        size={action.size}
                                        startIcon={Icon && <Icon size={18} />}
                                        className={styles.button}
                                    >
                                        {action.label}
                                    </Button>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Illustration className={styles.illustration}/>
                </div>
            </div>
        </section>
    )
}