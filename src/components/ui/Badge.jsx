import React from "react";

export default function Badge({ variant, className, children }) {
    const variants = {
        secondary: "border-transparent bg-gray-100",
        outline: "bg-white hover:bg-gray-100 border border-gray-200",
    };

    return (
        <span
            className={`${variants[variant]} ${className} flex items-center justify-center gap-2 px-2 py-0.5 rounded-md font-medium text-xs transition-all duration-100`}>
            {children}
        </span>
    );
}
