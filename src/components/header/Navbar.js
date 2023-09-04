import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

export default function Navbar({handleSeachValue}) {

    return (
        <div className="flex gap-8 text-[17px] h-[60px] justify-center items-center">
            <Link to="/" className="inline-flex text-[20px] font-bold">Ecommerce</Link>
            <Link to="/shop" className="inline-flex ">Shop</Link>
            <Link to="/story" className="inline-flex ">Stories</Link>
            <Link to="/about" className="inline-flex ">About</Link>
            <Search handleSeachValue={handleSeachValue}></Search>
        </div>
    )
}
