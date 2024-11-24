import Features from '@/components/Features'
import PropertyManagement from '@/components/services/PropertyManagement'
import PropertyValue from '@/components/services/PropertyValue'
import SmartInvestment from '@/components/services/SmartInvestment'
import StartJourney from '@/components/StartJourney'
import Head from 'next/head'
import React from 'react'

const services = () => {
    return (
        <>
            <Head>
                <title>Estatein | Services</title>
            </Head>
            <div>
                <div className='px-5 py-12 sm:py-20 lg:py-[100px] 2xl:pt-[150px] 2xl:pb-[100px] md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 space-y-[14px]'>
                    <p className='text-xl sm:text-3xl lg:text-5xl font-semibold text-white'>Elevate Your Real Estate Experience</p>
                    <section className='text-secondaryColor sm:text-lg'>
                        <p>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs </p>
                        <p>and dreams.</p>
                    </section>
                </div>
                <Features />
                <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40'>
                    <PropertyValue />
                    <PropertyManagement />
                    <SmartInvestment />
                    <div className='my-20'>
                        <StartJourney />
                    </div>
                </div>
            </div>
        </>
    )
}

export default services