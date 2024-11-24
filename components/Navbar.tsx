import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {
    const router = useRouter()
    const activeColor = (p: string) => router.pathname === p
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const mobileRef = useRef<HTMLDivElement | null>(null)
    const toggleButtonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // Check if click is outside both the menu AND the toggle button
            if (
                mobileRef.current &&
                !mobileRef.current.contains(e.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const closeMobileMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className='flex items-center justify-between text-white navbar py-6 lg:py-3 px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 sticky top-0 z-[9999]'>
                <div className='flex items-center space-x-1'>
                    <FaFire color='#703BF7' size={32} />
                    <p>Estatein</p>
                </div>
                <div className='hidden lg:flex items-center gap-x-10'>
                    <Link href="/" className={`px-7 py-4 border rounded-xl flex items-center border-transparent justify-center ${activeColor('/') ? 'bg-linkBackground border-linkBorder border-2' : 'hover:bg-linkBackground hover:border-linkBorder'}`}>
                        Home
                    </Link>
                    <Link href="/aboutus" className={`px-7 py-4 border rounded-xl flex items-center border-transparent justify-center ${activeColor('/aboutus') ? 'bg-linkBackground border-linkBorder border-2' : 'hover:bg-linkBackground hover:border-linkBorder'}`}>
                        About Us
                    </Link>
                    <Link href="/properties" className={`px-7 py-4 border rounded-xl flex items-center border-transparent justify-center ${activeColor('/properties') ? 'bg-linkBackground border-linkBorder border-2' : 'hover:bg-linkBackground hover:border-linkBorder'}`}>
                        Properties
                    </Link>
                    <Link href="/services" className={`px-7 py-4 border rounded-xl flex items-center border-transparent justify-center ${activeColor('/services') ? 'bg-linkBackground border-linkBorder border-2' : 'hover:bg-linkBackground hover:border-linkBorder'}`}>
                        Services
                    </Link>
                </div>

                <div className='hidden lg:flex items-center justify-center bg-buttonBackground py-4 px-6 rounded-md border-linkBorder border'>
                    <Link href="/contactus">Contact Us</Link>
                </div>
                <div className="relative lg:hidden w-6 h-6 overflow-hidden hover:cursor-pointer" onClick={toggleMenu} ref={toggleButtonRef}>
                    <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
                        <HiMiniBars3BottomRight className="w-full h-full" />
                    </div>
                    <div className={`absolute inset-0 transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
                        <RiCloseFill className="w-full h-full" />
                    </div>
                </div>
                <div className='absolute top-[5.5rem] right-5' ref={mobileRef}>
                    <div className='relative'>
                        {
                            isOpen &&
                            <div className='text-white navbar w-[200px] flex flex-col z-[9999] p-2 rounded-lg'>
                                <Link className='hover:bg-buttonBackground p-3 rounded-md' href="/" onClick={closeMobileMenu}>Home</Link>
                                <Link className='hover:bg-buttonBackground p-3 rounded-md' href="/aboutus" onClick={closeMobileMenu}>About Us</Link>
                                <Link className='hover:bg-buttonBackground p-3 rounded-md' href="/properties" onClick={closeMobileMenu}>Properties</Link>
                                <Link className='hover:bg-buttonBackground p-3 rounded-md' href="/services" onClick={closeMobileMenu}>Services</Link>
                                <Link className='bg-buttonBackground p-3 rounded-md text-center border border-linkBorder mt-2 font-semibold' href="/contactus" onClick={closeMobileMenu}>Contact Us</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar