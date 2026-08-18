import { SectionHeading } from "../SectionHeading/SectionHeading";
import Container from "../Container/Container";
import styles from "./DocumentsRequiredSection.module.css"
import Reveal from "../../motion/Reveal";

export function DocumentsRequiredSection ({contents}) {
    const {
        documents,
    } = contents;


    
    return (
        <section className={styles.section}>
            <Container>
                <SectionHeading title="Documents Required" description="Keep these documents ready before you apply." align="left" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {documents.map((group, index) => {
                            const Icon = group.icon;

                            return (
                                <Reveal
                                    key={group.title}
                                    direction="up"
                                    delay={index * 0.19}
                                >
                                    <div
                                        className={`flex flex-col p-8 w-full min-h-[350px] ${styles.documentCard}`}
                                    >
                                        <div className={styles.cardHeader}>
                                            <div className={styles.iconWrapper}>
                                                <Icon size={24} />
                                            </div>

                                            <h3 className={styles.heading}>
                                                {group.title}
                                            </h3>
                                        </div>

                                        <ul className="m-0 p-0 flex flex-col gap-4">
                                            {group.list.map((item) => (
                                                <li key={item} className={styles.list}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
            </Container>
        </section>
    )
}