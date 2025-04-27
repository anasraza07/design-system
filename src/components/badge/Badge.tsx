import React from "react"

const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
}

const sizeClasses = {
    small: "text-[12px]",
    medium: "text[16px]",
    large: "text[20px]"
}

export default function Badge({ label, variant = "primary",
    size = "medium" }) {
    return (
        <span className={`${variantClasses[variant]} ${sizeClasses[size]} px-3 py-1 font-bold text-white rounded-[4px] cursor-pointer`}>
            {label}
        </span>
    )
}