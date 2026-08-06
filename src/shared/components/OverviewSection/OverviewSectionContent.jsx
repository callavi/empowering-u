import { CircleCheck} from "lucide-react";
import styles from "./OverviewSectionContent.module.css";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function OverviewSectionContent ({product}) {
    const {
    title,
    description,
    benefits,
    } = product.overview;

    return (
        <div className="flex flex-col gap-4">
            <SectionHeading title={title} eyebrow="WHY THIS SERVICE"/>
                <p className={styles.description}>
                    {description}
                </p>

                <ul className={`grid grid-cols-1 lg:grid-cols-2 mb-4 ${styles.list}`}>
                    {benefits.map((benefit) => (
                    <li key={benefit} className={styles.listItem}>
                        <CircleCheck size={16} />
                        <span>{benefit}</span>
                    </li>
                    ))}
                </ul>
            </div>
    )

}