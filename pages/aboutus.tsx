import OurJourney from '@/components/OurJourney'
import Head from 'next/head'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                <title>Estatein | About Us</title>
            </Head>
            <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40'>
                {/* OUR JOURNEY COMPONENT */}
                <OurJourney />
            </div>
        </>
    )
}

export default about