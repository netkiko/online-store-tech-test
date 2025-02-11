"use client";

import { CircleX } from "lucide-react";
import cx from "classnames";
import { useGlobalContext } from "@/src/contexts/global-context";
import Button from "@/src/components/button";
import ProductCardMini from "@/src/components/product-card-mini";
import styles from "./cart-overlay.module.css";

const CartOverlay = () => {
    const { cartItems, hideCartOverlay, launchCheckoutOverlay } = useGlobalContext();

    return (
        <dialog id="cart-overlay" className={cx(styles.cartOverlayDialog)}>
            <div className={styles.cartOverlayMainWrapper}>
                <div className={styles.cartOverlayWrapper}>
                    <div className={styles.cartOverlayHeaderWrapper}>
                        <h3 className={styles.cartOverlayTitle}>Cart</h3>
                        <button name="hide-cart-overlay" type="button" onClick={hideCartOverlay}>
                            <CircleX color="#707784" size={24} />
                        </button>
                    </div>
                    <hr className={styles.cartOverlayDivider} />
                    <div className={styles.cartOverlayOrdersContainer}>
                        {cartItems.map((item) => {
                            return <ProductCardMini key={item.id} product={item} />;
                        })}
                    </div>
                    <Button
                        name="checkout"
                        type="button"
                        variant="secondary"
                        className=""
                        onClick={launchCheckoutOverlay}
                        text="Checkout"
                    />
                </div>
            </div>
        </dialog>
    );
};

export default CartOverlay;
