import styles from "./page-footer.module.css";

const PageFooter = () => {
    return (
        <footer className={styles.pageFooterWrapper}>
            <span className={styles.pageFooterCopyRightText}>The Fake Store Copyright 2024</span>
        </footer>
    );
};

export default PageFooter;
