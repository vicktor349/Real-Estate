import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import HeroBannerCard from './HeroBannerCard'
import Image from 'next/image'

const OurJourney = () => {
  return (
    <div className='flex justify-between items-center mt-16 flex-col-reverse lg:flex-row'>
      <div className='grid gap-y-2'>
        <div className='flex items-center gap-x-4'>
          <PiStarFourFill color='#666666' size={30} />
          <PiStarFourFill color='#666666' size={18} />
          <PiStarFourFill color='#666666' size={8} />
        </div>
        <h6 className='text-3xl sm:text-5xl text-white my-5'>Our Journey</h6>
        <p className='text-[#999] leading-7'>
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, <br />
          determined to create a real estate platform that transcended the ordinary. Over the <br />
          years, we've expanded our reach, forged valuable partnerships, and gained the trust <br />
          of countless clients.
        </p>
        {/* Statitics card */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <HeroBannerCard number="200+" title="Happy Customers" />
          <HeroBannerCard number="10k+" title="Properties For Clients" />
          <HeroBannerCard number="16+" title="Years of Experience" className='col-span-2 sm:col-span-1' />
        </div>
      </div>
      <div>
        <Image src={"/images/about/Image.png"} alt='Image of a house on a persons palm' width={1500} height={1500} className='h-fit object-cover w-full' />
      </div>
    </div>
  )
}

export default OurJourney