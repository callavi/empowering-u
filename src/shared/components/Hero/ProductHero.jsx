import styles from "./ProductHero.module.css";
import Container from "../Container/Container";
import { ProductIllustration } from "../../Illustration/ProductIllustrations/ProductIllustration";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

export function ProductHero ({title,description,illustration,highlights,cards}) {
    return (
        <section className = {styles.section}>
            <Container>
                <section className="grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-16
                                xl:gap-24
                                items-center">
                    <div className="flex flex-col gap-8 justify-center">
                        <h1 className={styles.heading}>{title}</h1>
                        <p className={styles.subheading}>{description}</p>
                        <ul className={`grid grid-cols-1 lg:grid-cols-2 mb-4 ${styles.list}`}>
                            {highlights.map(({icon: Icon, text}) =>(
                                <li
                                    key={text}
                                >
                                    <Icon size={24}/>
                                    <span>{text}</span>
                                </li>
                            )
                            )}
                        </ul>
                        <NavLink to="/contact">
                            <Button variant="primary" size="large">
                                Talk to an Expert
                            </Button>
                        </NavLink>
                    </div>
                    <div className= {`${styles.illustration}`}>
                        <ProductIllustration illustration={illustration} cards={cards} />
                    </div>
                </section>
            </Container>
        </section>
    )
}