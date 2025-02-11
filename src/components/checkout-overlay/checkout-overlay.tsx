"use client";

import { CircleX } from "lucide-react";
import cx from "classnames";
import { useGlobalContext } from "@/src/contexts/global-context";
import Button from "@/src/components/button";
import CheckoutForm from "@/src/components/checkout-form";
import ProductCardMini from "@/src/components/product-card-mini";
import styles from "./checkout-overlay.module.css";

const CheckoutOverlay = () => {
    const { cartItems, totalAmount, hideCheckoutOverlay, launchOrderConfirmationOverlay } = useGlobalContext();

    return (
        <dialog id="checkout-overlay" className={cx(styles.checkoutOverlayDialog)}>
            <div className={styles.checkoutOverlayMainWrapper}>
                <div className={styles.checkoutOverlayWrapper}>
                    <div className={styles.checkoutOverlayHeaderWrapper}>
                        <h3 className={styles.checkoutOverlayTitle}>Checkout</h3>
                        <button name="hide-cart-overlay" type="button" onClick={hideCheckoutOverlay}>
                            <CircleX color="#707784" size={24} />
                        </button>
                    </div>
                    <hr className={styles.checkoutOverlayDivider} />
                    <CheckoutForm />
                    <hr className={styles.checkoutOverlayDivider} />
                    <div className={styles.checkoutOverlayOrdersContainer}>
                        {cartItems.map((item) => {
                            return <ProductCardMini key={item.id} product={item} />;
                        })}
                    </div>
                    <div className={styles.checkoutOverlayOrderSummaryWrapper}>
                        <span className={styles.checkoutOverlayOrderSummaryText}>
                            Order Summary: ${parseFloat(totalAmount.toString()).toFixed(3)}
                        </span>
                    </div>
                    <Button
                        name="checkout"
                        type="button"
                        variant="secondary"
                        className=""
                        onClick={launchOrderConfirmationOverlay}
                        text="Confirm Order"
                    />
                </div>
            </div>
        </dialog>
    );
};

export default CheckoutOverlay;
