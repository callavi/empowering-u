import { tabs } from "../../data/services/catalogueInfo";
import styles from "./FilterTab.module.css";

export function FilterTab({
  activeCategory,
  onChange,
  counts,
  totalCount,
}) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => {
        const isActive = activeCategory === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`${styles.tab} ${
              isActive ? styles.active : ""
            }`}
            aria-pressed={isActive}
          >
            <span>{tab.label}</span>

            <span className={styles.count}>
              {tab.value === "all"
                ? totalCount
                : counts[tab.value] || 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}