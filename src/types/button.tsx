export interface IButton {
    name: string;
    type: "submit" | "reset" | "button";
    className?: string;
    text: string;
    variant: string;
    onClick: () => void;
}
