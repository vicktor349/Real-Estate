import React from 'react'
import { BiSolidMap } from 'react-icons/bi'
import Button from '../Button'
import { HiPhone } from 'react-icons/hi2'
import { IoMail } from 'react-icons/io5'


interface DirectionsProps {
    location: string,
    address: string,
    text: string,
    mail: string,
    phone: string,
    city: string
}

const Directions = ({ location, address, text, mail, phone, city }: DirectionsProps) => {
    return (
        <div className='border border-linkBorder bg-linkBackground rounded-xl'>
            <div className='p-4 540px:p-5 xl:p-8 3xl:p-12'>
                <p className='text-white text-lg mb-3'>{location}</p>
                <p className='text-white text-lg xl:text-2xl 3xl:text-[30px] font-semibold mb-4'>{address}</p>
                <p className='xl:text-lg text-placeholderColor'>{text}</p>
                <div className='flex items-center flex-wrap gap-x-[10px] my-5 2xl:my-10 gap-y-3'>
                    <section className='flex items-center justify-center rounded-full border border-linkBorder text-sm xl:text-base text-white bg-primaryBackground gap-x-[6px] py-4 px-4 sm:px-5 w-fit'>
                        <IoMail className='text-lg sm:text-2xl' color='#fff' />
                        {mail}
                    </section>
                    <section className='flex items-center justify-center rounded-full border border-linkBorder text-sm xl:text-base text-white bg-primaryBackground gap-x-[6px] py-4 px-4 sm:px-5 w-fit'>
                        <HiPhone className='text-lg sm:text-2xl' color='#fff' />
                        {phone}
                    </section>
                    <section className='flex items-center justify-center rounded-full border border-linkBorder text-sm xl:text-base text-white bg-primaryBackground gap-x-[6px] py-4 px-4 sm:px-5 w-fit'>
                        <BiSolidMap className='text-lg sm:text-2xl' color='#fff' />
                        {city}
                    </section>
                </div>
                <Button text='Get Direction' className='w-full flex items-center justify-center py-4' />
            </div>
        </div>
    )
}

export default Directions