import React from 'react'
import ProductPrice from './ProductPrice'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, name, price, quantity, media, description, flim, brand, discounted }) {

  price = price?.toLocaleString();

  return (
    <Link className='max-w-[265px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px]' to={`/product?id=${id}`}>

      <img src={media.url} alt='source is not found' className='w-full h-auto object-cover' />

      <div className='text-[17px] leading-7 tracking-[-0.4px] mt-3 mx-2'>
        <div className='flex justify-between items-center mb-2 gap-4'>
          <div className='font-bold'> {name} </div>
          <div className='text-xl font-semibold'>{quantity}</div>
        </div>

        <div className='mb-3'>
          <ProductPrice originalPrice={`${price}₫`}/>
        </div>
      </div>
    </Link>
  )
}
