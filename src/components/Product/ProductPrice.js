import React from 'react'

export default function ProductPrice({ price, discounted }) {
    return (
        <div>
            {!discounted ? <div className='flex justify-start font-semibold'> <span>{price}</span> </div> :
                <div className='flex justify-between'>
                    {/* price sau khi giảm */}
                    <span className='text-[#FE0000] font-semibold'>{price}</span>
                    <div className='flex'>
                        {/* price trước khi giảm */}
                        <span className='relative opacity-40 text-[15px] px-2 inline-flex items-center before:w-full before:border before:border-[#FE0000] before:absolute before:ml-[-8px]'>{price}</span>
                        <div className='border px-2 bg-[#F8DE22] bg-opacity-40 rounded-s-full text-sm inline-flex items-center'>
                            {discounted} %
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
