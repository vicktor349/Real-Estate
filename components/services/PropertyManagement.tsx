import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import PropertyValueCard from './PropertyValueCard'
import Banner from './Banner'

const PropertyManagement = () => {
    return (
        <div className='mt-20 space-y-20'>
            <div className='mt-20'>
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Effortless Property Management</h6>
                <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                    <div className='grid gap-y-1'>
                        <p className='text-[#999999]'>
                            Owning a property should be a pleasure, not a hassle.
                            Estatein's Property Management Service takes the stress out of property ownership,
                            offering comprehensive solutions tailored to your needs.
                            Explore the categories below to see how we can make property management effortless for you
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
                <PropertyValueCard src='/images/services/harmony.png' text='Tenant Harmony' content='Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.' />
                <PropertyValueCard src='/images/services/maintainance.png' text='Maintenance Ease' content='Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.' />
                <PropertyValueCard src='/images/services/peace.png' text='Financial Peace of Mind' content='Managing property finances can be complex. Our financial experts take care of rent collection' />
                <PropertyValueCard src='/images/services/guardian.png' text='Legal Guardian' content='Stay compliant with property laws and regulations effortlessly.' />
                <Banner title='Experience Effortless Property Management' text='Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.' className='sm:col-span-2' />
            </div>
        </div>
    )
}

export default PropertyManagement