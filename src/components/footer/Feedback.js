import React from 'react'

export default function Feedback() {
  return (
    <div>
      <div className='text-[36px] font-semibold leading-[44px] mb-[10px]'>Sign up for our newsletter</div>
      <div className='max-w-[400px] text-[14px] font-normal tracking-[-0.3px] mb-6'>Be the first to know about our special offers, new product launches, and events</div>
      <div className='relative flex max-w-[398px] h-10 items-center'>
        <input type='text' name='email' placeholder='Email Address' className='p-4 w-full border'/>
        <button type='submit' className='absolute right-4'>Sign Up</button>
      </div>
    </div>
  )
}
