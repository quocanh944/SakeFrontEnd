import React from 'react'
import ShopCart from './ShopCart'
import { Link } from 'react-router-dom'


export default function UserSpace(props) {
    return (
        <div className='flex gap-[22px]'>
            <ShopCart></ShopCart>
            <Link to='/login' className='inline-flex'>Login</Link>
        </div>
    )
}
