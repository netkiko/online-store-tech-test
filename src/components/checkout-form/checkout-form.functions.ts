import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { ICheckoutForm } from "@/src/types/checkout-form";

const validateExpiryFormat = (expiry: string) => {
    const pattern = /^(0[1-9]|1[012])\/\d{2}$/;
    return pattern.test(expiry);
};

const validateCVC = (cvc: string) => {
    const pattern = /^[0-9]{3,4}$/;
    return pattern.test(cvc);
};

export const validateCheckoutForm = {
    email: (value: string) => {
        if (isEmpty(value)) return "Please enter Email.";
        if (!isEmail(value)) return "Please enter a valid Email.";
        return "";
    },
    name: (value: string) => {
        if (isEmpty(value)) return "Please enter Name.";
        return "";
    },
    address: (value: string) => {
        if (isEmpty(value)) return "Please enter Address.";
        return "";
    },
    cardNumber: (value: string) => {
        if (isEmpty(value)) return "Please enter Name on Card.";
        return "";
    },
    nameOnCard: (value: string) => {
        if (isEmpty(value)) return "Please enter Name on Card.";
        return "";
    },
    expiryDate: (value: string) => {
        if (isEmpty(value)) return "Please enter Expiry Date.";
        if (!validateExpiryFormat(value)) return "Please enter a valid Expiry.";
        return "";
    },
    cvc: (value: string) => {
        if (isEmpty(value)) return "Please enter CVC.";
        if (!validateCVC(value)) return "Please a valid CVC.";
        return "";
    },
};

export const getBatchValidationList = (form: ICheckoutForm, validator: any) => [
    {
        fieldName: "email",
        fieldValue: form.email,
        validateField: validator.email,
    },
    {
        fieldName: "name",
        fieldValue: form.name,
        validateField: validator.name,
    },
    {
        fieldName: "address",
        fieldValue: form.address,
        validateField: validator.address,
    },
    {
        fieldName: "cardNumber",
        fieldValue: form.cardNumber,
        validateField: validator.cardNumber,
    },
    {
        fieldName: "nameOnCard",
        fieldValue: form.nameOnCard,
        validateField: validator.nameOnCard,
    },
    {
        fieldName: "expiryDate",
        fieldValue: form.expiryDate,
        validateField: validator.expiryDate,
    },
    {
        fieldName: "cvc",
        fieldValue: form.cvc,
        validateField: validator.cvc,
    },
];
