import Link from "next/link";
import styles from "./products.module.css";
import { IProducts } from "@/src/types/products";
import Image from "next/image";
import { Star } from "lucide-react";

const ProductsHome = ({ products }: { products: IProducts[] }) => {
    // const breadcrumbs: IBreadcrumbs[] = [
    //     { id: 1, label: "Home", href: "/" },
    //     { id: 2, label: "products List", href: "/products" },
    // ];

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
                        <Star color="#fabe3a" fill="#fabe3a" />
                        <Star color="#fabe3a" fill="#fabe3a" />
                        <Star color="#fabe3a" fill="#fabe3a" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                    </>
                );
            case 2:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" />
                        <Star color="#fabe3a" fill="#fabe3a" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                    </>
                );
            case 1:
                return (
                    <>
                        <Star color="#fabe3a" fill="#fabe3a" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                    </>
                );
            default:
                return (
                    <>
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                        <Star color="#e5e7eb" fill="#e5e7eb" />
                    </>
                );
        }
    };

    return (
        <section className={styles.productsWrapper}>
            <div className={styles.productsContainer}>
                <h1 className={styles.productsHeader}>Products List</h1>
                {products.map((product: IProducts) => (
                    <div key={product.id} className={styles.productsCard}>
                        <div className={styles.productsCardImageContainer}>
                            <Image
                                className={styles.productsCardImage}
                                src={product.image}
                                width={214.28}
                                height={285}
                                alt={product.description}
                            />
                        </div>
                        <div className={styles.productsCardDetailsContainer}>
                            <div className={styles.productsTitle}>{product.title}</div>
                            <div className={styles.productsPriceRatingGroup}>
                                <div className={styles.productsPrice}>${parseFloat(product.price).toFixed(2)}</div>
                                <div className={styles.productsRatingGroup}>
                                    <div className={styles.productsStarsGroup}>
                                        {generateStarsFromRating(product.rating.rate)}
                                    </div>
                                    <div className={styles.productsRatingCount}>({product.rating.count})</div>
                                </div>
                            </div>
                            <button className={styles.addToCart}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsHome;
