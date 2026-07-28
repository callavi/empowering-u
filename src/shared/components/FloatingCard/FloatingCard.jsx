import styles from "./FloatingCard.module.css";

export function FloatingCard({
  icon: Icon,
  label,
  className,
}) {
  return (
    <div className={`${styles.card} ${styles[className]}`}>
      <Icon className={styles.icon} />
      <span>{label}</span>
    </div>
  );
}