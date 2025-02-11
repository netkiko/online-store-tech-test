import * as React from "react";
import cn from "classnames";
import { IButton } from "@/src/types/button";
import styles from "./button.module.css";

const Button: React.FC<IButton> = ({
    name = "btn-default",
    type = "button",
    className = "",
    text = "",
    variant = "primary",
    onClick = () => null,
    ...props
}) => {
    return (
        <button
            name={name}
            type={type}
            className={cn(
                variant === "secondary"
                    ? styles.btnSecondary
                    : variant === "tertiary"
                    ? styles.btnTertiary
                    : styles.btnPrimary,
                className
            )}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
