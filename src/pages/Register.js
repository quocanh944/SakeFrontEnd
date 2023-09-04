import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    

    return (
        <div className='flex flex-col items-center mt-20'>
            <div className='w-[456px] bg-[#fff] pb-8'>
                <div className='pt-[30px] px-[30px]'>
                    <div className='mb-2 text-[#111] text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>
                        Register
                    </div>
                    <div className='mb-5 text-[#A9ABBD] font-medium leading-[26px] tracking-[-0.2px]'>
                        Register to continue
                    </div>
                    <div>
                        <form action='' method='post' className='flex flex-col gap-4'>
                        <div className='flex flex-row gap-4'>
                            <input type="text" name='firstname' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='First Name' />
                            <input type="text" name='lastname' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='Last Name' />
                        </div>
                            <input type="email" name='Email' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='Email' />
                            <input type="password" name='password' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='Password' />
                            <input type="password" name='confirmpass' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='Confirm Password' />
                            <button type='submit' className='w-full h-10 px-4 border border-[#A9ABBD] font-semibold bg-[#cdcecf] items-end'>Register</button>
                        </form>
                        <div className='pt-5 flex justify-end items-center'>
                            
                            <Link to='/login' className='text-[#979797] font-bold tracking-[-0.3px]'>Have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
