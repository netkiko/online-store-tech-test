"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { IGlobalContext } from "@/src/types/global-context";
import { ICartItems } from "@/src/types/cart-items";
import { IProducts } from "@/src/types/products";

export const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<ICartItems[]>([]);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [showCartOverlay, setShowCartOverlay] = useState<boolean>(false);

    useEffect(() => {
        console.log("Cart:", cartItems, "showCartOverlay:", showCartOverlay);
    }, [cartItems, showCartOverlay]);

    const addCartItem = (product: IProducts) => {
        let currentCartItems = [...cartItems];
        const newProduct = { ...product, quantity: 1, amount: product.price * 1 };
        const newProductIdx = currentCartItems.findIndex((p) => p.id === newProduct.id);
        if (newProductIdx >= 0) {
            currentCartItems[newProductIdx].quantity += 1;
            currentCartItems[newProductIdx].amount =
                currentCartItems[newProductIdx].quantity * currentCartItems[newProductIdx].price;
            setCartItems([...currentCartItems]);
            setTotalQuantity(currentCartItems.reduce((acc, item) => acc + item.quantity, 0));
            setTotalAmount(currentCartItems.reduce((acc, item) => acc + item.amount, 0));
        } else {
            const newCartItems = [...cartItems, newProduct];
            setCartItems([...newCartItems]);
            setTotalQuantity(newCartItems.reduce((acc, item) => acc + item.quantity, 0));
            setTotalAmount(newCartItems.reduce((acc, item) => acc + item.amount, 0));
        }
    };

    const deleteCartItem = (id: number) => {
        const newCartItems = cartItems.filter((d) => d.id === id);
        setCartItems([...newCartItems]);
    };

    const launchCartOverlay = () => {
        !showCartOverlay && setShowCartOverlay(true);
    };

    const hideCartOverlay = () => {
        showCartOverlay && setShowCartOverlay(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                cartItems,
                totalQuantity,
                totalAmount,
                showCartOverlay,
                addCartItem,
                deleteCartItem,
                launchCartOverlay,
                hideCartOverlay,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context;
};
