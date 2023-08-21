import React from 'react'
import { Link } from 'react-router-dom'

export default function Login_input() {
  return (
    <div>
      <form action='' method='post' className='flex flex-col gap-4'>
        <input type="email" name='Email' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='Email' />
        <input type="password" name='password' className='w-full h-10 px-4 border-[#A9ABBD] border' placeholder='Password' />
        <button type='submit' className='w-full h-10 px-4 border border-[#A9ABBD] font-semibold bg-[#cdcecf] items-end'>Login</button>
      </form>
      <div className='pt-5 flex justify-between items-center'>
        <div className='flex flex-row gap-[10px] items-center'>
          <input type="checkbox" name="RememberMe" className='w-5 h-5'/>
          <label htmlFor='RememberMe' className='text-[#979797] text-[14px] tracking-[-0.3px]'>Remember me</label>
        </div>
        <Link to='/register' className='text-[#979797] font-bold tracking-[-0.3px]'>Forgot Password?</Link>
      </div>
    </div>
  )
}
