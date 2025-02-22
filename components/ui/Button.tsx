import { ReactElement } from "react";

type variants = "primary" | "secondary";
interface ButtonProps {
    variant: variants; 
    size?: "sm" | "md" | "lg"; 
    text: string;
    onClick: () => void; 
    startIcon?: ReactElement;    
    endIcon?: ReactElement ;
}   

const variantStyles = {
    "primary": "bg-purple-600 text-white hover:bg-purple-600 focus:ring-purple-400",
    "secondary": "bg-white text-purple-600 hover:bg-purple-600 focus:ring-purple-400",
}

export const  Button = (props: ButtonProps) => {
    return <button className = { variantStyles[props.variant]}>{props.text}</button>;
}