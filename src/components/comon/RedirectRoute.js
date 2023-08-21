import React from 'react'
import { Link } from 'react-router-dom'

export default function RedirectRoute({ btnName, to }) {
  return (
    <Link to={to}>
      <div className='w-full h-[50px] bg-primary text-[#fff] flex items-center justify-center font-semibold leading-[22px]'>{btnName}
      </div>
    </Link>
  )
}
