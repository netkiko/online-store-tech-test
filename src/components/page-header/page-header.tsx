import Link from "next/link";
import Image from "next/image";
import ShoppingBagCTA from "@/src/components/shopping-bag-cta";
import styles from "./page-header.module.css";

const PageHeader = () => {
    return (
        <header className={styles.pageHeaderWrapper}>
            <div className={styles.pageHeaderContainer}>
                <Link href="/">
                    <Image src="/images/company-logo.svg" height={25} width={19.45} alt="Company Logo" />
                </Link>
                <ShoppingBagCTA />
            </div>
        </header>
    );
};

export default PageHeader;
