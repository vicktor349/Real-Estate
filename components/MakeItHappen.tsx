import React from 'react'
import Button from './Button'
import Star from './Star'

const MakeItHappen = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-10 sm:gap-y-20 mt-10'>
            <div>
                <Star />
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Let's Make it Happen</h6>
                <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                    <div className='grid gap-y-1'>
                        <p className='text-[#999999]'>Ready to take the first step toward your dream property?
                            Fill out the form below, and our real estate wizards will work their magic to find
                            your perfect match. Don't wait; let's embark on this exciting journey together.
                        </p>
                    </div>
                </div>
            </div>
            {/* FORM */}
            <div className='border border-linkBorder rounded-lg'>
                <div className='px-5 py-10 sm:p-8 xl:p-16 3xl:p-[100px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-x-12 gap-y-8 md:gap-y-14'>
                    {/* FIRST NAME */}
                    <div className='flex flex-col'>
                        <label htmlFor="firstname" className='text-white'>First Name</label>
                        <input type="text" name="firstname" id="firstname"
                            placeholder='Enter First Name'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* LAST NAME */}
                    <div className='flex flex-col'>
                        <label htmlFor="lastname" className='text-white'>Last Name</label>
                        <input type="text" name="firstname" id="firstname"
                            placeholder='Enter Last Name'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* EMAIL */}
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-white'>Email</label>
                        <input type="email" name="email" id="email"
                            placeholder='Enter Your Email'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* PHONE NUMBER */}
                    <div className='flex flex-col'>
                        <label htmlFor="phone" className='text-white'>Phone</label>
                        <input type="tel" name="phone" id="phone"
                            placeholder='Enter Phone Number'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* Preferred Location */}
                    <div className='flex flex-col'>
                        <label htmlFor="location" className='text-white'>Preferred Location</label>
                        <input type="text" name="preferredlocation" id="preferredlocation"
                            placeholder='Select Location'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* Property Type */}
                    <div className='flex flex-col'>
                        <label htmlFor="property" className='text-white'>Property Type</label>
                        <input type="text" name="property" id="property"
                            placeholder='Select Location'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* No of Bathrooms */}
                    <div className='flex flex-col'>
                        <label htmlFor="bathrooms" className='text-white'>No. of Bathrooms</label>
                        <input type="text" name="bathrooms" id="bathrooms"
                            placeholder='Select Location'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* No of Bedrooms */}
                    <div className='flex flex-col'>
                        <label htmlFor="bedrooms" className='text-white'>No. of Bedrooms</label>
                        <input type="text" name="bedrooms" id="bedrooms"
                            placeholder='Select Location'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* Budget */}
                    <div className='flex flex-col xl:col-span-2'>
                        <label htmlFor="budget" className='text-white'>Budget</label>
                        <input type="text" name="budget" id="budget"
                            placeholder='Select Location'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    {/* Budget */}
                    <div className='flex flex-col'>
                        <label htmlFor="budget" className='text-white'>Preferred Contact Method</label>
                        <input type="tel" name="contactnumber" id="contactnumber"
                            placeholder='Enter Your Number'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="tel" name="contactemail" id="contactemail"
                            placeholder='Enter Your Email'
                            className='text-white border border-linkBorder bg-primaryBackground h-[68px] outline-none rounded-lg placeholder:text-placeholderColor px-5 sm:mt-9 w-full' />
                    </div>
                    <div className='flex flex-col md:col-span-2 lg:col-span-3 xl:col-span-4'>
                        <label htmlFor="message" className='text-white'>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Enter your message here...'
                            className='text-white border border-linkBorder bg-primaryBackground h-[120px] py-6 outline-none rounded-lg placeholder:text-placeholderColor px-5 mt-3 w-full resize-none'>
                        </textarea>
                    </div>
                    <div className='md:col-span-2 lg:col-span-3 xl:col-span-4 md:flex md:items-center md:justify-between space-y-7 md:space-y-0'>
                        <section className='flex items-center space-x-3 bg-transparent'>
                            <input type="checkbox" id="agreement" name="agreement" value="accept agreement"
                                className="
                                    appearance-none
                                    flex items-center justify-center
                                    h-[28px] w-[28px]
                                    border border-linkBorder
                                    bg-primaryBackground
                                    rounded
                                    cursor-pointer
                                    checked:before:content-['✓']
                                    checked:before:text-white
                                    checked:before:text-sm"
                            />
                            <label htmlFor="agreement" className='text-secondaryColor select-none hover:cursor-pointer'>I agree with Terms of Use and Privacy Policy</label>
                        </section>
                        <Button text='Send Your Message' className='px-10 py-4 w-full flex items-center justify-center md:w-fit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeItHappen