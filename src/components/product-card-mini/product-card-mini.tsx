"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { IProducts } from "@/src/types/products";
import { useGlobalContext } from "@/src/contexts/global-context";
import Button from "@/src/components/button";
import styles from "./product-card.module.css";

const ProductCard = ({ product }: { product: IProducts }) => {
    const { addCartItem } = useGlobalContext();

    const generateStarsFromRating = (rating: number) => {
        switch (Math.round(rating)) {
            case 5:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                    </>
                );
            case 4:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                    </>
                );
            case 3:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                    </>
                );
            case 2:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                    </>
                );
            case 1:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                    </>
                );
            default:
                return (
                    <>
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                        <Star color="#e5e7eb" fill="#e5e7eb" size={24} />
                    </>
                );
        }
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
                <div className={styles.productCardMiniTitle}>{product.title}</div>
                <div className={styles.productCardMiniPriceRatingGroup}>
                    <div className={styles.productCardMiniPrice}>${parseFloat(product.price).toFixed(2)}</div>
                    <div className={styles.productCardMiniRatingGroup}>
                        <div className={styles.productCardMiniStarsGroup}>
                            {generateStarsFromRating(product.rating.rate)}
                        </div>
                        <div className={styles.productCardMiniRatingCount}>({product.rating.count})</div>
                    </div>
                </div>
                <Button
                    name={`add-to-cart-${product.id}`}
                    type="button"
                    variant="primary"
                    className=""
                    onClick={() => addCartItem(product)}
                    text="Add to Cart"
                />
            </div>
        </div>
    );
};

export default ProductCard;
