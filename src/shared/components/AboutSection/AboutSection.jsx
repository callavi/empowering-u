import { Link } from "react-router-dom";

import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import styles from "./AboutSection.module.css";

export function AboutSection({ content }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className={styles.intro}>
            <SectionHeading
              title={content.heading}
              eyebrow={content.eyebrow}
              align="left"
              accent={content.accent}
            />

            <p className={styles.description}>
              {content.description}
            </p>

            <Link
              to={content.link.to}
              className={styles.link}
            >
              {content.link.label}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>

          <div className={styles.context}>
            <span className={styles.eyebrow}>
              {content.eyebrow}
            </span>

            <p>{content.empoweringMinds}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}