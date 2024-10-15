import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { LiaBedSolid } from "react-icons/lia";
import { FaBath } from "react-icons/fa";
import { PiBuildingThin } from 'react-icons/pi';


interface FeaturedPropertiesCardProps {
    src: string,
    title: string,
    description: string,
    noOfBedroom: number,
    noOfBathroom: number,
    houseType: string,
    propertyPrice: number
}

function formatNumberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const FeaturedPropertiesCard = ({ src, title, description, noOfBedroom, noOfBathroom, houseType, propertyPrice }: FeaturedPropertiesCardProps) => {
    return (
        <div className='border border-linkBorder rounded-xl p-4 3xl:p-8 text-white w-full'>
            <div>
                <Image src={src} alt={`Image of ${title}`} height={1500} width={1500} className='h-[318px] w-full rounded-lg object-cover' />
            </div>
            <div>
                <p className='mt-2 3xl:mt-5 font-semibold text-xl'>{title}</p>
                <p className='mt-2 mb-2 text-[#666]'>{description}</p>
                <div className='grid grid-cols-2 gap-y-4 2xl:gap-y-0 2xl:grid-cols-3 gap-x-4 my-3'>
                    <p className='border border-linkBorder px-3 py-2 mb-2-1 rounded-full flex items-center gap-x-2 text-sm'>
                        <span>
                            <LiaBedSolid size={20} />
                        </span>
                        {`${noOfBedroom}-Bedroom`}
                    </p>
                    <p className='border border-linkBorder px-3 py-2 mb-2-1 rounded-full flex items-center gap-x-2 text-sm'>
                        <span><FaBath size={20} /></span>
                        {`${noOfBathroom}-Bathroom`}
                    </p>
                    <p className='border border-linkBorder px-3 py-2 rounded-full flex items-center gap-x-2 text-sm'>
                        <span><PiBuildingThin size={20} /></span>
                        {houseType}
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-between gap-y-12 mt-2 3xl:mt-5'>
                <section>
                    <p className='text-[#666]'>Price</p>
                    <p className='text-2xl'>{`$${formatNumberWithCommas(propertyPrice)}`}</p>
                </section>
                <Button text='Property Details' className='text-sm
                ' />
            </div>
        </div>
    )
}

export default FeaturedPropertiesCard