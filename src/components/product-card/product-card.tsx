"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { IProducts } from "@/src/types/products";
import { useGlobalContext } from "@/src/contexts/global-context";
import Button from "@/src/components/button";
import styles from "./product-card.module.css";

const ProductCard = ({ product }: { product: IProducts }) => {
    const { addCartItem } = useGlobalContext();

    const generateStarRating = ({ rating, totalStars = 5 }: { rating: number; totalStars: number }) => {
        const getStarFill = (starValue: number) => {
            if (starValue <= Math.floor(rating)) return "#fabe3a";
            if (starValue === Math.ceil(rating) && rating % 1 !== 0) return "url(#half-gradient)";
            return "#e5e7eb";
        };

        return (
            <>
                <svg width="0" height="0">
                    <linearGradient id="half-gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="50%" stopColor="#fabe3a" />
                        <stop offset="50%" stopColor="#e5e7eb" />
                    </linearGradient>
                </svg>
                {[...Array(totalStars)].map((_, index) => {
                    const starValue = index + 1;
                    return <Star key={index} className="w-6 h-6" strokeWidth={0} fill={getStarFill(starValue)} />;
                })}
            </>
        );
    };

    return (
        <div className={styles.productCardWrapper}>
            <div className={styles.productCardImageContainer}>
                <Image
                    className={styles.productCardImage}
                    src={product.image}
                    width={214.28}
                    height={285}
                    alt={product.description}
                />
            </div>
            <div className={styles.productCardDetailsContainer}>
                <div className={styles.productCardTitle}>{product.title}</div>
                <div className={styles.productCardPriceRatingGroup}>
                    <div className={styles.productCardPrice}>${parseFloat(product.price.toString()).toFixed(2)}</div>
                    <div className={styles.productCardRatingGroup}>
                        <div className={styles.productCardStarsGroup}>
                            {generateStarRating({ rating: product.rating.rate, totalStars: 5 })}
                        </div>
                        <div className={styles.productCardRatingCount}>({product.rating.count})</div>
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
