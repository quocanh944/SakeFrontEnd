import React from 'react'
import ProductPrice from './ProductPrice'
import { Link } from 'react-router-dom'

export default function ProductCard({id, name, price, discounted}) {


  return (
    <Link className='max-w-[265px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px]' to={`/product?id=123`}>

      <img src='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' alt='' className='w-full h-auto object-cover' />

      <div className='text-[17px] leading-7 tracking-[-0.4px] mt-3 mx-2'>
        <div className='flex justify-between items-center mb-2'>
          <div className='font-bold'>Men's Sunny Glasses</div>
          <div>M</div>
        </div>

        <div className='mb-3'>
          <ProductPrice originalPrice="$99" discountedPrice="$87" discount="12"/>
        </div>
      </div>
    </Link>
  )
}
