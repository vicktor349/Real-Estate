import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaFire } from 'react-icons/fa'

const Navbar = () => {
    const router = useRouter()
    const activeColor = (p: string) => router.pathname === p
    return (
        <div className='flex items-center justify-between text-white navbar py-3 px-40 sticky top-0'>
            <div className='flex items-center space-x-1'>
                <FaFire color='#703BF7' size={32} />
                <p>Estatein</p>
            </div>
            <div className='flex items-center gap-x-10'>
                <Link href="/" className={`px-7 py-4 border-2 border-transparent rounded-xl flex items-center justify-center ${activeColor('/') ? 'bg-linkBackground border-linkBorder' : 'hover:bg-linkBackground hover:border-linkBorder'}`}>
                    Home
                </Link>
                <Link href="#" className='px-7 py-4 border-2 border-transparent hover:bg-linkBackground hover:border-linkBorder rounded-md flex items-center justify-center'>About Us</Link>
                <Link href="#" className='px-7 py-4 border-2 border-transparent hover:bg-linkBackground hover:border-linkBorder rounded-md flex items-center justify-center'>Properties</Link>
                <Link href="#" className='px-7 py-4 border-2 border-transparent hover:bg-linkBackground hover:border-linkBorder rounded-md flex items-center justify-center'>Services</Link>
            </div>

            <div className='bg-buttonBackground py-4 px-6 flex items-center justify-center rounded-md border-linkBorder border'>
                <Link href="#">Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar