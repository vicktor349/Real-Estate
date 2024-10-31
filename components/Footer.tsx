import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaFire, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { RiMailAddLine, RiSendPlaneFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <>
            <div className='border-t-2 border-linkBorder w-full px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 flex flex-col xl:flex-row gap-x-20 gap-y-10 sm:gap-y-20 my-10 py-5'>
                {/* EMAIL SUBSCRIPTION */}
                <div className='grid gap-y-6 w-full xl:w-fit'>
                    <div className='flex items-center space-x-1'>
                        <FaFire color='#703BF7' size={32} />
                        <p className='text-white'>Estatein</p>
                    </div>
                    <div className='border border-linkBorder rounded-xl bg-primaryBackground text-white h-[66px] flex items-center px-5 w-full xl:w-[423px]'>
                        <RiMailAddLine color='#999999' className='h-6 w-6' />
                        <input placeholder='Enter Your Email'
                            type="email" name="email" id="email"
                            className='border-transparent h-[66px] bg-primaryBackground outline-none px-5 placeholder:text-[#999999] w-full'
                        />
                        <RiSendPlaneFill color="#fff" className='w-8 h-8' />
                    </div>
                </div>
                {/* FOOTER LINKS */}
                <div className='w-full'>
                    <div className="container mx-auto flex flex-wrap justify-between gap-x-20 gap-y-10 xl:gap-y-0">
                        <div>
                            <h3 className="font-semibold mb-4 text-[#999] text-xl">Home</h3>
                            <ul className="space-y-4">
                                <li className="text-white">Hero Section</li>
                                <li className="text-white">Features</li>
                                <li className="text-white">Properties</li>
                                <li className="text-white">Testimonials</li>
                                <li className="text-white">FAQ's</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-[#999] text-xl">About Us</h3>
                            <ul className="space-y-4">
                                <li className="text-white">Our Story</li>
                                <li className="text-white">Our Works</li>
                                <li className="text-white">How It Works</li>
                                <li className="text-white">Our Team</li>
                                <li className="text-white">Our Clients</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-[#999] text-xl">Properties</h3>
                            <ul className="space-y-4">
                                <li className="text-white">Portfolio</li>
                                <li className="text-white">Categories</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-[#999] text-xl">Services</h3>
                            <ul className="space-y-4">
                                <li className="text-white">Valuation Mastery</li>
                                <li className="text-white">Strategic Marketing</li>
                                <li className="text-white">Negotiation Wizardry</li>
                                <li className="text-white">Closing Success</li>
                                <li className="text-white">Property Management</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4 text-[#999] text-xl">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="text-white">Contact Form</li>
                                <li className="text-white">Our Offices</li>
                            </ul>
                        </div>
                    </div>``
                </div>
            </div>
            <div className='bg-[#1A1A1A] flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:items-center justify-between px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 py-7'>
                <section className='text-white flex items-center gap-x-4'>
                    <p>@2023 Estatein. All Rights Reserved.</p>
                    <p>Terms & Conditions</p>
                </section>
                <section className='flex flex-wrap items-center gap-x-4'>
                    <div className="bg-black rounded-full h-12 w-12 flex items-center justify-center">
                        <FaFacebookF size={20} color='#fff' />
                    </div>
                    <div className="bg-black rounded-full h-12 w-12 flex items-center justify-center">
                        <FaLinkedin size={20} color="#fff" />
                    </div>
                    <div className="bg-black rounded-full h-12 w-12 flex items-center justify-center">
                        <BsTwitterX size={20} color='#fff' />
                    </div>
                    <div className="bg-black rounded-full h-12 w-12 flex items-center justify-center">
                        <FaYoutube size={20} color="#fff" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer