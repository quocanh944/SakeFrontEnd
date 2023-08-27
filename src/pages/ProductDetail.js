import React, { useEffect, useState } from 'react'
import ProductDetailSlideIMG from '../components/Product/ProductDetailSlideIMG'
import axios from 'axios'

export default function ProductDetail({ id }) {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/products/' + id, {
                params: {}
            })
            .then(res => {
                setProduct(res.data)
            })
    }, [])
    var imgL = []
    try {
        if (product.medias.length > 1) {
            product.medias.forEach((media, index) => {
                imgL = [...imgL, media.url]
            })
        } else {
            imgL = [product.medias[0].url]
        }
    } catch (error) {

    }
    const [quantity, setQuantity] = useState(0)
    return (
        <div className='flex pb-20 max-w-[1440px]'>
            <div className='basis-6/12 mt-10'>
                <ProductDetailSlideIMG imgList={imgL} />
            </div>
            <div className='basis-6/12 mt-[88px]'>
                <div className='max-w-[85%]'>
                    <div className='text-3xl font-semibold leading-[48px]'>
                        {product.name}
                    </div>
                    <div>{product.description}</div>
                    <div>
                        {/* Stock */}
                        <div className='text-[22px] leading-9'> Kho: {product.quantity} </div>
                    </div>
                    <div className='text-[22px] leading-9 mb-4'>{product.price}₫</div>
                    <div>
                        <form action='' method='post'>
                            <div className='flex max-w-[20%] justify-between px-2 items-center bg-[#fff] border mb-5'>
                                <input type='hidden' name="quantity" value={quantity} />
                                <div className='text-[25px] cursor-pointer px-2 text-secondary' onClick={() => {
                                    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
                                }}>-</div>
                                <div className='text-[22px] px-3'>{quantity}</div>
                                <div className='text-[25px] cursor-pointer px-2 text-secondary' onClick={() => {
                                    quantity < product.quantity ? setQuantity(quantity + 1) : setQuantity(product.quantity)
                                }}>+</div>
                            </div>
                            <button type='submit' className='w-full text-[#fff] bg-[#F94C10] text-xl leading-7 py-2 rounded-full'>Add to cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
