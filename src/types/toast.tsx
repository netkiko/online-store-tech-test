export interface IToast {
    type: "success" | "info" | "warning" | "error";
    textMessage: string;
    outerClassName?: string;
    innerClassName?: string;
}
