import {NavLink} from 'react-router-dom';
import styles from './PathwayCard.module.css';
import { Button } from '../../Button/Button';

import {ArrowRight} from "lucide-react";

export function PathwayCard({ pathway }) {
  const {
  title,
  description,
  slug,
  Illustration,
  button,
} = pathway;
  return (
      <article className={`flex flex-col md:flex-row w-full pathway-card min-h-[400px] max-w-xl gap-6 md:gap-10 group ${styles.article}`}>
        <div className={`basis-[55%] flex-1 ${styles.illustration}`}>
          <Illustration />
        </div>
        <div className = "basis-[45%] flex flex-col flex-1 items-center justify-center p-6 md:p-8 space-y-6 md:space-y-8">
        <h2 className={`${styles.cardheading}`}>
            {title.map((part, index) => (
              <span
                key={index}
                className={part.highlight ? styles.highlight : undefined}
              >
                {part.text}
              </span>
            ))}
        </h2>
        <p className={`${styles.carddescription}`}>{description}</p>
        <div className = "w-full mt-3">
          <Button as = {NavLink} to={`/${slug}`} variant="primary" size="medium" endIcon={<ArrowRight className="transition-transform group-hover:translate-x-1"/>} fullWidth>
            {button}
          </Button>
        </div>
        </div>
      </article>
  );
}