import { tabs } from "../../data/services/catalogueInfo"
import styles from "./FilterTab.module.css"

export function FilterTab({activeCategory, onChange}) {
    return (
        <div className={`flex items-center justify-start md:justify-center gap-4 mb-10 ${styles.tabs}`}>
            {tabs.map((tab)=> (
                <button 
                    key={tab.value}
                    onClick={() => onChange(tab.value)}
                    className={`${styles.tab} ${activeCategory === tab.value ? styles.active : ""}`}
                >
                    {tab.label}
                </button>
            )
            )}
        </div>
    )
}