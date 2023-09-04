import React, { useEffect, useState } from 'react'
import CheckoutBreadcrumbs from '../components/checkout/CheckoutBreadcrumbs'
import CheckoutAdress from '../components/checkout/CheckoutAdress'
import ProductItem from '../components/Product/ProductItem'
import CouponTotalPrice from '../components/comon/CouponTotalPrice'
import CheckoutShipping from '../components/checkout/CheckoutShipping'
import CheckoutPayment from '../components/checkout/CheckoutPayment'
import RedirectRoute from '../components/comon/RedirectRoute'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Checkout() {
    const handleFName = (e) => {
        setFName(e.target.value)
    }
    const handleLName = (e) => {
        setLName(e.target.value)
    }
    const handlePhonenumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const [step, setStep] = useState({
        "name": "address",
        "value": < CheckoutAdress
            handleFName={handleFName}
            handleLName={handleLName}
            handlePhonenumber={handlePhonenumber}
            handleAddress={handleAddress} />,
        "btn": <RedirectRoute btnName="Continue to shipping" to="/checkout" />
    })
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [itemRemove, setItemRemove] = useState([])

    const [fullName, setFullName] = useState('')
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        setFullName(() => fName + ' ' + lName)
    }, [fName, lName])

    const checkoutOrder = async () => {
        if (!fullName || !address || !phoneNumber) {
            toast.error('Pls enter all of requied fill!')
        }
        try {
            let res = await axios.post('http://localhost:8080/api/orders/checkout', {
                "address": address,
                "name": fullName,
                "phoneNumber": phoneNumber
            }, {
                headers: {
                    'Authorization': 'Bearer ' + window.localStorage.getItem('token')
                }
            })
            if (res.data.data) toast.success(res.data.data)
        } catch (error) {

        }
    }

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

    console.log('Checkout - cart:', cart);
    console.log('Checkout - total:', total);
    const handleRemove = async (e) => {
        let resDel = await axios.delete('http://localhost:8080/api/carts/remove?productId=' + e.target.value, {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        })
        if (resDel.data) {
            setItemRemove((pre) => [...pre, 1])
            window.location.reload()
        }
    }

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
                    </div>

                    <div onClick={() => {
                        setStep(preState => {
                            let name = preState.name === "address" ? "shipping"
                                : "payment"
                            let value = name === "shipping" ? <CheckoutShipping />
                                : <CheckoutPayment />
                            let btn = name === "shipping" ? <RedirectRoute btnName="Continue to payment" to="/checkout" />
                                :
                                <div onClick={checkoutOrder}> <RedirectRoute btnName="Pay with card" to="/" /></div>
                            return { name, value, btn }
                        })
                    }}>
                        {step.btn}
                    </div>

                </div>
                <div className='basis-6/12 pr-5 pb-10'>
                    <div className='text-[#252525] text-2xl leading-7 mb-5 font-semibold'>Your cart</div>
                    <div className='mb-6'>
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
                        {step.name === "address" ? <CouponTotalPrice total={total}></CouponTotalPrice> : ""}
                        {/* <Routes>
                            <Route path='/checkout' element={<CouponTotalPrice />} />
                        </Routes> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
