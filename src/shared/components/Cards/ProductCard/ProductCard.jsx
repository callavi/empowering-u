import { Button } from "../../Button/Button";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../../context/useCart";

export function ProductCard ({product}) {
    const isFixed = product.priceType === "fixed";
    const isStartingFrom = product.priceType === "starting_from";
    const {addToCart} = useCart();
    const [added, setAdded] = useState(false);

    const Illustration = product.hero?.illustration;


    function handleAddToCart() {
        addToCart(product);

        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 1800);
    }


    const formattedPrice = product.price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    });

    const unitLabel =
        product.purchaseType === "session"
            ? "/session"
            : product.purchaseType === "month"
            ? "/month"
            : "";

    const priceText = isFixed
        ? formattedPrice
        : isStartingFrom
        ? `Starting from ${formattedPrice}${unitLabel}`
        : `${formattedPrice}${unitLabel}`;

        const canAddToCart = ["cart", "session", "month"].includes(
            product.purchaseType
        );

    const buttonText = canAddToCart
        ? "Add to Cart"
        : "Request Quote";

    return (
        <article className = {`flex flex-col gap-4 p-5 sm:p-6 w-full ${styles.card}`}>
            {Illustration && (
                <div className={styles.visual}>
                    <Illustration />
                </div>
                )}
            <div className = "space-y-4">
                <h3 className = {`min-h-16 ${styles.heading}`}>{product.label}</h3>
                <p className= {`min-h-16 ${styles.subheading}`}>{product.subtitle}</p>
                <p className= {`mt-6 ${styles.price}`}>{priceText}</p>
            </div>
            <div className ="mt-auto gap-2 flex flex-col">
                    <Button variant = "primary" fullWidth type="button" 
                        onClick={canAddToCart ? handleAddToCart : undefined}
                        as={!canAddToCart ? NavLink : undefined}
                        to={!canAddToCart ? "/cart" : undefined}>
                        {canAddToCart && added ? " ✓ Added to Cart": buttonText}
                    </Button>
                    <Button 
                    variant="text" fullWidth 
                    className="group"
                    endIcon={<ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>} 
                    as={NavLink}
                    to={`/catalogue/${product.slug}`}>
                        View Details
                    </Button>
            </div>
        </article>
    )
}
