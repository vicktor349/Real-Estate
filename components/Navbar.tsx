import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
    const router = useRouter()
    const activeColor = (p: string) => router.pathname === p
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='flex items-center justify-between text-white navbar py-3 px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 sticky top-0 z-[9999]'>
            <div className='flex items-center space-x-1'>
                <FaFire color='#703BF7' size={32} />
                <p>Estatein</p>
            </div>
            <div className='hidden lg:flex items-center gap-x-10'>
                <Link href="/" className={`px-7 py-4 border rounded-xl flex items-center border-transparent justify-center ${activeColor('/') ? 'bg-linkBackground border-linkBorder border-2' : 'hover:bg-linkBackground hover:border-linkBorder'}`}>
                    Home
                </Link>
                <Link href="#" className='px-7 py-4 border-2 border-transparent hover:bg-linkBackground hover:border-linkBorder rounded-xl flex items-center justify-center'>
                    About Us
                </Link>
                <Link href="#" className='px-7 py-4 border-2 border-transparent hover:bg-linkBackground hover:border-linkBorder rounded-xl flex items-center justify-center'>
                    Properties
                </Link>
                <Link href="#" className='px-7 py-4 border-2 border-transparent hover:bg-linkBackground hover:border-linkBorder rounded-xl flex items-center justify-center'>
                    Services
                </Link>
            </div>

            <div className='hidden lg:flex items-center justify-center bg-buttonBackground py-4 px-6 rounded-md border-linkBorder border'>
                <Link href="#">Contact Us</Link>
            </div>
            <div className="relative lg:hidden w-6 h-6 overflow-hidden" onClick={toggleMenu}>
                <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                    <RxHamburgerMenu className="w-full h-full" />
                </div>
                <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
                    <RiCloseFill className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default Navbar