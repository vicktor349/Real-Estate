import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

const FeaturedProperties = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-20 mt-10'>
            <div>
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
                <h6 className='text-5xl text-white my-5'>Featured Properties</h6>
                <div className='flex items-center justify-between'>
                    <div className='grid gap-y-1'>
                        <p className='text-[#999999]'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through </p>
                        <p className='text-[#999999]'>Estatein. Click "View Details" for more information.</p>
                    </div>
                    <button className='text-white rounded border border-linkBorder bg-primaryBackground px-6 py-4'>
                        View All Properties
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties