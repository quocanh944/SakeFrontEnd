import React from 'react'
import searchIcon from '../../assets/Search.svg'

export default function Search(props) {
    return (
        <div className='flex justify-center items-center'>
            <img src={searchIcon} alt='Search Icon' className='inline-block'/>
            <input className='inline-block ml-2 focus:outline-0 border-b-[1px] pl-2 bg-backgroundprimary' placeholder='Search'/>
        </div>
    )
}
