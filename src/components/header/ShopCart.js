import React from 'react'
import cartIcon from '../../assets/Vector.svg'

export default function ShopCart() {
  return (
    <div className='flex justify-between w-9'>
      <img src={cartIcon} alt='Cart Icon' className='inline-flex' />
      {/* Number of product are added to cart */}
      <span className='inline-flex'>3</span>
    </div>
  )
}
