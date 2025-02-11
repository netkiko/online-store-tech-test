import { useGlobalContext } from "@/src/contexts/global-context";
import TextInput from "@/src/components/text-input";
import styles from "./checkout-form.module.css";

const CheckoutForm = () => {
    const { checkoutForm, checkoutFormError, handleFieldChange } = useGlobalContext();

    return (
        <div className={styles.checkoutFormWrapper}>
            <span className={styles.checkoutFormHeader}>Shipping Information</span>
            <TextInput
                type="text"
                id="email"
                name="email"
                label="Email"
                value={checkoutForm.email}
                onChange={handleFieldChange}
                errorText={checkoutFormError.email}
            />
            <TextInput
                type="text"
                id="name"
                name="name"
                label="Name"
                value={checkoutForm.name}
                onChange={handleFieldChange}
                errorText={checkoutFormError.name}
            />
            <TextInput
                type="text"
                id="address"
                name="address"
                label="Address"
                value={checkoutForm.address}
                onChange={handleFieldChange}
                errorText={checkoutFormError.address}
            />
            <hr className={styles.checkoutFormDivider} />
            <span className={styles.checkoutFormHeader}>Payment</span>
            <TextInput
                type="text"
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                value={checkoutForm.cardNumber}
                onChange={handleFieldChange}
                errorText={checkoutFormError.cardNumber}
            />
            <TextInput
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                label="Name"
                value={checkoutForm.nameOnCard}
                onChange={handleFieldChange}
                errorText={checkoutFormError.nameOnCard}
            />
            <div className={styles.checkoutFormExpiryCVCGroup}>
                <div className={styles.checkoutFormExpiryContainer}>
                    <TextInput
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        label="Expiry (MM/YY)"
                        value={checkoutForm.expiryDate}
                        onChange={handleFieldChange}
                        errorText={checkoutFormError.expiryDate}
                    />
                </div>
                <div className={styles.checkoutFormCVCContainer}>
                    <TextInput
                        type="text"
                        id="cvc"
                        name="cvc"
                        label="CVC"
                        value={checkoutForm.cvc}
                        onChange={handleFieldChange}
                        errorText={checkoutFormError.cvc}
                    />
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
