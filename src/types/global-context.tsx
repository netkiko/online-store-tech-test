import { ICartItems } from "./cart-items";
import { IProducts } from "./products";

export interface IGlobalContext {
    cartItems: ICartItems[];
    totalQuantity: number;
    totalAmount: number;
    showCartOverlay: boolean;
    addCartItem: (product: IProducts) => void;
    deleteCartItem: (id: number) => void;
    launchCartOverlay: () => void;
    hideCartOverlay: () => void;
}
