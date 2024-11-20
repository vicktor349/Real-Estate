import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'


interface DropDownItems {
    id: number,
    name: string
}

interface DropdownProps {
    icon: IconType,
    text: string,
    dropDownList: DropDownItems[],
}


const Dropdown = ({ icon: Icon, text, dropDownList }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [dropdownList] = useState<DropDownItems[]>(dropDownList)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='border border-linkBorder bg-linkBackground rounded-xl w-full hover:cursor-pointer select-none' onClick={handleToggle}>
                <div className='flex items-center justify-between py-3 px-4 gap-x-5'>
                    <section className='flex items-center space-x-3'>
                        <Icon className='text-lg 2xl:text-[20px]' color='#999' />
                        <hr className='border-r-[0.5px] border-[#262626] h-6' />
                        <p className='text-[#999] xl:text-sm 2xl:text-base'>{text}</p>
                    </section>
                    <div className="bg-primaryBackground h-8 w-8 rounded-full flex items-center justify-center">
                        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`} >
                            <BiChevronDown className="text-[20px]" color="#fff" />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    {
                        isOpen &&
                        <div className='bg-linkBackground w-full rounded-xl border border-linkBorder mt-2 absolute p-3 gap-y-2 flex flex-col text-white '>
                            {dropdownList.map((list) => (
                                <div key={list.id} className='hover:bg-background hover:cursor-pointer p-2 rounded-md'>
                                    <p>{list.name}</p>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Dropdown