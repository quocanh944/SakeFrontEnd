import React from 'react'
import ShopCart from './ShopCart'
import { Link } from 'react-router-dom'


export default function UserSpace() {
    const handleLogout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        alert('Log out Success!')
        window.location.reload()
    }
    return (
        <div className='flex gap-[22px]'>
            {window.localStorage.getItem('token') ? <ShopCart></ShopCart> : ''}
            {!window.localStorage.getItem('user')
                ? <Link to='/login' className='inline-flex'>Login</Link>
                : <div className='flex justify-between items-center w-full gap-2'>
                    <span> Hi, {window.localStorage.getItem('user')} </span>
                    <button className='underline' onClick={handleLogout}>Log out</button>
                </div>
            }
        </div>
    )
}
