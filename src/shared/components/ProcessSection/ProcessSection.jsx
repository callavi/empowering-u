import { Fragment } from "react";


import {ProcessStep} from "./ProcessStep";
import {Connector} from "./Connector";
import Container from "../Container/Container";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import styles from "./ProcessSection.module.css";

export function ProcessSection({ heading, businessProcess }) {
  return (
    <Container>
      <section className="flex flex-col items-center gap-8">
      <SectionHeading title = {heading} align="center" />

        <div className = {styles.steps}>
          {businessProcess.map((step, index) => (
            <Fragment key={step.id}>
              <ProcessStep
                number={step.number}
                icon={step.icon}
                iconVariant={step.variant}
                title={step.title}
                description={step.description}
              />

              {index < businessProcess.length - 1 && (
                <Connector className={`flex items-center justify-center ${styles.connector}`} />
              )}
            </Fragment>
          ))}
        </div>
      </section>
    </Container>
  );
}