import React from 'react'

const Journey = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-10 sm:gap-y-20 my-10'>
            <div className='grid sm:grid-cols-12 items-center gap-x-8'>
                <div className='col-span-8'>
                    <p className='text-2xl sm:text-4xl text-white font-semibold mb-2'>Start Your Real Estate Journey Today</p>
                    <section className='text-[#999] leading-[27px] text-sm'>
                        <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is</p>
                        <p>here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch</p>
                        <p>with our team for personalized assistance.</p>
                    </section>
                </div>
                <div className='col-span-4 ml-auto my-10 sm:mt-0'>
                    <button className='bg-secondaryButtonBackground px-6 py-4 text-white rounded-lg whitespace-nowrap'>Explore Properties</button>
                </div>
            </div>
        </div>
    )
}

export default Journey