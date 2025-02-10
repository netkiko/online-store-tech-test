"use client";

import Image from "next/image";
import { useGlobalContext } from "@/src/contexts/global-context";
import styles from "./shopping-bag-cta.module.css";
import CartOverlay from "../cart-overlay";

const ShoppingBagCTA = () => {
    const { showCartOverlay, totalQuantity, launchCartOverlay } = useGlobalContext();

    return (
        <div>
            <button className={styles.shoppingBagCTAGroup} onClick={launchCartOverlay}>
                <Image src="/images/bag.svg" height={18} width={16} alt="Shopping Bag" />
                <span className={styles.shoppingBagCTAItemsCount}>x{totalQuantity}</span>
            </button>
            {showCartOverlay && <CartOverlay />}
        </div>
    );
};

export default ShoppingBagCTA;
