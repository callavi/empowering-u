import {NavLink} from 'react-router-dom';
import styles from './PathwayCard.module.css';
import { Button } from '../../Button/Button';

import {ArrowRight} from "lucide-react";

export function PathwayCard({ pathway }) {
  const {
  name,
  description,
  path,
  Illustration,
  button,
} = pathway;
  return (
    <NavLink to={path}>
      <article className={`flex flex-col w-full max-w-sm pathway-card ${styles.article}`}>
        <div className={styles.illustration}>
          <Illustration />
        </div>
        <div className = "flex flex-col gap-2 p-8">
        <h2 className={`mb-2 ${styles.cardheading}`}>{name}</h2>
        <p className={`mb-2 ${styles.carddescription}`}>{description}</p>
        <div>
          <Button variant="primary" size="medium" endIcon={<ArrowRight />}>
            {button}
          </Button>
        </div>
        </div>
      </article>
    </NavLink>
  );
}