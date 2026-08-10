import styles from "./ContactInfo.module.css"
import { Button } from "../Button/Button"

export function ContactInfo ({
    heading,
    subheading,
    primaryText, 
    secondaryText,
    items,
}) {
    return (
        <article className={`flex flex-col p-8 ${styles.infoCard}`}>
            <div className={styles.cardHeader}>
                <h3 className={styles.heading}>{heading}</h3>
            </div>
            <ul className="flex flex-col gap-8">
                {items.map(({text,description,icon: Icon}) => (
                        <li 
                        key = {text}
                        className="flex gap-4">
                            <div className={styles.iconWrapper}>
                                <Icon size={22} />
                            </div>

                            <div>
                                <span className={styles.title}>
                                    {text}
                                </span>

                                <p className={styles.description}>
                                    {description}
                                </p>
                            </div>
                        </li>
                ))}
            </ul>
            <div className={styles.cardSubHeader}>
                <h4 className={styles.heading}>{subheading}</h4>
            </div>
            <div className = "flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" as="a" href="tel:+917908466757">{primaryText}</Button>
                <Button variant="outline" as="a" href="https://wa.me/917908466757?text=Hi%2C%20I%27m%20interested%20in%20your%20services."
                                                target="_blank"
                                                rel="noopener noreferrer">
                    {secondaryText}
                </Button>
            </div>
        </article>
    )
}