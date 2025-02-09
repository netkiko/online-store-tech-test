import Image from "next/image";
import { Star } from "lucide-react";
import { IProducts } from "@/src/types/products";
import styles from "./product-card.module.css";

const ProductCard = ({ product }: { product: IProducts }) => {
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
                    <div className={styles.productCardPrice}>${parseFloat(product.price).toFixed(2)}</div>
                    <div className={styles.productCardRatingGroup}>
                        <div className={styles.productCardStarsGroup}>
                            {generateStarsFromRating(product.rating.rate)}
                        </div>
                        <div className={styles.productCardRatingCount}>({product.rating.count})</div>
                    </div>
                </div>
                <button className={styles.productCardAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
