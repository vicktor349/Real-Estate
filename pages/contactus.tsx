import Button from '@/components/Button'
import Directions from '@/components/contact/Directions'
import Gallery from '@/components/contact/Gallery'
import FeaturesCard from '@/components/FeaturesCard'
import Star from '@/components/Star'
import StartJourney from '@/components/StartJourney'
import Head from 'next/head'
import React from 'react'

const contactus = () => {
    return (
        <div>
            <Head>
                <title>Estatein | Contact Us</title>
            </Head>
            <div className='px-5 py-12 sm:py-20 lg:py-[100px] 2xl:pt-[150px] 2xl:pb-[100px] md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 space-y-[14px]'>
                <p className='text-xl sm:text-3xl lg:text-5xl font-semibold text-white'>Get in Touch with Estatein</p>
                <section className='text-secondaryColor sm:text-lg'>
                    <p>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property,</p>
                    <p>explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
                </section>
            </div>
            <div className='bg-linkBackground border border-linkBorder shadow-shadow'>
                <div className='p-5 gap-x-5 grid gap-y-4 lg:gap-y-0 ssm:grid-cols-2 lg:grid-cols-4'>
                    <FeaturesCard icon='/images/contact/mail.png' text="info@estatein.com" />
                    <FeaturesCard icon='/images/contact/phone.png' text="+1 (123) 456-7890" />
                    <FeaturesCard icon='/images/contact/location.png' text="Main Headquarters" />
                    <FeaturesCard icon='/images/contact/socials.png' text="Instagram-LinkedIn-Facebook" />
                </div>
            </div>
            <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40'>
                <div className='my-10 sm:my-20'>
                    <Star />
                    <h6 className='text-3xl sm:text-5xl text-white my-5'>Let's Connect</h6>
                    <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                        <div className='grid gap-y-1'>
                            <p className='text-[#999999]'>
                                We're excited to connect with you and learn more about your real estate goals.
                                Use the form below to get in touch with Estatein. Whether you're a prospective client,
                                partner, or simply curious about our services, we're here to answer your questions
                                and provide the assistance you need.
                            </p>
                        </div>
                    </div>
                </div>
                {/* FORM */}
                <div className='border border-linkBorder rounded-lg'>
                    <div className='px-5 py-10 sm:p-8 xl:p-16 3xl:p-[100px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-x-12 gap-y-8 md:gap-y-14'>
                        {/* FIRST NAME */}
                        <div className='flex flex-col'>
                            <label htmlFor="firstname" className='text-white'>First Name</label>
                            <input type="text" name="firstname" id="firstname"
                                placeholder='Enter First Name'
                                className='text-white border border-linkBorder bg-primaryBackground h-[52px] sm:h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                        </div>
                        {/* LAST NAME */}
                        <div className='flex flex-col'>
                            <label htmlFor="lastname" className='text-white'>Last Name</label>
                            <input type="text" name="firstname" id="firstname"
                                placeholder='Enter Last Name'
                                className='text-white border border-linkBorder bg-primaryBackground h-[52px] sm:h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                        </div>
                        {/* EMAIL */}
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-white'>Email</label>
                            <input type="email" name="email" id="email"
                                placeholder='Enter Your Email'
                                className='text-white border border-linkBorder bg-primaryBackground h-[52px] sm:h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                        </div>
                        {/* PHONE NUMBER */}
                        <div className='flex flex-col'>
                            <label htmlFor="phone" className='text-white'>Phone</label>
                            <input type="tel" name="phone" id="phone"
                                placeholder='Enter Phone Number'
                                className='text-white border border-linkBorder bg-primaryBackground h-[52px] sm:h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                        </div>
                        {/* Inquiry Type */}
                        <div className='flex flex-col'>
                            <label htmlFor="inquiry" className='text-white'>Inquiry Type</label>
                            <input type="text" name="inquiry" id="inquiry"
                                placeholder='Select Inquiry Type'
                                className='text-white border border-linkBorder bg-primaryBackground h-[52px] sm:h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                        </div>
                        {/* How Did You Hear About Us? */}
                        <div className='flex flex-col'>
                            <label htmlFor="aboutus" className='text-white'>How Did You Hear About Us?</label>
                            <input type="text" name="aboutus" id="aboutus"
                                placeholder='Select'
                                className='text-white border border-linkBorder bg-primaryBackground h-[52px] sm:h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                        </div>
                        <div className='flex flex-col md:col-span-2 lg:col-span-3'>
                            <label htmlFor="message" className='text-white'>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Enter your message here...'
                                className='text-white border border-linkBorder bg-primaryBackground h-[120px] py-6 outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full resize-none'>
                            </textarea>
                        </div>
                        <div className='md:col-span-2 lg:col-span-3 md:flex md:items-center md:justify-between space-y-7 md:space-y-0'>
                            <section className='flex items-center space-x-3 bg-transparent'>
                                <input type="checkbox" id="agreement" name="agreement" value="accept agreement"
                                    className="
                                    appearance-none
                                    flex items-center justify-center
                                    h-[24px] w-[24px]
                                    sm:h-[28px] sm:w-[28px]
                                    border border-linkBorder
                                    bg-primaryBackground
                                    rounded
                                    cursor-pointer
                                    checked:before:content-['✓']
                                    checked:before:text-white
                                    checked:before:text-sm"
                                />
                                <label htmlFor="agreement" className='text-secondaryColor select-none hover:cursor-pointer text-sm sm:text-base'>I agree with Terms of Use and Privacy Policy</label>
                            </section>
                            <Button text='Send Your Message' className='px-16 py-4 w-full flex items-center justify-center md:w-fit' />
                        </div>
                    </div>
                </div>
                <div className='my-10 sm:my-20'>
                    <Star />
                    <h6 className='text-3xl sm:text-5xl text-white my-5'>Let's Connect</h6>
                    <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                        <div className='grid gap-y-1'>
                            <p className='text-[#999999]'>
                                We're excited to connect with you and learn more about your real estate goals.
                                Use the form below to get in touch with Estatein. Whether you're a prospective client,
                                partner, or simply curious about our services, we're here to answer your questions
                                and provide the assistance you need.
                            </p>
                        </div>
                    </div>
                    <div className='lg:flex items-center justify-between gap-x-[30px] my-12 grid gap-y-5'>
                        <Directions
                            location='Main Headquarters'
                            address='123 Estatein Plaza, City Center, Metropolis'
                            text='Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.'
                            mail='info@estatein.com'
                            phone='+1 (123) 456-7890'
                            city='Metropolis'
                        />
                        <Directions
                            location='Regional Offices'
                            address='456 Urban Avenue, Downtown District, Metropolis'
                            text="Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets."
                            mail='info@restatein.com'
                            phone='+1 (123) 456-7890'
                            city='Metropolis'
                        />
                    </div>
                </div>
                <Gallery />
                <StartJourney />
            </div>
        </div>
    )
}

export default contactus