import styles from "./PriceCard.module.css";
import { Check } from "lucide-react";
import { Button } from "../../Button/Button";
import { NavLink} from "react-router-dom";
import { useCart } from "../../../../shared/context/useCart";
import { useState } from "react";


export function PriceCard ({product}) {
const {addToCart} = useCart();
const [added, setAdded] = useState(false);

function handleAddToCart() {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
        setAdded(false);
    }, 1800);
}

const {
  headline,
  highlights,
  cta = {},
} = product.pricing;

const formattedPrice = product.price?.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
});

const price = product.purchaseType === "session"
    ? `${formattedPrice}/session`
    : product.purchaseType === "month"
    ? `${formattedPrice}/month`
    : formattedPrice;

const primary = cta.primary;
const secondary = cta.secondary;
const canAddToCart = ["cart", "session", "month"].includes(
    product.purchaseType
);


    return (
        <article className={`flex flex-col p-8 w-full max-w-sm min-h-[200px] ${styles.card}`}>
            <div className ="flex flex-col space-y-4">
                {headline && (<h3 className={styles.eyebrow}>{headline}</h3>)}
                <h2 className={styles.heading}>
                    {price}
                </h2>
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
                    <Button
                        variant="primary"
                        fullWidth
                        type="button"
                        onClick={canAddToCart ? handleAddToCart : undefined}
                        as={!canAddToCart ? NavLink : undefined}
                        to={!canAddToCart ? "/contact" : undefined}
                    >
                        {canAddToCart && added
                            ? "✓ Added to Cart"
                            : primary.text}
                    </Button>
                    <Button variant="outline" fullWidth as={NavLink} to={secondary.link}>
                        {secondary.text}
                    </Button>
            </div>
        </article>
    )
}