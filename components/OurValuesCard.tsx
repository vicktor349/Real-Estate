import Image from 'next/image'
import React from 'react'

interface OurValuesCardProps {
    icon: string,
    text: string,
    content: string,
    className?: string
}

const OurValuesCard = ({ icon, text, content, className }: OurValuesCardProps) => {
    return (
        <div className={`space-y-4 ${className}`}>
            <section className='flex items-center space-x-2'>
                <div className='border border-borderColor rounded-full h-12 w-12 ssm:h-14 ssm:w-14 flex items-center justify-center'>
                    <Image src={icon} alt={`Image displaying ${text} `} width={1500} height={1500} className='w-6 h-6 ssm:w-7 ssm:h-7' />
                </div>
                <p className='text-lg ssm:text-xl font-semibold text-white'>{text}</p>
            </section>
            <p className='ssm:w-[320px] text-[#999]'>{content}</p>
        </div>
    )
}

export default OurValuesCard