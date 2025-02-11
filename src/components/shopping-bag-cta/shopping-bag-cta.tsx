"use client";

import Image from "next/image";
import { useGlobalContext } from "@/src/contexts/global-context";
import CartOverlay from "@/src/components/cart-overlay";
import CheckoutOverlay from "@/src/components/checkout-overlay";
import OrderConfirmationOverlay from "@/src/components/order-confirmation-overlay";
import styles from "./shopping-bag-cta.module.css";

const ShoppingBagCTA = () => {
    const { showCartOverlay, showCheckoutOverlay, showOrderConfirmationOverlay, totalQuantity, launchCartOverlay } =
        useGlobalContext();

    return (
        <div>
            <button className={styles.shoppingBagCTAGroup} onClick={launchCartOverlay}>
                <Image src="/images/bag.svg" height={18} width={16} alt="Shopping Bag" />
                <span className={styles.shoppingBagCTAItemsCount}>x{totalQuantity}</span>
            </button>
            {showCartOverlay && <CartOverlay />}
            {showCheckoutOverlay && <CheckoutOverlay />}
            {showOrderConfirmationOverlay && <OrderConfirmationOverlay />}
        </div>
    );
};

export default ShoppingBagCTA;
