import styles from "./PriceCard.module.css";
import { Check } from "lucide-react";
import { Button } from "../../Button/Button";
import { NavLink } from "react-router-dom";

export function PriceCard ({product}) {
    const isFixed = product.priceType === "fixed";

 const cardContent = isFixed
  ? {
      price: product.price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }),
      description: null,
      primaryText: "Add to Cart",
      secondaryText: "Buy Now",
      primaryLink: "/cart",
      secondaryLink: "/checkout",
    }
  : {
      price: "Custom Quote",
      description: "Pricing depends on your requirements.",
      primaryText: "Request Quote",
      secondaryText: "Talk to an Expert",
      primaryLink: "/contact",
      secondaryLink: "/contact",
    };

    const {
    price,
    description,
    primaryText,
    secondaryText,
    primaryLink,
    secondaryLink,
} = cardContent;

const { pricing } = product;
const { headline, features } = pricing;

    return (
        <article className={`flex flex-col p-8 w-full max-w-sm min-h-[400px] ${styles.card}`}>
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
                    {features.map(({text}) => (
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
                <NavLink to={primaryLink}>
                    <Button variant="primary" fullWidth>
                        {primaryText}
                    </Button>
                </NavLink>
                <NavLink to={secondaryLink}>
                    <Button variant="secondary" fullWidth>
                        {secondaryText}
                    </Button>
                </NavLink>
            </div>
        </article>
    )
}