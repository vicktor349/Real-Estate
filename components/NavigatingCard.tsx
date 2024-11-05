import React from 'react'

interface NavigatingCardProps {
    step: string,
    title: string,
    text: string
}

const NavigatingCard = ({ step, title, text }: NavigatingCardProps) => {
    return (
        <div className=''>
            <div className='px-5 py-4 text-lg text-white border-l border-[#703BF7]'>
                {`Step ${step}`}
            </div>
            <div className='h-[220px] 2xl:h-[250px] ssm:h-[200px] border border-[#262626] rounded-r-xl rounded-bl-xl p-5 2xl:p-8 grid gap-y-3 2xl:gap-y-5 bg-navigateBackground'>
                <p className='text-white text-xl 2xl:text-2xl font-semibold'>{title}</p>
                <p className='text-[#999] 2xl:text-base'>{text}</p>
            </div>
        </div>
    )
}

export default NavigatingCard