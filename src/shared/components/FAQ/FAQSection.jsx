import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import QuestionsIllustration from "../../Illustration/ProductIllustrations/QuestionsIllustration";

import styles from "./FAQSection.module.css";

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
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4">
          {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={clsx(
                  styles.accordionItem,
                  openIndex === index && styles.active
                )}
              >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={20}
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
                <div className="px-6">
                  <p className="m-0 pb-6">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {QuestionsIllustration && (
                    <div className={styles.illustration}>
                      <QuestionsIllustration />
                    </div>
                  )}
      </section>
      </Container>
    </section>
  );
}