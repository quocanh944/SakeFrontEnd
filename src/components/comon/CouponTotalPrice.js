import React from 'react'

export default function CouponTotalPrice() {
    return (
        <div>
            <input type='text' name='coupon' placeholder='Enter coupon code here' className='pl-4 py-3 w-full border bg-backgroundprimary mb-7' />
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between tracking-[-0.3px]'>
                    <div>Subtotal</div>
                    <div>$200</div>
                </div>
                <div className='flex justify-between tracking-[-0.3px]'>
                    <div>Shipping</div>
                    <div>Calculated at the next step</div>
                </div>
                <div className='border w-full'></div>
                <div className='flex justify-between tracking-[-0.3px]'>
                    <div>Total</div>
                    <div>$200</div>
                </div>
            </div>
        </div>
    )
}
