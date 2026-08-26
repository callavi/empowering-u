import styles from "./WhyCard.module.css";

export function WhyCard({ campaign, variant = "default" }) {
  const {
    text,
    description,
    icon: Icon,
    size,
  } = campaign;

  return (
    <article
      className={`
        ${styles.article}
        ${size === "large" ? styles.large : styles.small}
        ${variant === "emphasis" ? styles.emphasis : styles.default}
      `}
    >
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon
            size={34}
            strokeWidth={1.8}
            className={styles.icon}
          />
        </div>

        <div className={styles.copy}>
          <h3 className={styles.cardheading}>
            {text}
          </h3>

          <p className={styles.carddescription}>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}