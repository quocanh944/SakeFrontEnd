import React, { useState } from 'react'
import ProductDetailSlideIMG from '../components/Product/ProductDetailSlideIMG'

export default function ProductDetail({ id }) {
    var { name, title, price, IMGList} = {
        "name": "Product ABC",
        "title": "hello to product ABC",
        "price" : "$99",
        "IMGList": ['https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80']
    }
    const [quantity, setQuantity] = useState(0)
    return (
        <div className='flex pb-20'>
            <div className='basis-6/12 mt-10'>
                <ProductDetailSlideIMG imgList={IMGList} />
            </div>
            <div className='basis-6/12 mt-[88px]'>
                <div className='max-w-[85%]'>
                    <div className='text-3xl font-semibold leading-[48px]'>
                        {name}
                    </div>
                    <div>{title}</div>
                    <div className='text-[22px] leading-9 mb-4'>{price}</div>
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
