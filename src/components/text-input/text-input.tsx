import * as React from "react";
import cn from "classnames";
import { ITextInput } from "@/src/types/text-input";
import styles from "./text-input.module.css";

const TextInput: React.FC<ITextInput> = React.forwardRef(function TextInput(
    {
        type = "text",
        id = "",
        label = "",
        name,
        value,
        onChange,
        onBlur = () => null,
        placeholder = "",
        className = "",
        disabled = false,
        errorText = "",
    },
    ref
) {
    return (
        <label className={styles.textInputWrapper}>
            <div className={styles.textInputLabelContainer}>
                <span className={styles.textInputLabel}>{label}</span>
            </div>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={cn(styles.textInputClassName, errorText && styles.textInputBorderError, className)}
                disabled={disabled}
            />
            <div className={styles.textInputLabelContainer}>
                <span className={styles.textInputError}>{errorText}</span>
            </div>
        </label>
    );
});

export default TextInput;
