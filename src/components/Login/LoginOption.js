import React from 'react'

export default function Login_option({icon, name, handleClick}) {
  return (
    <div>
      <a href='' className=' items-center max-w-full py-3 px-[10px] rounded-md border border-[#E1E4EB] h-12 flex gap-[6px] text-[#65676E] items-center justify-center' onClick={handleClick}>
              <img src={icon} alt={`${name} Icon`} className='w-6 h-6' />
              <span className='text-[14px] leading-5 tracking-[-0.4px]'>Continue with {name}</span>
            </a>
    </div>
  )
}
