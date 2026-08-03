import styles from "./ProductHero.module.css";
import Container from "../Container/Container";

export function ProductHero ({product}) {
  const {title,
  description,
  illustration: Illustration,
  highlights,
  } = product.hero;

    return (
        <Container>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <ul>
                        {highlights.map(({icon: Icon, text}) =>(
                            <li
                                key={text}
                                className = "flex gap-4 items-center"
                            >
                                <Icon size={20}/>
                                <span>{text}</span>
                            </li>
                        )
                        )}
                    </ul>
                </div>
                <div className= {`${styles.illustration}`}>
                    {Illustration && <Illustration />}
                </div>
            </section>
        </Container>
    )
}