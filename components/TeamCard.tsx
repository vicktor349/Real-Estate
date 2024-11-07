import Image from 'next/image'
import React from 'react'
import { FaHandSparkles, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdWavingHand } from 'react-icons/md'

interface TeamCardProps {
    image: string,
    name: string,
    position: string,
    className?: string
}

const TeamCard = ({ image, name, position, className }: TeamCardProps) => {
    return (
        <div className='border border-linkBorder rounded-xl'>
            <div className='p-7'>
                <div className='relative'>
                    <Image src={image} alt={`Image of ${name}`} height={1500} width={1500} className={`${className} object-cover`} />
                    <div className='absolute top-[92%] left-[40%] bg-secondaryButtonBackground w-[60px] h-[45px] rounded-full flex items-center justify-center'>
                        <FaXTwitter color='#fff' />
                    </div>
                </div>
                <p className='text-white text-center text-2xl mt-12'>{name}</p>
                <p className='text-[#999] text-center text-lg mb-6'>{position}</p>
                <div className='w-full rounded-full border border-linkBorder bg-primaryBackground flex items-center justify-between py-3 pr-3 pl-6'>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-white text-lg'>Say Hello</p>
                        <MdWavingHand color='#FAD02E' />
                    </div>
                    <div className='border-transparent rounded-full bg-secondaryButtonBackground h-10 w-10 flex items-center justify-center'>
                        <FaTelegramPlane size={18} color='#fff' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard