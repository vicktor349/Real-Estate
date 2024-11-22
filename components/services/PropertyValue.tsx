import React from 'react'
import PropertyValueCard from './PropertyValueCard'
import Banner from './Banner'

const PropertyValue = () => {
    return (
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-[30px] mt-20'>
            <PropertyValueCard src='/images/services/valuation.png' text='Valuation Mastery' content='Discover the true worth of your property with our expert valuation services.' />
            <PropertyValueCard src='/images/services/marketing.png' text='Strategic Marketing' content='Selling a property requires more than just a listing; it demands a strategic marketing approach.' />
            <PropertyValueCard src='/images/services/wizardry.png' text='Negotiation Wizardry' content='Negotiating the best deal is an art, and our negotiation experts are masters of it.' />
            <PropertyValueCard src='/images/services/success.png' text='Closing Success' content='A successful sale is not complete until the closing. We guide you through the intricate closing process.' />
            <Banner className='sm:col-span-2' />
        </div>
    )
}

export default PropertyValue