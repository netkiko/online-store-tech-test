import ProductCard from "@/src/components/product-card";
import { IProducts } from "@/src/types/products";
import styles from "./products.module.css";

const ProductsHome = ({ products }: { products: IProducts[] }) => {
    return (
        <section className={styles.productsWrapper}>
            <h1 className={styles.productsHeader}>Fake Products</h1>

            <div className={styles.productsContainer}>
                {products.map((product: IProducts) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductsHome;
