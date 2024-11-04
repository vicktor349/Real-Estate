import React from 'react'

interface OurAchievementCardProp {
    title: string,
    text: string,
    className?: string
}

const OurAchievementCard = ({ title, text, className }: OurAchievementCardProp) => {
    return (
        <div className={`border border-linkBorder rounded-xl shadow-valueShadow ${className}`}>
            <div className='p-8 2xl:p-9 space-y-5 2xl:space-y-8'>
                <p className='text-white text-2xl sm:text-3xl font-semibold'>{title}</p>
                <p className='text-[#999] text-sm sm:text-base'>{text}</p>
            </div>
        </div>
    )
}

export default OurAchievementCard