import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    text: string,
    className?: string,
    icon?: IconType,
    size?: number,
    textClassName?: string,
    iconClassName?: string,
}

const Button = ({ text, className, icon: Icon, size, textClassName, iconClassName }: ButtonProps) => {
    return (
        <button className={`bg-secondaryButtonBackground px-3 py-3 rounded-lg text-white flex items-center ${className}`}>
            {Icon && <Icon size={size} className={`${iconClassName}`} />}
            <p className={`text-sm lg:text-base ${textClassName}`}>{text}</p>
        </button>
    )
}

export default Button