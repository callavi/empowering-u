import { Button } from "../Button/Button";
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
                            return (
                                    <Button
                                        variant={action.variant}
                                        size={action.size}
                                        startIcon={Icon && <Icon size={18} />}
                                        className={styles.button}
                                        as = "a"
                                        key={action.label}
                                        href={action.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {action.label}
                                    </Button>
                            )
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