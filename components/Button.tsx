import React from 'react'

interface ButtonProps {
    text: string,
    className?: string
}

const Button = ({ text, className }: ButtonProps) => {
    return (
        <button className={`bg-secondaryButtonBackground px-3 py-3 rounded-lg ${className}`}>
            {text}
        </button>
    )
}

export default Button