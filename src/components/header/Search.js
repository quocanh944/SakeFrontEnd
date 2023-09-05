import React from 'react'
import searchIcon from '../../assets/Search.svg'

export default function Search({handleSeachValue}) {
    const handleSearch = (e) => {
        if(e.key === "Enter" || e.type === "click"){
            handleSeachValue(document.querySelector('.search').value)
        }
    }

    return (
        <div className='flex justify-center items-center'>
            <img src={searchIcon} alt='Search Icon' className='inline-block cursor-pointer' onClick={handleSearch} />
            <input className='search inline-block ml-2 focus:outline-0 border-b-[1px] pl-2 bg-backgroundprimary' placeholder='Search' onKeyDown={handleSearch} />
        </div>
    )
}
