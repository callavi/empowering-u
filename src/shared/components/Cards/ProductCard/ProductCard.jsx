import { Button } from "../../Button/Button";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../../context/useCart";

export function ProductCard({ product }) {
  const isCallback = product.purchaseType === "callback";
  const isFixed = product.priceType === "fixed";
  const isStartingFrom = product.priceType === "starting_from";

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const Illustration = product.hero?.illustration;

  function handleAddToCart() {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  const unitLabel =
    product.purchaseType === "session"
      ? "/session"
      : product.purchaseType === "month"
        ? "/month"
        : "";

  const priceText = isCallback
    ? "Flexible pricing"
    : isFixed
      ? product.price.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        })
      : isStartingFrom
        ? `Starting from ${product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}${unitLabel}`
        : `${product.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}${unitLabel}`;

  const canAddToCart = ["cart", "session", "month"].includes(
    product.purchaseType
  );

  const buttonText = isCallback
    ? "Request a Callback"
    : canAddToCart
      ? "Add to Cart"
      : "Request Quote";

  return (
    <article className={styles.card}>
      {Illustration && (
        <div className={styles.visual}>
          <Illustration />
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.heading}>
            {product.label}
          </h3>

          <p className={styles.subheading}>
            {product.subtitle}
          </p>

          <p className={styles.price}>
            {priceText}
          </p>
        </div>

        <div className={styles.actions}>
          <Button
            variant="primary"
            fullWidth
            type="button"
            onClick={
              canAddToCart
                ? handleAddToCart
                : undefined
            }
            as={!canAddToCart ? NavLink : undefined}
            to={!canAddToCart ? "/contact#form" : undefined}
          >
            {canAddToCart && added
              ? "✓ Added to Cart"
              : buttonText}
          </Button>

          <Button
            variant="text"
            fullWidth
            className="group"
            endIcon={
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            }
            as={NavLink}
            to={`/catalogue/${product.slug}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}