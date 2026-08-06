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
      <div className={styles.visual}>
        <ProcessIcon
          icon={icon}
          variant={iconVariant}
          number={number}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <p className={styles.subtitle}>{description}</p>
        )}
      </div>
    </article>
  );
}