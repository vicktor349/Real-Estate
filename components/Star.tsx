import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'

const Star = () => {
    return (
        <div className='flex items-center gap-x-4'>
            <PiStarFourFill color='#666666' size={30} />
            <PiStarFourFill color='#666666' size={18} />
            <PiStarFourFill color='#666666' size={8} />
        </div>
    )
}

export default Star