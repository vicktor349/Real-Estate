import React from 'react'
import HeroBannerCard from './HeroBannerCard'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className='w-full relative flex flex-col-reverse lg:grid lg:grid-cols-2 text-white h-[120vh] lg:h-[calc(100vh-160px)] px-5 md:px-8 lg:px-0 lg:pl-12 xl:pl-28 2xl:pl-36 3xl:pl-40'>
            <div className='flex items-center mt-5 lg:mt-0'>
                <div className='grid sm:gap-y-6 lg:gap-y-12'>
                    <div className='space-y-3 grid sm:gap-y-6 lg:gap-y-12'>
                        <div className='text-3xl sm:text-5xl lg:text-4xl 2xl:text-6xl space-y-2 lg:space-y-4'>
                            <p>Discover Your Dream </p>
                            <p>Property with Estatein</p>
                        </div>
                        <div className='space-y-1 text-sm 2xl:text-base w-full lg:w-[28rem] xl:w-[30rem] 2xl:w-full'>
                            <p>Your journey to finding the perfect property begins here. Explore our listings to find the home </p>
                            <p>that matches your dreams. </p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-4 my-10 sm:mt-0'>
                        <button className='bg-background px-5 py-4 rounded-xl'>
                            Learn More
                        </button>
                        <button className='bg-secondaryButtonBackground px-3 py-4 rounded-lg'>
                            Browse Properties
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <HeroBannerCard number="200+" title="Happy Customers" />
                        <HeroBannerCard number="10k+" title="Properties For Clients" />
                        <HeroBannerCard number="16+" title="Years of Experience" className='col-span-2 sm:col-span-1' />
                    </div>
                </div>
            </div>
            <div className='bg-gradientBackground flex relative herosection mt-10 lg:mt-0 rounded-lg'>
            </div>
        </div>
    )
}

export default HeroSection