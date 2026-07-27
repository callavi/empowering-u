import { ProcessIcon } from "./ProcessIcon";
import styles from "./ProcessStep.module.css";


export function ProcessStep({
  number,
  icon,
  iconVariant,
  title,
  description,
}) {
  return (
    <article className={styles.step}>
    <div className={styles.visual}>
    <ProcessIcon icon={icon} 
                variant={iconVariant}
                number={number}
    />
    </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.subtitle}>{description}</p>
    
    </article>
  );
}