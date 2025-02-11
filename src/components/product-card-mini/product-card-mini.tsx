"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ICartItems } from "@/src/types/cart-items";
import { useGlobalContext } from "@/src/contexts/global-context";
import styles from "./product-card-mini.module.css";

const ProductCardMini = ({ product }: { product: ICartItems }) => {
    const { deleteCartItem, updateOrderQuantity } = useGlobalContext();
    const [quantity, setQuantity] = useState<number>(product.quantity);

    const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newQuantity = parseInt(e.target.value, 0) || 0;
        if (!newQuantity || newQuantity <= 0) newQuantity = 1;
        setQuantity(newQuantity);
        updateOrderQuantity(product.id, newQuantity);
    };

    return (
        <div className={styles.productCardMiniWrapper}>
            <div className={styles.productCardMiniImageContainer}>
                <Image
                    className={styles.productCardMiniImage}
                    src={product.image}
                    width={214.28}
                    height={285}
                    alt={product.description}
                />
            </div>
            <div className={styles.productCardMiniDetailsContainer}>
                <div className={styles.productCardMiniTitleGroup}>
                    <div className={styles.productCardMiniTitle}>{product.title}</div>
                    <div className={styles.productCardMiniTrash}>
                        <button
                            name={`remove-item-${product.id}`}
                            type="button"
                            onClick={() => deleteCartItem(product.id)}
                        >
                            <Trash2 color="#707784" size={24} />
                        </button>
                    </div>
                </div>
                <div className={styles.productCardMiniPriceGroup}>
                    <div className={styles.productCardMiniPrice}>
                        ${parseFloat(product.price.toString()).toFixed(2)}
                    </div>
                    <div className={styles.productCardMiniInputWrapper}>
                        <input
                            type="text"
                            className={styles.productCardMiniInputQuantity}
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 0) || 0)}
                            onBlur={handleOnBlur}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardMini;
