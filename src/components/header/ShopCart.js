import React, { useContext} from 'react'
import cartIcon from '../../assets/Vector.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'

export default function ShopCart() {
  const cart = useContext(CartContext)
  return (
    <Link to='/cart'>
      <div className='flex justify-between w-9'>
        <img src={cartIcon} alt='Cart Icon' className='inline-flex' />
        {/* Number of product are added to cart */}
        <span className='inline-flex'>{cart}</span>
      </div>
    </Link>
  )
}
