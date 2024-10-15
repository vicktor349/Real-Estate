import testimonialData from '@/data/testimonial';
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { IoArrowBackSharp, IoArrowForwardOutline } from 'react-icons/io5';
import { PiStarFourFill } from 'react-icons/pi';




const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(3);
            } else if (window.innerWidth >= 640) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const nextSlide = () => {
        if (currentIndex < testimonialData.length - visibleCount) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === testimonialData.length - visibleCount;

    return (
        <div className="text-white px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-10 sm:gap-y-20 mt-10">
            <div className="grid gap-y-10">
                <div className='flex items-center gap-x-4'>
                    <PiStarFourFill color='#666666' size={30} />
                    <PiStarFourFill color='#666666' size={18} />
                    <PiStarFourFill color='#666666' size={8} />
                </div>
                <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                    <div className='grid gap-y-1'>
                        <p className='text-white text-3xl'>What Our Clients Say</p>
                        <p className='text-[#999999]'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    </div>
                    <button className='text-white rounded border border-linkBorder bg-primaryBackground text-sm py-4 w-52 hidden sm:flex items-center justify-center'>
                        View All Testimonials
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(visibleCount)].map((_, offset) => {
                        const index = (currentIndex + offset) % testimonialData.length;
                        const testimonial = testimonialData[index]
                        let message;

                        if (offset === 0) {
                            message = 'Exceptional Service!';
                        } else if (offset === 1) {
                            message = 'Efficient and Reliable';
                        } else {
                            message = 'Trusted Advisors';
                        }
                        return (
                            <div key={index} className="p-6 border border-linkBorder rounded-lg">
                                <div className="flex items-center mb-4 gap-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div className='border border-linkBorder rounded-full h-9 w-9 flex items-center justify-center' key={Math.floor(Math.random() * 10000) + 1}>
                                            <FaStar color='#FFE500' className='h-4 w-4' />
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {message}
                                </h3>
                                <p className="text-white mb-4 leading-8">{testimonial.comment}</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <hr className='w-full border border-linkBorder' />
                <div className="flex justify-between">
                    <p className="text-gray-400 space-x-2">
                        <span className='text-white'>{currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}</span>
                        <span className='text-[#999]'>of</span>
                        <span>{testimonialData.length}</span>
                    </p>
                    <div className='flex items-center'>
                        <button
                            onClick={prevSlide}
                            className={`mr-4 border border-linkBorder rounded-full h-12 w-12 flex items-center justify-center ${isFirstSlide ? 'cursor-not-allowed' : ''}`}
                            disabled={isFirstSlide}>
                            <IoArrowBackSharp size={24} color={isFirstSlide ? '#808080' : '#fff'} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`border border-linkBorder rounded-full h-12 w-12 flex items-center justify-center ${isLastSlide ? 'cursor-not-allowed' : ''}`}
                            disabled={isLastSlide}>
                            <IoArrowForwardOutline size={24} color={isLastSlide ? '#808080' : '#fff'} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials