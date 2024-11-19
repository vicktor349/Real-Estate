import React from 'react'
import Button from './Button'
import { CiSearch } from 'react-icons/ci'

const SearchInput = () => {
    return (
        <div className='shadow-shadow border border-linkBorder rounded-t-xl bg-linkBackground'>
            <div className='flex items-center justify-between gap-x-6 lg:gap-x-12 py-2 pr-2 pl-6'>
                <input type="text" className='bg-transparent w-full placeholder:text-[#666] placeholder:lg:text-xl text-white outline-none' placeholder='Search For A Property' />
                <Button text="Find Property"
                    icon={CiSearch} size={24}
                    className='flex items-center gap-x-3 justify-center w-fit md:w-[200px] py-4'
                    textClassName='hidden md:block'
                    iconClassName='md:mx-0 mx-3'
                />
            </div>
        </div>
    )
}

export default SearchInput