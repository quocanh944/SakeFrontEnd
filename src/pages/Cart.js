import React from 'react'
import ProductItem from '../components/Product/ProductItem'
import CouponTotalPrice from '../components/comon/CouponTotalPrice'
import RedirectRoute from '../components/comon/RedirectRoute'
import { Link } from 'react-router-dom'
// import RedirectRoute from './RedirectRoute'

export default function Cart() {
    if (window.localStorage.getItem("token") == null && window.location.pathname !== "/login") {
        window.location.href = "/login";
    }

    return (
        <div className='flex gap-20'>
            <div className='basis-7/12 flex flex-col pl-36 pt-[51px]'>
                <div className='text-4xl font-semibold leading-[44px] tracking-[-1.5px] mb-3'>Your cart</div>
                <div className='font-medium leading-7 tracking-[-0.2px] mb-5'>Not ready to checkout? <Link to='/shop' className='text-secondary'>Continue</Link> Shopping</div>
                <div className='mb-28'>
                    <ProductItem></ProductItem>
                    <div className='border w-full my-4 border-[#909090]'></div>
                    <ProductItem></ProductItem>
                </div>
                <div>
                    <div className='text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>Order Information</div>
                    <div className='border w-full my-4 border-[#909090]'></div>
                    <div>
                        <ul>

                        </ul>
                    </div>
                </div>

            </div>
            <div className='basis-5/12'>
                <div className='max-w-[400px]'>
                    <div className='text-2xl font-semibold leading-[30px] tracking-[-0.55px] mb-7 mt-[106px]'>Order Summary</div>
                    <CouponTotalPrice></CouponTotalPrice>
                    {/* <RedirectRoute btnName="checkout" to="/checkout"/> */}
                    <div className='w-full mt-9'>
                        <RedirectRoute btnName={"Continue to checkout"} to="/checkout" />
                    </div>
                </div>
            </div>
        </div>
    )
}
