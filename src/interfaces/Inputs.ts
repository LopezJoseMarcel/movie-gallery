import React from "react";

export interface Input<T> {
    id: string;
    label?: string;
    type: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: T | null;
    defaultValue?: T | null;
} 