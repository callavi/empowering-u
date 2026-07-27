import {NavLink} from 'react-router-dom';
import styles from "./ServiceCard.module.css";
import { ArrowRight} from 'lucide-react';
import { Button } from '../../Button/Button';

export function ServiceCard ({service}) {
    const {
        name,
        description,
        path,
        icon: Icon,
    } = service;
    return (
        <NavLink to={path} className="block h-full">
            <article
                className={`
                ${styles.article}
                flex h-full flex-col group
                p-6`}
            >
                <div className="flex flex-1 flex-col">
                    <div className={`${styles.iconWrapper} mb-5 flex h-14 w-14 items-center justify-center`}>
                        <Icon
                            size={32}
                            className={styles.icon}
                        />
                    </div>
                    <h3 className={`${styles.cardheading} mb-3`}>
                        {name}
                    </h3>
                    <p className={`${styles.carddescription} flex-1`}>
                        {description}
                    </p>
                </div>
                <Button
                    variant="text"
                    endIcon={<ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
                    className="mt-8 self-start"
                    >
                    Explore More
                </Button>
            </article>
        </NavLink>
    )
}

