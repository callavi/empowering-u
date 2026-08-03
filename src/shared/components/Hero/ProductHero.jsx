import styles from "./ProductHero.module.css";
import Container from "../Container/Container";
import { ProductIllustration } from "../../Illustration/ProductIllustrations/ProductIllustration";

export function ProductHero ({product}) {
  const {title,
  description,
  illustration,
  highlights,
  cards,
  } = product.hero;

    return (
        <Container>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4 justify-center">
                    <h1 className={styles.heading}>{title}</h1>
                    <p className={styles.subheading}>{description}</p>
                    <ul className={styles.list}>
                        {highlights.map(({icon: Icon, text}) =>(
                            <li
                                key={text}
                            >
                                <Icon size={20}/>
                                <span>{text}</span>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className= {`${styles.illustration}`}>
                    <ProductIllustration illustration={illustration} cards={cards} />
                </div>
            </section>
        </Container>
    )
}