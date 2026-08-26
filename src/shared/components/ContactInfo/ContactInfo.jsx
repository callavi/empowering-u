import styles from "./ContactInfo.module.css";
import { Button } from "../Button/Button";

export function ContactInfo({
  heading,
  subheading,
  primaryText,
  secondaryText,
  items,
}) {
  return (
    <article className={styles.info}>
      <div className={styles.header}>
        <h3 className={styles.heading}>{heading}</h3>
      </div>

      <ul className={styles.list}>
        {items.map(({ text, description, icon: Icon }) => (
          <li key={text} className={styles.item}>
            <div className={styles.iconWrapper}>
              <Icon size={20} strokeWidth={1.8} />
            </div>

            <div className={styles.itemContent}>
              <span className={styles.title}>{text}</span>

              <p className={styles.description}>
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <h4 className={styles.subheading}>
          {subheading}
        </h4>

        <div className={styles.buttons}>
          <Button
            variant="primary"
            as="a"
            href="tel:+917908466757"
          >
            {primaryText}
          </Button>

          <Button
            variant="outline"
            as="a"
            href="https://wa.me/917908466757?text=Hi%2C%20I%27m%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            {secondaryText}
          </Button>
        </div>
      </div>
    </article>
  );
}