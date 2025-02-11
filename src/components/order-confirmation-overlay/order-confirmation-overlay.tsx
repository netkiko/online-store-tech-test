"use client";

import { CircleX } from "lucide-react";
import cx from "classnames";
import { useGlobalContext } from "@/src/contexts/global-context";
import Button from "@/src/components/button";
import styles from "./order-confirmation-overlay.module.css";

const OrderConfirmationOverlay = () => {
    const { hideOrderConfirmationOverlay } = useGlobalContext();

    return (
        <dialog id="checkout-overlay" className={cx(styles.orderConfirmationOverlayDialog)}>
            <div className={styles.orderConfirmationOverlayMainWrapper}>
                <div className={styles.orderConfirmationOverlayWrapper}>
                    <div className={styles.orderConfirmationOverlayHeaderWrapper}>
                        <h3 className={styles.orderConfirmationOverlayTitle}>Order Confirmation</h3>
                        <button name="hide-cart-overlay" type="button" onClick={hideOrderConfirmationOverlay}>
                            <CircleX color="#707784" size={24} />
                        </button>
                    </div>
                    <hr className={styles.orderConfirmationOverlayDivider} />
                    <span className={styles.orderConfirmationOverlayThankYouText}>Thank you for your order!</span>
                    <Button
                        name="checkout"
                        type="button"
                        variant="tertiary"
                        onClick={hideOrderConfirmationOverlay}
                        text="Close"
                    />
                </div>
            </div>
        </dialog>
    );
};

export default OrderConfirmationOverlay;
