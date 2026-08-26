import { Laptop,
        Headset,
        CircleDollarSign,
        Lock
 } from "lucide-react"
import styles from "./TrustBar.module.css";
import Container from "../Container/Container";

export function TrustBar() {
  return (
    <section className={styles.trust}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.item}>
            <CircleDollarSign className={styles.icon} />
            <p>Transparent Pricing</p>
          </div>

          <div className={styles.item}>
            <Headset className={styles.icon} />
            <p>Expert Support</p>
          </div>

          <div className={styles.item}>
            <Laptop className={styles.icon} />
            <p>100% online process</p>
          </div>

          <div className={styles.item}>
            <Lock className={styles.icon} />
            <p>Legally Compliant</p>
          </div>
        </div>
      </Container>
    </section>
  );
}