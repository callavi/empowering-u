import { Button } from "../../Button/Button";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ArrowRight } from "lucide-react";

export function ProductCard ({product}) {
    const isFixed = product.priceType === "fixed";

    const priceText = isFixed 
        ? product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        })
        : "Pricing on Request";
    const buttonText = isFixed 
        ? "Add to Cart"
        : "Request Quote";
    const primaryLink = isFixed
        ? "/cart"
        : "/contact";

    return (
        <article className = {`flex flex-col gap-4 p-6 sm:p-8 lg:p-10 w-full ${styles.card}`}>
            <div className = "space-y-4">
                <h3 className = {`min-h-16 ${styles.heading}`}>{product.label}</h3>
                <p className= {`min-h-16 ${styles.subheading}`}>{product.subtitle}</p>
                <p className= {`mt-6 ${styles.price}`}>{priceText}</p>
            </div>
            <div className ="mt-auto gap-2 flex flex-col">
                    <Button variant = "primary" fullWidth as={NavLink} to={primaryLink}>
                        {buttonText}
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
