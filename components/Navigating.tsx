import React from 'react'
import NavigatingCard from './NavigatingCard'
import Star from './Star'

const Navigating = () => {
    return (
        <div className='flex mt-20 sm:mt-32 flex-col gap-x-2'>
            <div>
                <Star />
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Navigating the Estatein Experience</h6>
                <p className='text-[#999] leading-6 sm:leading-7 w-full text-sm sm:text-base'>
                    At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease.
                    Here's a step-by-step guide to how it all works.
                </p>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-12 mt-20'>
                <NavigatingCard step="01" title='Discover a World of Possibilities' text='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.' />
                <NavigatingCard step="02" title='Narrowing Down Your Choices' text="Once you' ve found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision." />
                <NavigatingCard step="03" title='Personalized Guidance' text="Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away." />
                <NavigatingCard step="04" title='See It for Yourself' text="Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home." />
                <NavigatingCard step="05" title='Making Informed Decisions' text='Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.' />
                <NavigatingCard step="06" title='Getting the Best Deal' text="We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms." />
            </div>
        </div>
    )
}

export default Navigating