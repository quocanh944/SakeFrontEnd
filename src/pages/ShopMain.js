import React from 'react'
import ProductCard from '../components/Product/ProductCard'
import BtnSort from '../components/comon/BtnSort'

export default function ShopMain() {
    return (
        <form>
            <div className='grid grid-cols-[30%_70%]'>
                <div className='pt-[43px] ml-[145px]'>
                    <div className='mb-5'>
                        <div className='inline-block w-[75px] text-[22px] font-semibold leading-[30px] tracking-[-0.55px] mr-2'>Filters</div>
                        <button type='reset' className='inline-block text-[#C4C4C4] text-[14px] leading-5 tracking-[-0.4px] underline'>Clear filters</button>
                    </div>
                    <div className='text-[14px] font-bold leading-5 tracking-[-0.4px] mb-5'>
                        Categories
                    </div>
                    {/* List categories */}
                    <div className='mb-5'>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className='flex gap-3 max-w-[190px] text-[13px] leading-[17px] tracking-[-0.4px] items-center'>
                                <input type='checkbox' className='w-5 h-5 accent-primary mr-3 cursor-pointer' />
                                <span>Jackets</span>
                            </li>
                            <li className='flex gap-3 max-w-[190px] text-[13px] leading-[17px] tracking-[-0.4px] items-center'>
                                <input type='checkbox' className='w-5 h-5 accent-primary mr-3 cursor-pointer' />
                                <span>Fleece</span>
                            </li>
                            <li className='flex gap-3 max-w-[190px] text-[13px] leading-[17px] tracking-[-0.4px] items-center'>
                                <input type='checkbox' className='w-5 h-5 accent-primary mr-3 cursor-pointer' />
                                <span>Sweatshirts & Hoodies</span>
                            </li>

                        </ul>
                    </div>
                    <div className='text-[14px] font-bold leading-5 tracking-[-0.4px] mb-5'>
                        Color
                    </div>
                    <div className='grid grid-cols-5 gap-2 max-w-[157px]'>
                        {/* api color code */}
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#DF9167] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#7B61FF] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#219653] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#2F80ED] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#EB5757] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#56CCF2] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#4F4F4F] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#BB6BD9] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#F2F2F2] border'></button>
                        <button className='max-w-[25px] h-[25px] rounded-[50%] bg-[#6FCF97] border'></button>
                    </div>
                </div>
                <div className='flex flex-col mt-[46px] mr-[142px]'>
                    <div className='flex flex-col items-end'>
                        {/* sort  option*/}
                        <BtnSort></BtnSort>
                        {/* number of products */}
                        <div className='h-7 text-[14px] leading-5 tracking-[-0.4px] mb-[18px]'>Showing 1003 Products</div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mb-10'>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='w-[298px] h-[50px] block items-center justify-center text-textprimary text-center font-semibold leading-[22px] tracking-[-0.4px] border-2'>Load more products</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
