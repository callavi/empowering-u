import { SectionHeading } from "../SectionHeading/SectionHeading";
import Container from "../Container/Container";
import styles from "./DocumentsRequiredSection.module.css"

export function DocumentsRequiredSection ({contents}) {
    const {
        documents,
    } = contents;


    
    return (
        <section className={styles.section}>
            <Container>
                <SectionHeading title="Documents Required" description="Keep these documents ready before you apply." align="center" />
                <div className ="flex gap-16">
                    {documents.map((group) => {
                        const Icon=group.icon;
                        return (
                        <div key={group.title} className={`flex flex-col p-8 w-full max-w-sm min-h-[350px] ${styles.documentCard}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.heading}>{group.title}</h3>
                            </div>

                            <ul className="m-0 p-0 flex flex-col gap-4">
                            {group.list.map((item) => (
                                <li key={item} className={styles.list}>
                                    {item}</li>
                            ))}
                            </ul>
                        </div>
                    )})}
                </div>
            </Container>
        </section>
    )
}