import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import PropertyValueCard from './PropertyValueCard'

const SmartInvestment = () => {
    return (
        <div className='mt-20 space-y-20'>
            <div className='mt-20'>
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
            </div>
            <div className='2xl:flex 2xl:justify-between 2xl:gap-x-5 grid gap-y-7 sm:gap-y-10 2xl:gap-y-0'>
                <div className='space-y-9 w-full 2xl:w-[519px]'>
                    <div>
                        <h6 className='text-3xl sm:text-5xl text-white my-5'>Smart Investments, Informed Decisions</h6>
                        <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                            <div className='grid gap-y-1'>
                                <p className='text-[#999999]'>
                                    Building a real estate portfolio requires a strategic approach.
                                    Estatein's Investment Advisory Service empowers you to make smart
                                    investments and informed decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* BANNER */}
                    <div className={'rounded-xl border border-linkBorder bg-primaryBackground w-full'}>
                        <div className='p-4 sm:p-8 md:p-8 grid gap-y-5 md:gap-y-[30px]'>
                            <section className='sm:flex sm:items-center sm:justify-between text-white font-semibold space-y-5 sm:space-y-0'>
                                <p className='text-2xl'>Unlock Your Investment Potential</p>
                            </section>
                            <p className='text-[#E4E4E7]'>
                                Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
                            </p>
                            <button className='bg-linkBackground text-white  rounded-[10px] border border-linkBorder px-4 py-4 2xl:py-[18px] 2xl:px-5 font-semibold w-full'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='bg-primaryBackground rounded-xl grid sm:grid-cols-2 gap-y-7 sm:gap-[10px] w-full 2xl:w-[850px] 3xl:w-[1017px] p-3'>
                    <PropertyValueCard className='bg-linkBackground' src='/images/services/valuation.png' text='Market Insight' content='Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions' />
                    <PropertyValueCard className='bg-linkBackground' src='/images/services/roi.png' text='ROI Assessment' content='Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments' />
                    <PropertyValueCard className='bg-linkBackground' src='/images/services/customized.png' text='Customized Strategies' content='Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs' />
                    <PropertyValueCard className='bg-linkBackground' src='/images/services/guardian.png' text='Diversification Mastery' content='Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations' />
                </div>
            </div>
        </div>
    )
}

export default SmartInvestment