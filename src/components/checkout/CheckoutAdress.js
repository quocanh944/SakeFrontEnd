import React, { useEffect, useState } from 'react'

export default function CheckoutAdress({handleFName, handleLName, handlePhonenumber, handleAddress}) {
    

    return (
        <div>
            <div className='text-[20px] leading-7 tracking-[-0.4px] text-[#252525] mb-3'>Shipping Information</div>
            <form action='' method='post' className='flex flex-col gap-[10px] mb-[30px]'>
                <div className='flex gap-2'>
                    <input
                        type='text'
                        placeholder='First Name'
                        name='fisrtname'
                        className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary'
                        required
                        onChange={handleFName}
                    />
                    <input
                        type='text'
                        placeholder='Last Name'
                        name='lastname'
                        className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary'
                        required
                        onChange={handleLName}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Address'
                        name='address'
                        className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full'
                        required
                        onChange={handleAddress}
                    />
                </div>
                <div>
                    <input type='text' placeholder='Apartment, suite, etc (optional)' name='apartment' className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full' />
                </div>
                <div>
                    <input type='text' placeholder='City' name='city' className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full' />
                </div>
                <div className='flex gap-2'>
                    <input type="tel" name="areacode" placeholder='Area' className='pl-4 py-3 border basis-2/12 h-10 bg-backgroundprimary w-full opacity-50' value="+84" disabled />
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder='Phone Number'
                        className='pl-4 py-3 border basis-4/12 h-10 bg-backgroundprimary w-full'
                        required
                        onChange={handlePhonenumber}
                    />
                    <input
                        type="tel"
                        name="zipcode"
                        placeholder='Zipcode'
                        className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full'
                    />
                </div>
                <div>
                    <input type='text' placeholder='Optional' name='optional' className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full' />
                </div>
                <div className='flex gap-2'>
                    <input type='checkbox' name='save' className='w-5 h-5' />
                    <div className='text-[#979797] text-[14px]'>Save contact information</div>
                </div>
            </form>
        </div>
    )
}
