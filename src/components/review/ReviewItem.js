import React from 'react'
import start from '../../assets/Start.svg'

export default function ReviewItem({numberStart, time, title, description, review}) {
    return (
        <div className='flex mr-[141px] flex-col gap-4'>
            <div className='flex justify-between w-full'>
                <div className='flex gap-[1px]'>
                {Array(numberStart).fill(<img src={start} alt='start' className='w-6 h-6' />)}
                </div>
                <div className='text-[14px] leading-5 tracking-[-0.4px]'>{time}</div>
            </div>
            <div className='text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>
                {title}
            </div>
            <div className='font-medium leading-[26px] tracking-[-0.2px]'>
                {description}
            </div>
            <div className='flex text-[14px] leading-5 tracking-[-0.4px]'>
                <div>
                    {review}
                </div>
                <div className='px-4'>|</div>
                <div>Flag as inapproriate</div>
            </div>
        </div>
    )
}
