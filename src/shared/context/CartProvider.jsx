import { useState, useEffect, useCallback } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        try {
            const savedCart =
                sessionStorage.getItem("empowering-u-cart");

            return savedCart
                ? JSON.parse(savedCart)
                : [];
        } catch (error) {
            console.error(
                "Failed to restore cart:",
                error
            );

            return [];
        }
    });
    

    const addToCart = useCallback((item) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItem) {
                return currentItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                        }
                        : cartItem
                );
            }

            return [
                ...currentItems,
                {
                    id: item.id,
                    slug: item.slug,
                    quantity: 1,
                },
            ];
        });
    }, []);

    const removeFromCart = useCallback((id) => {
        setItems((currentItems) =>
            currentItems.filter((item) => item.id !== id)
        );
    }, []);

    const updateQuantity = useCallback((id, quantity) => {
        if (quantity <= 0) {
            setItems((currentItems) =>
                currentItems.filter((item) => item.id !== id)
            );
            return;
        }

        setItems((currentItems) =>
            currentItems.map((item) =>
                item.id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    useEffect(() => {
        try {
            if (items.length === 0) {
                sessionStorage.removeItem(
                    "empowering-u-cart"
                );
                return;
            }

            sessionStorage.setItem(
                "empowering-u-cart",
                JSON.stringify(items)
            );
        } catch (error) {
            console.error(
                "Failed to persist cart:",
                error
            );
        }
    }, [items]);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );

}