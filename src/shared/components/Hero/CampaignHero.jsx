import styles from "./CampaignHero.module.css";
import Container from "../Container/Container";
import { Check } from "lucide-react";
import {PriceCard} from "../Cards/PriceCard/PriceCard";

export function CampaignHero ({campaign}) {
    const {
        title,
        accent,
        description,
        illustration:Illustration,
        bundle,
    } = campaign.hero;


    const {
        heading,list,
    }=bundle;

    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col gap-8 lg:gap-12">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className={styles.heading}>
                            {title}{" "}
                            <span className={styles.highlight}>
                            {accent}</span>
                        </h1>
                        <p className={styles.subheading}>
                            {description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 w-full items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 items-center">
                            {Illustration && (
                                <div className={styles.illustration}>
                                    <Illustration />
                                </div>
                            )}
                            <div className="flex flex-col">
                                <h3 className={styles.bundleHeading}>{heading}</h3>
                                <ul className="flex flex-col gap-0.25 m-0 p-0">
                                    {list.map((item) => (
                                        <li key={item} className = {styles.listItem}>
                                            <Check size={12} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                            <div className="flex justify-center lg:justify-end">
                                <PriceCard product={campaign} />
                            </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}