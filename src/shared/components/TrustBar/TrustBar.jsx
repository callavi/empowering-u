import { Laptop,
        Headset,
        CircleDollarSign,
        Lock
 } from "lucide-react"
import styles from "./TrustBar.module.css";

export function TrustBar () {
    return (
        <section className={`grid md:grid-cols-4 gap-4 ${styles.trust}`}>
            <div className="flex gap-2">
                <CircleDollarSign className={styles.icon} />
                <p>Transparent Pricing</p>
            </div>
            <div className="flex gap-2">
                <Headset className={styles.icon} />
                <p>Expert Support</p>
            </div>
            <div className="flex gap-2">
                <Laptop className={styles.icon} />
                <p>100% online process</p>
            </div>
            <div className="flex gap-2">
                <Lock className={styles.icon} />
                <p>Legally Compliant</p>
            </div>
        </section>
    )
}