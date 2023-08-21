import React from 'react'
import LoginOption from './LoginOption'
import fbIcon from '../../assets/Facebook.svg'
import ggIcon from '../../assets/Google.svg'
import mailIcon from '../../assets/Frame.svg'

export default function LoginOptions({handleClick}) {
  return (
    <div className='flex gap-[10px] flex-col text-center'>
            <LoginOption icon={fbIcon} name="Facebook"></LoginOption>
            <LoginOption icon={ggIcon} name="Google"></LoginOption>
            <LoginOption icon={mailIcon} name="Email" handleClick={handleClick}></LoginOption>
        </div>
  )
}
