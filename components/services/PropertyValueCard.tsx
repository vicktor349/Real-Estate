import Image from 'next/image'
import React from 'react'

interface PropertyValueCardProps {
    src: string,
    text: string,
    content: string
}

const PropertyValueCard = ({ src, text, content }: PropertyValueCardProps) => {
    return (
        <div className='border border-linkBorder rounded-xl'>
            <div className='p-5 sm:p-4 md:p-7 3xl:p-12 space-y-5 md:space-y-[30px]'>
                <section className='flex items-center space-x-5'>
                    <Image src={src} alt={`Image showing ${text}`} width={500} height={500} className='w-[50px] h-[50px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] 2xl:w-[62px] 2xl:h-[62px]' />
                    <p className='text-lg md:text-xl 2xl:text-2xl font-semibold text-white'>{text}</p>
                </section>
                <p className='text-secondaryColor 3xl:text-lg'>{content}</p>
            </div>
        </div>
    )
}

export default PropertyValueCard