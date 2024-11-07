import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <div className='flex mt-20 sm:mt-32 flex-col gap-x-2'>
            <div>
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Navigating the Estatein Experience</h6>
                <p className='text-[#999] leading-6 sm:leading-7 w-full text-sm sm:text-base'>
                    At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease.
                    Here's a step-by-step guide to how it all works.
                </p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-12 mt-20'>
                <TeamCard image='/images/about/founder.png' name='Max Mitchell' position='Founder' />
                <TeamCard image='/images/about/creo.png' name='Sarah Johnson' position='Chief Real Estate Officer' />
                <TeamCard image='/images/about/hpm.png' name='David Brown' position='Head of Property Management' />
                <TeamCard image='/images/about/legaclcounsel.png' name='Michael Turner' position='Legal Counsel' />
            </div>
        </div>
    )
}

export default Team