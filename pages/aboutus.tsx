import Navigating from '@/components/Navigating'
import OurAchievement from '@/components/OurAchievement'
import OurJourney from '@/components/OurJourney'
import OurValues from '@/components/OurValues'
import Team from '@/components/Team'
import ValuedClient from '@/components/ValuedClient'
import Head from 'next/head'
import React from 'react'

const aboutus = () => {
    return (
        <>
            <Head>
                <title>Estatein | About Us</title>
            </Head>
            <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40'>
                <OurJourney />
                <OurValues />
                <OurAchievement />
                <Navigating />
                <Team />
                <ValuedClient />
            </div>
        </>
    )
}

export default aboutus