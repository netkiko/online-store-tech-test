import { ICartItems } from "./cart-items";
import { ICheckoutForm } from "./checkout-form";
import { IProducts } from "./products";
import { IToast } from "./toast";

export interface IGlobalContext {
    cartItems: ICartItems[];
    totalQuantity: number;
    totalAmount: number;
    showCartOverlay: boolean;
    showCheckoutOverlay: boolean;
    showOrderConfirmationOverlay: boolean;
    showToast: boolean;
    toast: IToast;
    checkoutForm: ICheckoutForm;
    checkoutFormError: ICheckoutForm;
    handleFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addCartItem: (product: IProducts) => void;
    deleteCartItem: (id: number) => void;
    updateOrderQuantity: (id: number, quantity: number) => void;
    launchCartOverlay: () => void;
    hideCartOverlay: () => void;
    launchCheckoutOverlay: () => void;
    hideCheckoutOverlay: () => void;
    launchOrderConfirmationOverlay: () => void;
    hideOrderConfirmationOverlay: () => void;
    hideToast: () => void;
}
