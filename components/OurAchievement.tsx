import React from 'react'
import OurAchievementCard from './OurAchievementCard'
import Star from './Star'

const OurAchievement = () => {
    return (
        <div className='flex mt-20 sm:mt-32 flex-col gap-x-2'>
            <div>
                <Star />
                <h6 className='text-3xl sm:text-5xl text-white my-5'>Our Achievements</h6>
                <p className='text-[#999] leading-6 sm:leading-7 w-full text-sm sm:text-base'>
                    Our story is one of continuous growth and evolution. We started as a small
                    team with big dreams, determined to create a real estate platform that transcended the ordinary.
                </p>
            </div>
            <div className='mt-20 xl:mt-10 gap-y-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-7'>
                <OurAchievementCard title='3+ Years of Excellence' text="With over 3 years in the industry, we' ve amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate." />
                <OurAchievementCard title='Happy Clients' text="Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do." />
                <OurAchievementCard title='Industry Recognition' text="We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence." />
            </div>
        </div>
    )
}

export default OurAchievement