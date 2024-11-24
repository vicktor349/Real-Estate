import React, { useEffect, useState } from 'react'
import frequentlyaskedData from '@/data/faqs';
import { IoArrowBackSharp, IoArrowForwardOutline } from 'react-icons/io5';
import Star from './Star';

const FrequentlyAsked = () => {
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
        if (currentIndex < frequentlyaskedData.length - visibleCount) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex >= frequentlyaskedData.length - visibleCount;


    return (
        <div className="text-white px-5 md:px-8 lg:px-12 xl:px-28 2xl:px-36 3xl:px-40 grid gap-y-10 sm:gap-y-20 mt-10">
            <div className="grid gap-y-10">
                <Star />
                <div className='flex items-center justify-between gap-x-7 xl:gap-x-0'>
                    <div className='grid gap-y-1'>
                        <p className='text-white text-3xl'>Frequently Asked Questions</p>
                        <p className='text-[#999999]'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                    </div>
                    <button className='text-white rounded border border-linkBorder bg-primaryBackground text-sm py-4 w-52 hidden sm:flex items-center justify-center'>
                        View All Testimonials
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(visibleCount)].map((_, offset) => {
                        const index = currentIndex + offset;
                        if (index >= frequentlyaskedData.length) return null;
                        const questions = frequentlyaskedData[index];
                        return (
                            <div key={index} className="p-6 border border-linkBorder rounded-lg flex flex-col">
                                <p className="text-white font-semibold text-xl">{questions.question}</p>
                                <p className='my-6 text-[#999]'>{questions.description}</p>
                                <button className='text-white bg-primaryBackground rounded-lg border border-linkBorder px-6 py-4 mt-auto w-fit'>
                                    Read More
                                </button>
                            </div>
                        );
                    })}
                </div>
                <hr className='w-full border border-linkBorder bg-linkBackground' />
                <div className="flex justify-between">
                    <p className="text-gray-400 space-x-2">
                        <span className='text-white'>{currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}</span>
                        <span className='text-[#999]'>of</span>
                        <span>{frequentlyaskedData.length}</span>
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

export default FrequentlyAsked