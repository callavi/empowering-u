import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import QuestionsIllustration from "../../Illustration/ProductIllustrations/QuestionsIllustration";

import styles from "./FAQSection.module.css";
import Reveal from "../../motion/Reveal";

export function FAQSection({ contents }) {
  const { faqs } = contents;
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          description="Everything you need to know before applying."
          align="center"
        />

        <div className={styles.layout}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                direction="up"
                delay={index * 0.1}
              >
                <div
                  className={clsx(
                    styles.accordionItem,
                    openIndex === index && styles.active
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className={styles.question}
                    aria-expanded={openIndex === index}
                  >
                    <h3>{faq.question}</h3>

                    <ChevronDown
                      size={20}
                      strokeWidth={1.8}
                      className={clsx(
                        styles.chevron,
                        openIndex === index && styles.rotate
                      )}
                    />
                  </button>

                  <div
                    className={clsx(
                      styles.content,
                      openIndex === index && styles.open
                    )}
                  >
                    <div>
                      <p className={styles.answer}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {QuestionsIllustration && (
            <Reveal direction="right" delay={0.2}>
              <div className={styles.illustration}>
                <QuestionsIllustration />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}