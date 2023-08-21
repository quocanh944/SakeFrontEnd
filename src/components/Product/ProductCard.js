import React from 'react'

export default function ProductCard() {
  return (
    <div className='max-w-[265px] h-[330px]'>
    <img src='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' alt='' className='w-full h-auto object-cover'/>
    <div className='text-[17px] leading-7 tracking-[-0.4px] mt-3'>
        <div className='flex justify-between items-center'>
            <div className='font-bold'>Men's Sunny Glasses</div>
            <div>M</div>
        </div>
        <span>$99</span>
    </div>
    </div>
  )
}
