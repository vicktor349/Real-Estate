import Image from 'next/image'
import React from 'react'
import Star from '../Star'

const Gallery = () => {
  return (
    <div className='border border-linkBorder bg-primaryBackground rounded-xl p-3 sm:p-8 2xl:p-14 grid gap-y-5'>
      <div className='grid sm:grid-cols-2 gap-5'>
        <Image src="/images/contact/Image1.png" alt='Image showing desk and chairs' width={500} height={500} className='w-full h-[200px] object-cover rounded-xl' />
        <Image src="/images/contact/Image2.png" alt='Image showing team leads' width={500} height={500} className='w-full h-[200px] object-cover rounded-xl' />
        <Image src="/images/contact/Image3.png" alt='Image showing workers' width={500} height={500} className='w-full h-[200px] object-cover rounded-xl' />
        <div className='grid grid-cols-2 gap-5'>
          <Image src="/images/contact/Image4.png" alt='Image showing team leads' width={500} height={500} className='w-full h-[200px] object-cover rounded-xl' />
          <Image src="/images/contact/Image5.png" alt='Image showing team leads' width={500} height={500} className='w-full h-[200px] object-cover rounded-xl' />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-5'>
        <div>
          {/* Text */}
          <Star />
          <h6 className='text-3xl sm:text-5xl text-white my-5'>Explore Estatein's World</h6>
          <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
            <div className='grid gap-y-1'>
              <p className='text-[#999999]'>
                Step inside the world of Estatein, where professionalism meets warmth,
                and expertise meets passion. Our gallery offers a glimpse into our team
                and workspaces, inviting you to get to know us better.
              </p>
            </div>
          </div>
        </div>
        {/* Last Image */}
        <Image src="/images/contact/Image6.png" alt='Image showing team leads' width={500} height={500} className='w-full h-[200px] object-cover rounded-xl' />
      </div>
    </div>
  )
}

export default Gallery