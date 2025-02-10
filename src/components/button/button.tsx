import * as React from "react";
import cn from "classnames";
import styles from "./button.module.css";

export interface IButton {
    name: string;
    type: "submit" | "reset" | "button";
    className: string;
    text: string;
    variant: string;
    onClick: () => void;
}

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
            className={cn(variant === "primary" ? styles.btnPrimary : styles.btnSecondary, className)}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
