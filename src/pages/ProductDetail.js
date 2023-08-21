import React, { useState } from 'react'
import ProductDetailSlideIMG from '../components/Product/ProductDetailSlideIMG'

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(0)
    return (
        <div className='flex pb-20'>
            <div className='basis-6/12 mt-10'>
                <ProductDetailSlideIMG />
            </div>
            <div className='basis-6/12 mt-[88px]'>
                <div className='max-w-[85%]'>
                    <div className='text-3xl font-semibold leading-[48px]'>
                        Muichiro Tokito Look Up Mini-Figure - Demon Slayer : Kimetsu No Yaiba
                    </div>
                    <div className='text-[22px] leading-9 mb-4'>$99</div>
                    <div>Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </div>
                    <div className='mb-4'>
                        {/* Stock */}
                        <div className=''></div>
                    </div>
                    <div>
                        <form action='' method='post'>
                            <div className='flex max-w-[20%] justify-between px-2 items-center bg-[#fff] border mb-5'>
                                <input type='hidden' name="quantity" value={quantity} />
                                <div className='text-[25px] cursor-pointer px-2 text-secondary' onClick={() => { setQuantity(quantity - 1) }}>-</div>
                                <div className='text-[22px] px-3'>{quantity}</div>
                                <div className='text-[25px] cursor-pointer px-2 text-secondary' onClick={() => { setQuantity(quantity + 1) }}>+</div>
                            </div>
                            <button type='submit' className='w-full text-[#fff] bg-[#F94C10] text-xl leading-7 py-2 rounded-full'>Add to cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
