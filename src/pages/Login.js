import React from 'react'

import { useState } from "react";
import LoginOptions from '../components/Login/LoginOptions'
import LoginInput from '../components/Login/LoginInput'
import { Link } from 'react-router-dom';

export default function Login() {
  const [login, setLogin] = useState(false);
  return (
    <div className='flex flex-col items-center mt-24'>
      <div className='w-[456px] pb-10 bg-[#fff] '>
        <div className='pt-[30px] px-[30px]'>
          <div className='mb-2 text-[#111] text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>
            Welcome Back
          </div>
          <div className='mb-5 text-[#A9ABBD] font-medium leading-[26px] tracking-[-0.2px]'>
            Login to continue
          </div>
          {login ? <LoginInput /> : <LoginOptions handleClick={(e) => {
            e.preventDefault()
            setLogin(true)
          }} />}
        </div>
      </div>
      <div className='text-[#A9ABBD] text-[14px] font-medium tracking-[-0.3px] pt-7'>
        Or create an <Link to='/register' className='font-bold'>account</Link>
      </div>
    </div>
  )
}
