import styles from "./PriceCard.module.css";
import { Check } from "lucide-react";
import { Button } from "../../Button/Button";
import { NavLink } from "react-router-dom";

export function PriceCard ({product}) {
const isFixed = product.priceType === "fixed";

const {
  headline,
  highlights,
  cta = {},
} = product.pricing;

const price = isFixed
  ? product.price.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    })
  : "Custom Quote";

const description = isFixed
  ? null
  : "Pricing depends on your requirements.";

const defaultPrimary = isFixed
  ? {
      text: "Add to Cart",
      link: "/cart",
    }
  : {
      text: "Request Quote",
      link: "/contact",
    };

const defaultSecondary = isFixed
  ? {
      text: "Buy Now",
      link: "/checkout",
    }
  : {
      text: "Talk to an Expert",
      link: "/contact",
    };

const primary = cta.primary ?? defaultPrimary;
const secondary = cta.secondary ?? defaultSecondary;


    return (
        <article className={`flex flex-col p-8 w-full max-w-sm min-h-[200px] ${styles.card}`}>
            <div className ="flex flex-col space-y-4">
                {headline && (<h3 className={styles.eyebrow}>{headline}</h3>)}
                <h2 className={styles.heading}>
                    {price}
                </h2>

                {description && (
                    <p className={styles.eyebrow}>
                        {description}
                    </p>
                )}
            </div>
            <div className="mb-4 mt-4 ">
                <ul className = "flex-1">
                    {highlights.map(({text}) => (
                        <li 
                        key = {text}
                        className ={styles.listItem}>
                            <Check size={12}/>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-4 mt-3">
                    <Button variant="primary" fullWidth as={NavLink} to={primary.link}>
                        {primary.text}
                    </Button>
                    <Button variant="outline" fullWidth as={NavLink} to={secondary.link}>
                        {secondary.text}
                    </Button>
            </div>
        </article>
    )
}