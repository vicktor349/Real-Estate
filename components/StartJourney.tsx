import React from 'react'

const StartJourney = () => {
    return (
        <div className='grid gap-y-10 sm:gap-y-20 my-10 mt-20 sm:mt-32'>
            <div className='grid md:grid-cols-12 items-center gap-x-8 gap-y-10'>
                <div className='md:col-span-8'>
                    <p className='text-2xl sm:text-4xl text-white font-semibold mb-2'>Start Your Real Estate Journey Today</p>
                    <section className='text-[#999] leading-[27px]'>
                        <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is</p>
                        <p>here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch</p>
                        <p>with our team for personalized assistance.</p>
                    </section>
                </div>
                <div className='w-full md:w-fit md:col-span-4 ml-auto sm:mt-0'>
                    <button className='bg-secondaryButtonBackground px-6 py-4 text-white rounded-lg whitespace-nowrap w-full'>Explore Properties</button>
                </div>
            </div>
        </div>
    )
}

export default StartJourney