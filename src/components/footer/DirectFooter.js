import React from 'react'
import { Link } from 'react-router-dom'

export default function DirectFooter(props) {
    return (
        <div className='max-w-[190px]'>
            <div className='text-[#111] font-semibold leading-[22px] tracking-[-0.4px] mb-[21px]'>
                {props.title}
            </div>
            <div className='flex flex-col'>
            {props.listDirects.map(function(dir,index){
                return (
                    <Link key={index} to={`/shop/${dir}`} className='font-medium leading-[26px] tracking-[-0.2px] text-secondary'>{dir}</Link>
                )
            })}
            </div>
        </div>
    )
}
