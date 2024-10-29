import React from 'react'
import { FaFire } from 'react-icons/fa'
import { RiMailAddLine, RiSendPlaneFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className='border-t-2 border-linkBorder w-full px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-10 sm:gap-y-20 my-10 py-5'>
            <div className='grid gap-y-4'>
                <div className='flex items-center space-x-1'>
                    <FaFire color='#703BF7' size={32} />
                    <p className='text-white'>Estatein</p>
                </div>
                <div className='border border-linkBorder rounded-lg bg-primaryBackground text-white h-[66px] flex items-center px-5 w-[423px]'>
                    <RiMailAddLine color='#999999' className='h-6 w-6' />
                    <input placeholder='Enter Your Email'
                        type="email" name="email" id="email"
                        className='border-transparent h-[66px] bg-primaryBackground outline-none px-5 placeholder:text-[#999999] w-full'
                    />
                    <RiSendPlaneFill color="#fff" className='w-8 h-8' />
                </div>
            </div>
        </div>
    )
}

export default Footer