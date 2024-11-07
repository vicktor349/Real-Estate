import React from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { TbLayoutGrid } from 'react-icons/tb'



interface ValuedClientCardProps {
    year: number,
    domain: string,
    category: string,
    speech: string,
    client: string
}
const ValuedClientCard = ({ year, domain, category, speech, client }: ValuedClientCardProps) => {
    return (
        <div className="shadow-shadow border border-linkBorder rounded-xl">
            <div className='p-4 xl:p-8 2xl:p-12 grid gap-y-10'>
                {/* FIRST SECTION */}
                <div className='flex items-center justify-between'>
                    <div className='grid gap-y-[6px]'>
                        <p className='text-secondaryColor text-lg'>since {year}</p>
                        <p className='text-white text-xl 2xl:text-3xl font-semibold'>{client}</p>
                    </div>
                    <div className='hidden ssm:block rounded-xl border border-linkBorder text-white p-4 ssm:px-6 ssm:py-4 bg-primaryBackground select-none hover:cursor-pointer'>
                        Visit Website
                    </div>
                </div>
                {/* SECOND SECTION */}
                <div className='flex gap-y-5 flex-col ssm:flex-row ssm:items-center ssm:justify-between'>
                    <div>
                        <div className='flex items-center space-x-[6px] 2xl:text-lg text-secondaryColor'>
                            <TbLayoutGrid size={20} color='#999' />
                            <p>Domain</p>
                        </div>
                        <p className='text-white xl:text-lg 2xl:text-xl'>{domain}</p>
                    </div>
                    <p className='hidden ssm:block border border-[#262626] h-14 w-[1px]'></p>
                    <div>
                        <div className='flex items-center space-x-[6px] 2xl:text-lg text-secondaryColor'>
                            <AiOutlineThunderbolt size={20} color='#999' />
                            <p>Category</p>
                        </div>
                        <p className='text-white xl:text-lg 2xl:text-xl'>{category}</p>
                    </div>
                </div>
                {/* THIRD SECTION */}
                <div className='border border-linkBorder rounded-xl'>
                    <div className='p-4 xl:p-7 grid gap-y-3'>
                        <p className='text-secondaryColor text-lg'>What They Said 🤗</p>
                        <p className='text-white text-sm ssm:text-base'>{speech}</p>
                    </div>
                </div>
                <div className='block ssm:hidden w-full text-center font-semibold rounded-xl border border-linkBorder text-white p-4 ssm:px-6 ssm:py-4 bg-primaryBackground select-none hover:cursor-pointer'>
                    Visit Website
                </div>
            </div>
        </div>
    )
}


const ValuedClient = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-12'>
            <ValuedClientCard year={2019} domain='Commercial Real Estate' category='Luxury Home Development' client='ABC Corporation' speech="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs." />
            <ValuedClientCard year={2019} domain='Commercial Real Estate' category='Luxury Home Development' client='ABC Corporation' speech="Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs." />
        </div>
    )
}

export default ValuedClient