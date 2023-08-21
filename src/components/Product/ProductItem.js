import React from 'react'

export default function ProductItem() {
    return (
        <div className='flex gap-[7px]'>
            <div className='basis-3/12'>
                <img src='' alt='' className='bg-[#C4C4C4] w-full h-full object-cover' />
            </div>
            <div className='px-[5px] py-[6px] flex gap-[7px] flex-col basis-7/12'>
                <div className='text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>Men’s winter jacket</div>
                <div className='text-[14px] leading-[20px] tracking-[-0.4px]'>Size: L</div>
                <div className='text-[14px] leading-[20px] tracking-[-0.4px]'>Quantity: 1</div>
                <div className='text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>$99</div>
            </div>
            <div className='basis-2/12 flex justify-end items-end'>
                <button type='submit' className='underline text-[14px] leading-5 tracking-[-0.4px] '>Remove</button>
            </div>
        </div>
    )
}
