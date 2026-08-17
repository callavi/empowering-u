import { Fragment } from "react";


import {ProcessStep} from "./ProcessStep";
import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import clsx from "clsx";

import styles from "./ProcessSection.module.css";

export function ProcessSection({heading,accent,eyebrow,features,variant="default",illustration: Illustration}) {

const isJourney = variant === "journey";
const layout = isJourney ? "vertical" : "horizontal";
  return (
    <section className={styles.section}>
      <Container>
        <div className={clsx(
          styles.content,
          variant === "journey"
            ? styles.twoColumn
            : styles.singleColumn
        )}>

          <div className={styles.main}>
            <SectionHeading
              title={heading}
              align={variant === "journey" ? "left" : "center"}
              accent={accent}
              eyebrow={eyebrow}
            />

            <div
              className={clsx(
                styles.steps,
                layout === "vertical"
                  ? styles.stepsVertical
                  : styles.stepsHorizontal
              )}
            >
              {features.map((step) => (
                <Fragment key={step.id}>
                  <ProcessStep
                    number={step.number}
                    icon={step.icon}
                    iconVariant={step.variant}
                    title={step.title}
                    description={step.description}
                    layout={layout}
                  />
                </Fragment>
              ))}
            </div>
          </div>

          {variant === "journey" && Illustration && (
            <div className={styles.illustration}>
              <Illustration />
            </div>
          )}
        </div>
    </Container>
    </section>
  );
}