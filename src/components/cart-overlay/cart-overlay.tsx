"use client";

import cx from "classnames";
import { CircleX } from "lucide-react";
import { useGlobalContext } from "@/src/contexts/global-context";
import styles from "./cart-overlay.module.css";
import ProductCardMini from "../product-card-mini";
import Button from "../button";

const CartOverlay = () => {
    const { cartItems, hideCartOverlay } = useGlobalContext();

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
                    <div>
                        {cartItems.map((item) => {
                            return <ProductCardMini key={item.id} product={item} />;
                        })}
                    </div>
                    <Button
                        name="checkout"
                        type="button"
                        variant="secondary"
                        className=""
                        onClick={() => {}}
                        text="Checkout"
                    />
                </div>
            </div>
        </dialog>
    );
};

export default CartOverlay;
