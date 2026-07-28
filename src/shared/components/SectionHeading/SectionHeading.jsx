import styles from "./SectionHeading.module.css";

export function SectionHeading({
    eyebrow,
    title,
    accent,
    description,
    align = "left",
    children,
}) {
    return (
        <div
            className={`${styles.heading} ${styles[align]}`}
        >
            {eyebrow && (
                <p className={styles.eyebrow}>
                    {eyebrow}
                </p>
            )}

            <h2 className={styles.title}>
                {title}

                {accent && (
                    <>
                        {" "}
                        <span className={styles.accent}>
                            {accent}
                        </span>
                    </>
                )}
            </h2>

            {description && (
                <p className={styles.description}>
                    {description}
                </p>
            )}

            {children}
        </div>
    );
}