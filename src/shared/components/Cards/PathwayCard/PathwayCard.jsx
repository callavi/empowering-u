import {NavLink} from 'react-router-dom';
import styles from './PathwayCard.module.css';
import { Button } from '../../Button/Button';

import {ArrowRight} from "lucide-react";

export function PathwayCard({ pathway }) {
  const {
  title,
  description,
  path,
  Illustration,
  button,
} = pathway;
  return (
    <NavLink to={path}>
      <article className={`flex w-full pathway-card min-h-[400px] max-w-xl gap-10 group ${styles.article}`}>
        <div className={`[basis-[55%] flex-1 ${styles.illustration}`}>
          <Illustration />
        </div>
        <div className = "[basis-[45%] flex flex-col flex-1 items-center justify-center p-8 space-y-8">
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
          <Button variant="primary" size="medium" endIcon={<ArrowRight className="transition-transform group-hover:translate-x-1"/>} fullWidth>
            {button}
          </Button>
        </div>
        </div>
      </article>
    </NavLink>
  );
}