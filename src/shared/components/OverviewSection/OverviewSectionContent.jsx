import { CircleCheck} from "lucide-react";
import styles from "./OverviewSectionContent.module.css";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function OverviewSectionContent({ product }) {
  const {
    title,
    description,
    benefits,
  } = product.overview;

  return (
    <div>
      <SectionHeading
        title={title}
        eyebrow="WHY THIS SERVICE"
      />

      <p className={styles.description}>
        {description}
      </p>

      <ul className={styles.list}>
        {benefits.map((benefit) => (
          <li key={benefit} className={styles.listItem}>
            <CircleCheck
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}