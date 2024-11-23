import React from 'react'

interface BannerProps {
    className?: string,
    title: string,
    text: string
}

const Banner = ({ className, title, text }: BannerProps) => {
    return (
        <div className={`rounded-xl border border-linkBorder bg-primaryBackground w-full ${className}`}>
            <div className='p-4 sm:p-8 md:p-12 grid gap-y-5 md:gap-y-[30px]'>
                <section className='sm:flex sm:items-center sm:justify-between text-white font-semibold space-y-5 sm:space-y-0'>
                    <p className='text-xl md:text-[25px] 2xl:text-[30px]'>{title}</p>
                    <button className='bg-linkBackground rounded-[10px] border border-linkBorder px-4 py-4 2xl:py-[18px] 2xl:px-5 font-semibold w-full sm:w-fit'>Learn More</button>
                </section>
                <p className='text-secondaryColor'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Banner