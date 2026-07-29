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
                p-10 w-full max-w-sm min-h-[300px]`}
            >
                <div className="flex flex-1 flex-col space-y-2">
                    <div className='min-h-16'>
                    <div className={`${styles.iconWrapper} flex h-14 w-14 items-center justify-center`}>
                        <Icon
                            size={32}
                            className={styles.icon}
                        />
                    </div>
                </div>
                    <h3 className={`${styles.cardheading} min-h-16`}>
                        {name}
                    </h3>
                    <p className={`${styles.carddescription} min-h-16 flex-1`}>
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

