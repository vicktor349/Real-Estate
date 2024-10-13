import React from 'react'

interface HeroBannerCardProps {
    number: string,
    title: string,
    className?: string
}


const HeroBannerCard = ({ number, title, className }: HeroBannerCardProps) => {
    return (
        <div className={`border-linkBorder rounded-lg border navbar flex flex-col justify-center space-y-4 px-4 py-3 2xl:px-6 2xl:py-5 w-full text-center sm:text-start ${className}`}>
            <p className='text-white text-2xl 2xl:text-4xl font-semibold'>{number}</p>
            <p className='text-[#999] text-sm 2xl:text-base'>{title}</p>
        </div>
    )
}

export default HeroBannerCard