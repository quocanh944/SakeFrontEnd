import React, { useState } from 'react'
import CheckoutBreadcrumbs from '../components/checkout/CheckoutBreadcrumbs'
import CheckoutAdress from '../components/checkout/CheckoutAdress'
import ProductItem from '../components/Product/ProductItem'
import CouponTotalPrice from '../components/comon/CouponTotalPrice'
import CheckoutShipping from '../components/checkout/CheckoutShipping'
import CheckoutPayment from '../components/checkout/CheckoutPayment'
import RedirectRoute from '../components/comon/RedirectRoute'

export default function Checkout() {
    const [step, setStep] = useState({
        "name": "address",
        "value": < CheckoutAdress />,
        "btn": <RedirectRoute btnName="Continue to shipping" to="/checkout" />
    })
    return (
        <div>
            <div className='mb-3 mt-[51px] px-[147px] text-4xl font-semibold leading-[44px] tracking-[-1.5px]'>
                Checkout
            </div>
            <div className='flex'>
                <div className='basis-6/12 px-[147px]'>
                    <div className='mb-9'>
                        <CheckoutBreadcrumbs step={step.name} />
                    </div>
                    <div>
                        {step.value}
                        {/* <Routes>
                            <Route path='/checkout' element={<CheckoutAdress />} />
                            <Route path='/checkout/shipping' element={<CheckoutShipping />} />
                            <Route path='/checkout/payment' element={<CheckoutPayment />} />
                        </Routes> */}
                    </div>
                    <div onClick={() => {
                        setStep(preState => {
                            let name = preState.name === "address" ? "shipping" : "payment"
                            let value = name === "shipping" ? <CheckoutShipping /> : <CheckoutPayment />
                            let btn = name === "shipping" ? <RedirectRoute btnName="Continue to payment" to="/checkout" />
                                : <RedirectRoute btnName="Pay with card" to="/shop" />
                            return {
                                name,
                                value,
                                btn
                            }
                        })
                    }}>
                        {step.btn}
                        {/* <Routes>
                            <Route path='/checkout' element={
                                <RedirectRoute btnName="Continue to shipping" to="/checkout/shipping" />
                            } />
                            <Route path='/checkout/shipping' element={
                                <RedirectRoute btnName="Continue to payment" to="/checkout/payment" />
                            } />
                            <Route path='/checkout/payment' element={
                                <RedirectRoute btnName="Pay with card" to="/shop" />
                            } />
                        </Routes> */}
                    </div>
                </div>
                <div className='basis-6/12 pr-5 pb-10'>
                    <div className='text-[#252525] text-[20px] leading-7 mb-5'>Your cart</div>
                    <div className='mb-6'>
                        <ProductItem></ProductItem>
                        <div className='border w-full my-4 border-[#909090]'></div>
                        <ProductItem></ProductItem>
                    </div>
                    <div>
                        {step.name === "address" ? <CouponTotalPrice /> : ""}
                        {/* <Routes>
                            <Route path='/checkout' element={<CouponTotalPrice />} />
                        </Routes> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
