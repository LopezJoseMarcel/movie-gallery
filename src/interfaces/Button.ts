 import React from "react";

 export interface ButtonProps {
    type: "submit" | "reset" | "button" | undefined;
    label?: string;
}

export interface IconButton extends ButtonProps {
    icon: React.ReactNode;
}