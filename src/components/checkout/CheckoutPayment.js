import React from 'react'
import payPal from '../../assets/PayPal.png'
import applePay from '../../assets/apple-pay.svg'
import ToogleSpinner from '../comon/ToogleSpinner'

export default function CheckoutPayment() {
  return (
    <div>
      <div className='flex flex-row w-auto gap-2 mb-[22px]'>
        <div className='w-[154px] h-10 flex items-center justify-center bg-[#fff] cursor-pointer border'>
          <img src={payPal} alt='paypal' />
        </div>
        <div className='w-[154px] h-10 flex items-center justify-center bg-[#000] cursor-pointer border'>
          <img src={applePay} alt='applepay'/>
        </div>
      </div>
      <div>
        <div className='text-[20px] leading-7 mb-4'>Payment Details</div>
        <form action='' method='' className='flex flex-col gap-[10px] mb-[30px]'>
          <div>
            <input type='text' placeholder='Cardholder Name' name='cardholderName' className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full' />
          </div>
          <div>
            <input type='text' placeholder='Card Number' name='cardNumber' className='pl-4 py-3 border basis-6/12 h-10 bg-backgroundprimary w-full' />
          </div>
          <div className='flex flex-row gap-3 justify-between'>
            <select name="paymonth" id="" className='w-[122px] bg-backgroundprimary h-10 border border-[#979797] px-4'>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select name="payYear" id="" className='w-[122px] bg-backgroundprimary h-10 border border-[#979797] px-4'>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2012">2013</option>
              <option value="2012">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <input type='text' name='CVC' placeholder='CVC' className='h-10 pl-4 py-3 bg-backgroundprimary border border-[#979797]' />
          </div>
          <div className='flex justify-between my-7'>
            <div>Save card data for future payments</div>
            <div>
              <ToogleSpinner />
            </div>
          </div>
          {/* redirect */}
        </form>
      </div>
    </div>
  )
}
