import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
} from "lucide-react";

import { useCart } from "../../shared/context/useCart";
import { getService } from "../../shared/lib/service";
import { Button } from "../../shared/components/Button/Button";
import Container from "../../shared/components/Container/Container";

import styles from "./cart.module.css";

export default function Cart() {
    const {
        items,
        removeFromCart,
        updateQuantity,
        clearCart,
    } = useCart();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        async function loadProducts() {
            if (items.length === 0) {
                setProducts([]);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const services = await Promise.all(
                    items.map((item) => getService(item.slug))
                );

                if (!cancelled) {
                    setProducts(services.filter(Boolean));
                }
            } catch (error) {
                console.error("Failed to load cart items:", error);

                if (!cancelled) {
                    setError(
                        "We couldn't load your cart right now. Please try again."
                    );
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadProducts();

        return () => {
            cancelled = true;
        };
    }, [items]);

    const cartItems = useMemo(() => {
        return items
            .map((item) => {
                const product = products.find(
                    (product) => product.id === item.id
                );

                if (!product) {
                    return null;
                }

                return {
                    ...item,
                    product,
                };
            })
            .filter(Boolean);
    }, [items, products]);

    const subtotal = cartItems.reduce((total, item) => {
        if (item.product.priceType !== "fixed") {
            return total;
        }

        return total + item.product.price * item.quantity;
    }, 0);

    const hasCustomQuote = cartItems.some(
        (item) => item.product.priceType !== "fixed"
    );

    const formatPrice = (price, currency = "INR") => {
        return price.toLocaleString("en-IN", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
        });
    };

    if (items.length === 0) {
        return (
            <main className={styles.page}>
                <Container>
                    <div className={styles.empty}>
                        <div className={styles.emptyIcon}>
                            <ShoppingBag size={32} strokeWidth={1.6} />
                        </div>

                        <h1>Your cart is empty</h1>

                        <p>
                            Looks like you haven't added any services yet.
                        </p>

                        <Button
                            as={NavLink}
                            to="/catalogue"
                            variant="primary"
                            size="large"
                            endIcon={<ArrowRight size={18} />}
                        >
                            Explore Our Services
                        </Button>
                    </div>
                </Container>
            </main>
        );
    }

    return (
        <main className={styles.page}>
            <Container>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>Your selection</p>
                        <h1>Your Cart</h1>
                        <p>
                            Review the services you've selected before
                            continuing.
                        </p>
                    </div>

                    <NavLink
                        to="/catalogue"
                        className={styles.continueLink}
                    >
                        <ArrowLeft size={17} />
                        Continue Shopping
                    </NavLink>
                </header>

                {loading && (
                    <div className={styles.loading}>
                        Loading your cart...
                    </div>
                )}

                {error && (
                    <div className={styles.error}>
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <div className={styles.layout}>
                        <section className={styles.itemsSection}>
                            <div className={styles.itemsHeader}>
                                <h2>
                                    Selected Services
                                </h2>

                                <button
                                    type="button"
                                    onClick={clearCart}
                                    className={styles.clearButton}
                                >
                                    Clear cart
                                </button>
                            </div>

                            <div className={styles.items}>
                                {cartItems.map(({ id, quantity, product }) => {
                                    const isFixed =
                                        product.priceType === "fixed";

                                    const currency =
                                        product.commerce?.currency ?? "INR";

                                    return (
                                        <article
                                            key={id}
                                            className={styles.item}
                                        >
                                            <div className={styles.itemContent}>
                                                <div>
                                                    <p className={styles.itemCategory}>
                                                        {product.category}
                                                    </p>

                                                    <h3>
                                                        {product.label}
                                                    </h3>

                                                    {product.subtitle && (
                                                        <p className={styles.itemDescription}>
                                                            {product.subtitle}
                                                        </p>
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeFromCart(id)
                                                    }
                                                    className={styles.removeButton}
                                                    aria-label={`Remove ${product.label} from cart`}
                                                >
                                                    <Trash2 size={17} />
                                                    <span>Remove</span>
                                                </button>
                                            </div>

                                            <div className={styles.itemBottom}>
                                                <div className={styles.quantity}>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                id,
                                                                quantity - 1
                                                            )
                                                        }
                                                        aria-label={`Decrease quantity of ${product.label}`}
                                                    >
                                                        <Minus size={15} />
                                                    </button>

                                                    <span>{quantity}</span>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                id,
                                                                quantity + 1
                                                            )
                                                        }
                                                        aria-label={`Increase quantity of ${product.label}`}
                                                    >
                                                        <Plus size={15} />
                                                    </button>
                                                </div>

                                                <div className={styles.itemPrice}>
                                                    {isFixed ? (
                                                        <>
                                                            <span>
                                                                {formatPrice(
                                                                    product.price,
                                                                    currency
                                                                )}
                                                            </span>

                                                            <strong>
                                                                {formatPrice(
                                                                    product.price *
                                                                        quantity,
                                                                    currency
                                                                )}
                                                            </strong>
                                                        </>
                                                    ) : (
                                                        <strong>
                                                            Custom Quote
                                                        </strong>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>

                        <aside className={styles.summary}>
                            <h2>Order Summary</h2>

                            <div className={styles.summaryRow}>
                                <span>
                                    Services
                                </span>

                                <span>
                                    {items.reduce(
                                        (total, item) =>
                                            total + item.quantity,
                                        0
                                    )}
                                </span>
                            </div>

                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>

                                <strong>
                                    {formatPrice(subtotal)}
                                </strong>
                            </div>

                            {hasCustomQuote && (
                                <p className={styles.quoteNote}>
                                    One or more selected services require a
                                    custom quote. We'll confirm pricing before
                                    payment.
                                </p>
                            )}

                            <div className={styles.divider} />

                            <div className={styles.totalRow}>
                                <span>Total</span>

                                <strong>
                                    {formatPrice(subtotal)}
                                </strong>
                            </div>

                            <Button
                                variant="primary"
                                size="large"
                                fullWidth
                                endIcon={<ArrowRight size={18} />}
                                onClick={() => {
                                    // Checkout will be connected later.
                                }}
                            >
                                Proceed to Checkout
                            </Button>

                            <p className={styles.secureNote}>
                                You'll review your order before payment.
                            </p>
                        </aside>
                    </div>
                )}
            </Container>
        </main>
    );
}