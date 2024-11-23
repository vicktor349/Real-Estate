import React from 'react'
import PropertyValueCard from './PropertyValueCard'
import Banner from './Banner'
import { PiStarFourFill } from 'react-icons/pi'

const PropertyValue = () => {
    return (
        <div className='mt-20 space-y-20'>
            <div className='mt-20'>
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Unlock Property Value</h6>
                <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                    <div className='grid gap-y-1'>
                        <p className='text-[#999999]'>
                            Selling your property should be a rewarding experience, and at Estatein,
                            we make sure it is. Our Property Selling Service is designed to maximize
                            the value of your property, ensuring you get the best deal possible.
                            Explore the categories below to see how we can help you at every step of your selling journey
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
                <PropertyValueCard src='/images/services/valuation.png' text='Valuation Mastery' content='Discover the true worth of your property with our expert valuation services.' />
                <PropertyValueCard src='/images/services/marketing.png' text='Strategic Marketing' content='Selling a property requires more than just a listing; it demands a strategic marketing approach.' />
                <PropertyValueCard src='/images/services/wizardry.png' text='Negotiation Wizardry' content='Negotiating the best deal is an art, and our negotiation experts are masters of it.' />
                <PropertyValueCard src='/images/services/success.png' text='Closing Success' content='A successful sale is not complete until the closing. We guide you through the intricate closing process.' />
                <Banner className='sm:col-span-2' />
            </div>
        </div>
    )
}

export default PropertyValue