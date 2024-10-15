import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import FeaturedPropertiesCard from './FeaturedPropertiesCard';

const FeaturedProperties = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-10 sm:gap-y-20 mt-10'>
            <div>
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Featured Properties</h6>
                <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                    <div className='grid gap-y-1'>
                        <p className='text-[#999999]'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through </p>
                        <p className='text-[#999999]'>Estatein. Click "View Details" for more information.</p>
                    </div>
                    <button className='text-white rounded border border-linkBorder bg-primaryBackground text-sm py-4 w-80 hidden sm:flex items-center justify-center'>
                        View All Properties
                    </button>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 3xl:gap-x-8'>
                <section>
                    <FeaturedPropertiesCard
                        src='/images/featuredproperties/SeasideSerenityVilla.png'
                        title='Seaside Serenity Villa'
                        description='A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood'
                        noOfBedroom={4}
                        noOfBathroom={4}
                        houseType='villa'
                        propertyPrice={500000}
                    />
                </section>
                <section className='hidden sm:flex'>
                    <FeaturedPropertiesCard
                        src='/images/featuredproperties/metropolitan.svg'
                        title='Metropolitan Haven'
                        description='A chic and fully-furnished 2-bedroom apartment with panoramic city views'
                        noOfBedroom={2}
                        noOfBathroom={2}
                        houseType='villa'
                        propertyPrice={550000}
                    />
                </section>
                <section className='hidden lg:flex'>
                    <FeaturedPropertiesCard
                        src='/images/featuredproperties/cottage.svg'
                        title='Rustic Retreat Cottage'
                        description='An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community'
                        noOfBedroom={6}
                        noOfBathroom={6}
                        houseType='villa'
                        propertyPrice={1000000}
                    />
                </section>
            </div>
            <button className='text-white rounded border border-linkBorder bg-primaryBackground text-sm py-4 w-44 flex items-center justify-center sm:hidden'>
                View All Properties
            </button>
        </div>
    )
}

export default FeaturedProperties