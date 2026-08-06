import { ProcessIcon } from "./ProcessIcon";
import styles from "./ProcessStep.module.css";
import clsx from "clsx";


export function ProcessStep({
  number,
  icon,
  iconVariant,
  title,
  description,
  layout,
  isLast,
}) {
  return (
    <article
      className={clsx(
        styles.step,
        layout === "vertical"
          ? styles.stepVertical
          : styles.stepHorizontal
      )}
    >
      <div className={styles.content}>
          <ProcessIcon icon={icon} 
                      variant={iconVariant}
                      number={number}
          />
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.subtitle}>{description}</p>}
      </div>
    </article>
  );
}