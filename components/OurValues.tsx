import React from 'react'
import OurValuesCard from './OurValuesCard'
import Star from './Star'

const OurValues = () => {
    return (
        <div className='flex justify-between xl:items-center mt-20 sm:mt-32 flex-col xl:flex-row gap-x-2'>
            <div className='grid gap-y-2'>
                <Star />
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Our Values</h6>
                <p className='text-[#999] leading-6 sm:leading-7 w-full text-sm sm:text-base'>
                    Our story is one of continuous growth and evolution. We<br />
                    started as a small team with big dreams, determined to<br />
                    create a real estate platform that transcended the<br />
                    ordinary.
                </p>
            </div>
            <div className='mt-10 xl:mt-0 grid lg:grid-cols-2 border border-linkBorder rounded-lg w-full xl:w-[807px] p-3 ssm:p-5 xl:p-5 2xl:p-12 gap-y-16 xl:gap-y-10 shadow-valueShadow relative justify-between'>
                {/* FIRST CARD */}
                <OurValuesCard
                    icon='/images/about/star.svg'
                    text='Trust'
                    content='Trust is the cornerstone of every successful real estate transaction.'
                />
                {/* FIRST HORIZONTAL RULE FOR SMALLER SCREENS */}
                <div className='absolute w-full top-1/4 lg:hidden'>
                    <hr className='w-[95%] 2xl:w-[88%] mx-auto border border-[#262626]' />
                </div>
                {/* FIRST VERTICAL RULE */}
                <p className='hidden lg:absolute lg:block top-[7%] left-2/4 h-32 border border-[#262626]'></p>
                {/* SECOND CARD */}
                <OurValuesCard className='justify-self-end'
                    icon='/images/about/excellence.svg'
                    text='Excellence'
                    content='We set the bar high for ourselves. From the properties we list to the services we provide.'
                />
                {/* SECOND HORIZONTAL RULE */}
                <div className='absolute w-full top-2/4'>
                    <hr className='w-[95%] 2xl:w-[88%] mx-auto border border-[#262626]' />
                </div>
                {/* THIRD CARD */}
                <OurValuesCard
                    icon='/images/about/client.svg'
                    text='Client-Centric'
                    content='Your dreams and needs are at the center of our universe. We listen, understand.'
                />
                {/* THIRD HORIZONTAL RULE */}
                <div className='absolute w-full top-3/4 lg:hidden'>
                    <hr className='w-[95%] 2xl:w-[88%] mx-auto border border-[#262626]' />
                </div>
                {/* VERTICAL RULE */}
                <p className='hidden lg:absolute lg:block top-[55%] left-2/4 h-32 border border-[#262626]'></p>
                <OurValuesCard
                    className='justify-self-end'
                    icon='/images/about/excellence.svg'
                    text='Our Commitment'
                    content='We are dedicated to providing you with the highest level of service, professionalism.'
                />
            </div>
        </div>
    )
}

export default OurValues