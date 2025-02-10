import { IProducts } from "@/src/types/products";
import ProductsHome from "@/src/components/products";

const ProductsPage = async () => {
    const res = await fetch("https://fakestoreapi.com/products/", { cache: "no-store" });
    const products: IProducts[] = await res.json();
    console.log("products", products);

    return <ProductsHome products={products} />;
};

export default ProductsPage;
