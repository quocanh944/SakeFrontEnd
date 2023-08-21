import React from 'react'

export default function CheckoutShipping() {
  return (
    <form action='' method='post' className='flex flex-col gap-4 mb-20'>
      <div className='flex bg-[#fff] border p-5 h-full rounded-sm'>
        <div className='basis-2/12 w-full flex justify-center items-center'>
          <input type='checkbox' className='w-5 h-5' />
        </div>
        <div className='basis-10/12 flex flex-col'>
          <div className='text-[#111] font-bold'>UPS/USPS Surepost </div>
          <div>4-7 Business Days</div>
        </div>
      </div>

      <div className='flex bg-[#fff] border p-5 h-full rounded-sm'>
        <div className='basis-2/12 w-full flex justify-center items-center'>
          <input type='checkbox' className='w-5 h-5' />
        </div>
        <div className='basis-10/12 flex flex-col'>
          <div className='text-[#111] font-bold'>UPS Ground Shipping </div>
          <div>3-5 Business Days</div>
        </div>
      </div>
    </form>
  )
}
