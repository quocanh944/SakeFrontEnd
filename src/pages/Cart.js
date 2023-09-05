import React, { useEffect, useState } from 'react'
import ProductItem from '../components/Product/ProductItem'
import CouponTotalPrice from '../components/comon/CouponTotalPrice'
import RedirectRoute from '../components/comon/RedirectRoute'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import RedirectRoute from './RedirectRoute'

export default function Cart({setCartLength}) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [itemRemove, setItemRemove] = useState([])


    if (window.localStorage.getItem("token") == null && window.location.pathname !== "/login") {
        window.location.href = "/login";
    }
    useEffect(() => {
        const getCartAPI = async () => {
            let res = await axios.get('http://localhost:8080/api/carts/', {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                }
            })
            setCart(() => res.data.cartItems)
            setTotal(() => res.data.total)
        }
        getCartAPI()
    }, [itemRemove])
    // cart.map(product => console.log(product))

    const handleRemove = async (e) => {
        let resDel = await axios.delete('http://localhost:8080/api/carts/remove?productId=' + e.target.value, {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        if(resDel.data) {
            setCartLength(cart.length - 1 > 0 ? cart.length - 1 : 0)
            setItemRemove((pre)=> [...pre, 1])
        }
    }

    return (
        <div className='flex gap-20'>
            <div className='basis-7/12 flex flex-col pl-36 pt-[51px]'>
                <div className='text-4xl font-semibold leading-[44px] tracking-[-1.5px] mb-3'>Your cart</div>
                <div className='font-medium leading-7 tracking-[-0.2px] mb-5'>Not ready to checkout? <Link to='/shop' className='text-secondary'>Continue</Link> Shopping</div>
                <div className='mb-28'>
                    {
                        cart === [] || cart.length === 0
                            ? <span className='text-2xl font-bold'> Your cart is empty </span>
                            : cart?.map((product, index) => {

                                return (<div key={index}> <ProductItem id={product.productDTO.id} img={product.productDTO.image} name={product.productDTO.name} descrip={product.productDTO.description} quantity={product.quantity} price={product.productDTO.price} handleRemove={handleRemove} />
                                    <div className='border w-full my-4 border-[#909090]'></div>
                                </div>)
                            })
                    }
                </div>
                <div>
                    <div className='text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>Order Information</div>
                    <div className='border w-full my-4 border-[#909090]'></div>
                    <div>
                        <ul>
                            {/* update later */}
                        </ul>
                    </div>
                </div>

            </div>
            <div className='basis-5/12'>
                <div className='max-w-[400px]'>
                    <div className='text-2xl font-semibold leading-[30px] tracking-[-0.55px] mb-7 mt-[106px]'>Order Summary</div>
                    <CouponTotalPrice total={total}></CouponTotalPrice>
                    {/* <RedirectRoute btnName="checkout" to="/checkout"/> */}
                    <div className='w-full mt-9'>
                        <RedirectRoute btnName={"Continue to checkout"} to="/checkout" />
                    </div>
                </div>
            </div>
        </div>
    )
}
