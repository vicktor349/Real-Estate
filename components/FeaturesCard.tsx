import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

interface FeaturesCardProps {
    icon: string,
    text: string
}

const FeaturesCard = ({ icon, text }: FeaturesCardProps) => {
    return (
        <div className='relative border-2 border-linkBorder bg-primaryBackground rounded-lg flex flex-col items-center justify-center py-10 gap-y-3'>
            <p><GoArrowUpRight className='absolute right-3 top-3' color='#4D4D4D' size={28} /></p>
            <Image src={icon} alt='Image of feature' height={1500} width={1500} className='h-16 w-16' />
            <p className='text-white text-sm font-semibold'>{text}</p>
        </div>
    )
}

export default FeaturesCard