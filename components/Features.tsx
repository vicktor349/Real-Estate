import React from 'react'
import FeaturesCard from './FeaturesCard'

const Features = () => {
    return (
        <div className='bg-linkBackground border border-linkBorder shadow-shadow'>
            <div className='p-5 gap-x-5 grid gap-y-4 lg:gap-y-0 ssm:grid-cols-2 lg:grid-cols-4'>
                <FeaturesCard icon='/images/home.svg' text="Find Your Dream Home" />
                <FeaturesCard icon='/images/value.svg' text="Unlock Property Value" />
                <FeaturesCard icon='/images/management.svg' text="Property Management" />
                <FeaturesCard icon='/images/smart.svg' text="Smart Investments" />
            </div>
        </div>
    )
}

export default Features