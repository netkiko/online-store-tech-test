import Link from "next/link";
import styles from "./page-header.module.css";
import Image from "next/image";

const PageHeader = () => {
    return (
        <header className={styles.pageHeaderWrapper}>
            <div className={styles.pageHeaderContainer}>
                <Link href="/">
                    <Image src="/images/company-logo.svg" height={25} width={19.45} alt="Company Logo" />
                </Link>
                <div className={styles.pageHeaderShoppingBagGroup}>
                    <Image src="/images/bag.svg" height={18} width={16} alt="Shopping Bag" />
                    <span className={styles.pageHeaderShoppingBagItemsCount}>x4</span>
                </div>
            </div>
        </header>
    );
};

export default PageHeader;
