import styles from "./WhyCard.module.css";

export function WhyCard ({campaign}) {
    const {
        text,
        description,
        icon: Icon,
        size,
    } = campaign;
    return (
            <article
                className={`
                ${styles.article}
                ${size === "large" ? styles.large : styles.small}
                flex h-full flex-col group
                p-12 text-left`}
            >
                <div className="flex flex-1 flex-col space-y-2">
                    <div className='min-h-16'>
                    <div className={`${styles.iconWrapper} flex h-20 w-20 rounded-2xl items-center justify-center`}>
                        <Icon
                            size={32}
                            className={styles.icon}
                        />
                    </div>
                </div>
                    <h3 className={`${styles.cardheading} min-h-16`}>
                        {text}
                    </h3>
                    <p className={`${styles.carddescription} min-h-16 flex-1`}>
                        {description}
                    </p>
                </div>
            </article>
    )
}

