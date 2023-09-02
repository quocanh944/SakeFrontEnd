import React, { useEffect, useState } from 'react'
import cartIcon from '../../assets/Vector.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ShopCart() {
  const [numberProduct, setNumberProduct] = useState(0)
  useEffect(() => {
    const getCartAPI = async () => {
        let res = await axios.get('http://localhost:8080/api/carts/', {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        setNumberProduct(() => res.data.cartItems?.length)
    }
    getCartAPI()
}, [numberProduct])
  return (
    <Link to='/cart'>
      <div className='flex justify-between w-9'>
        <img src={cartIcon} alt='Cart Icon' className='inline-flex' />
        {/* Number of product are added to cart */}
        <span className='inline-flex'>{numberProduct}</span>
      </div>
    </Link>
  )
}
