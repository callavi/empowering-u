import { SectionHeading } from "../SectionHeading/SectionHeading";
import Container from "../Container/Container";
import styles from "./DocumentsRequiredSection.module.css"
import Reveal from "../../motion/Reveal";

export function DocumentsRequiredSection({ contents }) {
  const { documents } = contents;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title="Documents Required"
          description="Keep these documents ready before you apply."
          align="left"
        />

        <div className={styles.documents}>
          {documents.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                direction="up"
                delay={index * 0.12}
              >
                <article className={styles.documentGroup}>
                  <div className={styles.groupHeader}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={styles.iconWrapper}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <h3 className={styles.heading}>
                      {group.title}
                    </h3>
                  </div>

                  <ul className={styles.list}>
                    {group.list.map((item) => (
                      <li key={item}>
                        <span className={styles.bullet} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}