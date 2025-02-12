"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IGlobalContext } from "@/src/types/global-context";
import { ICartItems } from "@/src/types/cart-items";
import { IProducts } from "@/src/types/products";
import { IToast } from "@/src/types/toast";
import { ICheckoutForm } from "@/src/types/checkout-form";
import { CHECKOUT_FIELDS_INITVAL } from "@/src/components/checkout-form/checkout-form.config";
import { getBatchValidationList, validateCheckoutForm } from "@/src/components/checkout-form/checkout-form.functions";

export const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<ICartItems[]>([]);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [showCartOverlay, setShowCartOverlay] = useState<boolean>(false);
    const [showCheckoutOverlay, setShowCheckoutOverlay] = useState<boolean>(false);
    const [showOrderConfirmationOverlay, setShowOrderConfirmationOverlay] = useState<boolean>(false);
    const [toast, setToast] = useState<IToast>({
        type: "success",
        textMessage: "",
        outerClassName: "",
        innerClassName: "",
    });
    const [showToast, setShowToast] = useState<boolean>(false);
    const [checkoutForm, setCheckoutForm] = useState<ICheckoutForm>(CHECKOUT_FIELDS_INITVAL);
    const [checkoutFormError, setCheckoutFormError] = useState<ICheckoutForm>(CHECKOUT_FIELDS_INITVAL);

    useEffect(() => {
        if (totalQuantity === 0) {
            showCartOverlay && setShowCartOverlay(false);
            showCheckoutOverlay && setShowCheckoutOverlay(false);
        }
    }, [totalQuantity]);

    const resetShoppingCartStates = () => {
        setCartItems([]);
        setTotalQuantity(0);
        setTotalAmount(0);
        setCheckoutForm(CHECKOUT_FIELDS_INITVAL);
        setCheckoutFormError(CHECKOUT_FIELDS_INITVAL);
    };

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
        const newCartItems = cartItems.filter((d) => d.id !== id);
        setCartItems([...newCartItems]);
        setTotalQuantity(newCartItems.reduce((acc, item) => acc + item.quantity, 0));
        setTotalAmount(newCartItems.reduce((sum, item) => sum + item.amount, 0));
    };

    const updateOrderQuantity = (id: number, quantity: number) => {
        let newQuantity = quantity;
        let currentCartItems = [...cartItems];
        const currProductIdx = currentCartItems.findIndex((p) => p.id === id);
        if (newQuantity <= 0) newQuantity = 1; // default to 1
        if (currentCartItems[currProductIdx].quantity !== newQuantity) {
            currentCartItems[currProductIdx].quantity = newQuantity;
            currentCartItems[currProductIdx].amount =
                currentCartItems[currProductIdx].quantity * currentCartItems[currProductIdx].price;
            setCartItems([...currentCartItems]);
            setTotalQuantity(currentCartItems.reduce((acc, item) => acc + item.quantity, 0));
            setTotalAmount(currentCartItems.reduce((sum, item) => sum + item.amount, 0));
        }
    };

    const launchCartOverlay = () => {
        if (totalQuantity <= 0) {
            setToast({
                type: "error",
                textMessage: "Shopping Cart is empty! Please add order to it.",
            });
            setShowToast(true);
        } else {
            !showCartOverlay && setShowCartOverlay(true);
        }
    };

    const hideCartOverlay = () => {
        showCartOverlay && setShowCartOverlay(false);
    };

    const launchCheckoutOverlay = () => {
        if (totalQuantity === 0) return;
        showCartOverlay && setShowCartOverlay(false);
        !showCheckoutOverlay && setShowCheckoutOverlay(true);
    };

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCheckoutForm((prev: ICheckoutForm) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateCheckoutField = ({ fieldName, fieldValue, validateField }: any) => {
        const errorText = validateField(fieldValue);
        setCheckoutFormError((prev) => ({
            ...prev,
            [fieldName]: errorText,
        }));

        return errorText;
    };

    const handleBatchCheckoutFormValidation = () => {
        const validationList = getBatchValidationList(checkoutForm, validateCheckoutForm);
        let formHasError = false;
        for (let i = 0; i < validationList.length; i += 1) {
            const fieldErrorMsg = validateCheckoutField({
                fieldName: validationList[i].fieldName,
                fieldValue: validationList[i].fieldValue,
                validateField: validationList[i].validateField,
            });
            if (fieldErrorMsg) {
                formHasError = true;
            }
        }

        if (formHasError) {
            setToast({
                type: "error",
                textMessage: "Please ensure you have filled out the form properly.",
            });
            setShowToast(true);
        }

        return formHasError;
    };

    const hideCheckoutOverlay = () => {
        setCheckoutForm(CHECKOUT_FIELDS_INITVAL);
        setCheckoutFormError(CHECKOUT_FIELDS_INITVAL);
        showCheckoutOverlay && setShowCheckoutOverlay(false);
    };

    const launchOrderConfirmationOverlay = () => {
        if (totalQuantity === 0) return;
        if (!handleBatchCheckoutFormValidation()) {
            showCheckoutOverlay && setShowCheckoutOverlay(false);
            !showOrderConfirmationOverlay && setShowOrderConfirmationOverlay(true);
            resetShoppingCartStates();
        }
    };

    const hideOrderConfirmationOverlay = () => {
        showOrderConfirmationOverlay && setShowOrderConfirmationOverlay(false);
    };

    const hideToast = () => {
        showToast && setShowToast(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                cartItems,
                totalQuantity,
                totalAmount,
                showCartOverlay,
                showCheckoutOverlay,
                showOrderConfirmationOverlay,
                showToast,
                toast,
                checkoutForm,
                checkoutFormError,
                handleFieldChange,
                addCartItem,
                deleteCartItem,
                updateOrderQuantity,
                launchCartOverlay,
                hideCartOverlay,
                launchCheckoutOverlay,
                hideCheckoutOverlay,
                launchOrderConfirmationOverlay,
                hideOrderConfirmationOverlay,
                hideToast,
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
