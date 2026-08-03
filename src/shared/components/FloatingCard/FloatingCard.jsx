import styles from "./FloatingCard.module.css";

export function FloatingCard({
  icon: Icon,
  label,
  className,
  iconSize,
  iconOnly
}) {
  return (
    <div className={`${styles.card} ${styles[className]} ${
    iconOnly ? styles.iconOnly : ""
  }`}>
      {Icon && <Icon className={styles.icon} size={iconSize} />}
        {label && <span>{label}</span>}
    </div>
  );
}