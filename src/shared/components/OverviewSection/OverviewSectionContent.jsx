import { Plus } from "lucide-react";
import styles from "./OverviewSectionContent.module.css";

export function OverviewSectionContent ({product}) {
    const {
    title,
    description,
    benefits,
    } = product.overview;

    return (
        <div className="flex flex-col gap-4">
            <h2 className={styles.heading}>{title}</h2>

            <p className={styles.description}>
                {description}
            </p>

            <ul className={styles.list}>
                {benefits.map((benefit) => (
                <li key={benefit} className={styles.listItem}>
                    <Plus size={12} />
                    <span>{benefit}</span>
                </li>
                ))}
            </ul>
        </div>
    )

}