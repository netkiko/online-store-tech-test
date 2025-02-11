"use client";

import { CircleX } from "lucide-react";
import cn from "classnames";
import { useGlobalContext } from "@/src/contexts/global-context";
import styles from "./toast.module.css";

const Toast: React.FC = () => {
    const { showToast, toast, hideToast } = useGlobalContext();
    const { type = "success", textMessage = "", outerClassName = "", innerClassName = "" } = toast;

    if (!showToast) return null;

    return (
        <div className={cn(styles.toastWrapper, outerClassName)}>
            <div
                className={cn(
                    type === "success"
                        ? styles.toastsuccess
                        : type === "info"
                        ? styles.toastinfo
                        : type === "warning"
                        ? styles.toastwarning
                        : styles.toasterror,
                    styles.toastAlert,
                    innerClassName
                )}
            >
                <span className={styles.toastMessage}>{textMessage}</span>
                <button name="hide-toast" type="button" onClick={hideToast} className={styles.toastBtnWrapper}>
                    <CircleX color="#FFFFFF" size={24} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
