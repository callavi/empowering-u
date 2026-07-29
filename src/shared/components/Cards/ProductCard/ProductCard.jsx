import { Button } from "../../Button/Button";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";

export function ProductCard ({product}) {
    const isFixed = product.priceType === "fixed";

    const priceText = isFixed 
        ? product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        })
        : "Custom";
    const buttonText = isFixed 
        ? "Add to Cart"
        : "Request Quote";
    const primaryLink = isFixed
        ? "/cart"
        : "/contact";

    return (
        <article className = {`flex flex-col gap-4 p-10 w-full max-w-sm min-h-[430px] ${styles.card}`}>
            <div className = "space-y-4">
                <h3 className = {`min-h-16 ${styles.heading}`}>{product.label}</h3>
                <p className= {`min-h-16 ${styles.subheading}`}>{product.subtitle}</p>
                <p className= {`mt-6 ${styles.price}`}>{priceText}</p>
            </div>
            <div className ="mt-auto gap-2 flex flex-col">
                <NavLink to={primaryLink} className="w-full block mt-3">
                    <Button variant = "primary" fullWidth>
                        {buttonText}
                    </Button>
                </NavLink>
                <NavLink to ={product.path} className="w-full block mt-3">
                    <Button variant="secondary" fullWidth>
                        View Details
                    </Button>
                </NavLink>
            </div>
        </article>
    )
}
