import React, { useEffect } from 'react'

import { useState } from "react";
import LoginOptions from '../components/Login/LoginOptions'
import LoginInput from '../components/Login/LoginInput'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function Login({ getUser }) {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('minhnhieu@gmail.com')
  const [password, setPassword] = useState('123456')
  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [])
  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('email: ', email);
    console.log('password: ', password);
    if (!email || !password) toast.error('Email/Password is required');
    try {
      let res = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password
      })

      let jwt_decode = jwtDecode(res.data.accessToken)
      console.log('jwt_decode: ', jwt_decode);
      window.localStorage.setItem('token', res.data.accessToken)
      try {
        if (res.data.accessToken) {
          let userRes = await axios.get('http://localhost:8080/api/user/', {
            headers: {
              'Authorization': 'Bearer ' + res.data.accessToken
            }
          })
          window.localStorage.setItem('user', userRes.data.fullName)
        }
        // console.log(userRes);
      } catch (error) {
      }
      navigate('/')
      alert('Login success')
    } catch (error) {
      alert('Incorrect Email or Password!')
    }
  }
  return (
    <div className='flex flex-col items-center mt-24'>
      <div className='w-[456px] pb-10 bg-[#fff] '>
        <div className='pt-[30px] px-[30px]'>
          <div className='mb-2 text-[#111] text-[22px] font-semibold leading-[30px] tracking-[-0.55px]'>
            Welcome Back
          </div>
          <div className='mb-5 text-[#A9ABBD] font-medium leading-[26px] tracking-[-0.2px]'>
            Login to continue
          </div>
          {
            login
              ? <LoginInput
                handleLogin={handleLogin}
                handleEmail={(email) => setEmail(email)}
                handlePassword={(password) => setPassword(password)}
              />
              : <LoginOptions handleClick={(e) => {
                e.preventDefault()
                setLogin(true)
              }}
              />
          }
        </div>
      </div>
      <div className='text-[#A9ABBD] text-[14px] font-medium tracking-[-0.3px] pt-7'>
        Or create an <Link to='/register' className='font-bold'>account</Link>
      </div>
    </div>
  )
}
