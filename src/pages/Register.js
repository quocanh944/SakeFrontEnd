import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Register() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        'email': '',
        'fullName': fname + ' ' + lname,
        'password': '',
        'confirmPassword': ''
    })
    const handleSignUp = async (e) => {
        try {
            let res = await axios.post('http://localhost:8080/api/auth/register', userData)
            if (res.status === 200) {
                navigate('/login')
                toast.success(res.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }

    return (
        <div className='flex flex-col items-center mt-20'>
            <div className='w-[456px] bg-[#fff] pb-8'>
                <div className='pt-[30px] px-[30px]'>
                    <div className='mb-2 text-[#111] text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>
                        Register
                    </div>
                    <div className='mb-5 text-[#A9ABBD] font-medium leading-[26px] tracking-[-0.2px]'>
                        Register to continue
                    </div>
                    <div>
                        <div action='' method='post' className='flex flex-col gap-4'>
                            <div className='flex flex-row gap-4'>
                                <input
                                    type="text"
                                    name='firstname'
                                    className='w-full h-10 px-4 border-[#A9ABBD] border'
                                    placeholder='First Name'
                                    onChange={(e) => setFname(e.target.value)}
                                />
                                <input
                                    type="text"
                                    name='lastname'
                                    className='w-full h-10 px-4 border-[#A9ABBD] border'
                                    placeholder='Last Name'
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>
                            <input
                                type="email"
                                name='Email'
                                className='w-full h-10 px-4 border-[#A9ABBD] border'
                                placeholder='Email'
                                onChange={(e) => setUserData(pre => { return { ...pre, email: e.target.value } })}
                            />
                            <input
                                type="password"
                                name='password'
                                className='w-full h-10 px-4 border-[#A9ABBD] border'
                                placeholder='Password'
                                onChange={(e) => setUserData(pre => { return { ...pre, password: e.target.value } })}
                            />
                            <input
                                type="password"
                                name='confirmpass'
                                className='w-full h-10 px-4 border-[#A9ABBD] border'
                                placeholder='Confirm Password'
                                onChange={(e) => setUserData(pre => { return { ...pre, confirmPassword: e.target.value } })}
                            />
                            <button
                                type='submit'
                                className='w-full h-10 px-4 border border-[#A9ABBD] font-semibold bg-[#cdcecf] items-end'
                                onClick={handleSignUp}
                            >
                                Register
                            </button>
                        </div>
                        <div className='pt-5 flex justify-end items-center'>

                            <Link to='/login' className='text-[#979797] font-bold tracking-[-0.3px]'>Have an account?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
