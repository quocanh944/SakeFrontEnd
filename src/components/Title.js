import React from 'react'
import { Link } from 'react-router-dom';

export default function Title() {
    return (
        <div className='pt-[66px] pb-10'>
            <div className='max-w-[755x] mx-auto text-[56px] text-center font-semibold leading-[62px] tracking-[-2.4px]'>Better clothing for the planet</div>
            <div className='max-w-[610px] mx-auto text-center text-secondary text-xl leading-7 tracking-[-0.4px] mb-[19px]'>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</div>
            <Link to='/shop' className='text-textprimary text-center font-semibold leading-[22px] tracking-[-0.4px] border max-w-[194px] flex items-center justify-center h-[50px] mx-auto'>Shop All</Link>
        </div>
    )
}
