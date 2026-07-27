import styles from "./ProcessIcon.module.css";

export function ProcessIcon({
  icon,
  variant = "number",
  number,
}) {
        switch (variant) {
        case "illustration":
            return <img src={icon} alt="" className={styles.icon}  />;

        case "lucide": {
            const Icon = icon;
            return (
            <div className = {styles.iconWrapper}>
            <Icon size = {32} className={styles.lucideIcon}/>
            </div>
            )
        }

        case "number":
        default:
            return (
                <span className={styles.number}>
                    {number}
                </span>
            );
    }

}