import React from 'react'
import start from '../assets/Start.svg'
import ReviewItem from '../components/review/ReviewItem'

export default function Review() {
    return (
        <div className='flex'>
            <div className='basis-5/12 pl-[140px] pr-[100px]'>
                <div className='text-4xl font-semibold leading-[44px] mt-[51px] mb-11'>Reviews</div>
                <div className='flex gap-[1px] mb-[22px]'>
                    <img src={start} alt='start' className='w-8 h-8' />
                    <img src={start} alt='start' className='w-8 h-8' />
                    <img src={start} alt='start' className='w-8 h-8' />
                    <img src={start} alt='start' className='w-8 h-8' />
                    <img src={start} alt='start' className='w-8 h-8' />
                </div>
                <div className='mb-7 text-2xl font-semibold'>
                    5 reviews
                </div>
                <div className='flex gap-4 flex-col'>
                    <div className='relative flex justify-between before:border before:border-[#909090] before:w-full before:h-[1px] before:absolute before:top-1/2 top-1/2 before:z-0'>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>5 stars</div>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>(5)</div>
                    </div>

                    <div className='relative flex justify-between before:border before:border-[#909090] before:w-full before:h-[1px] before:absolute before:top-1/2 top-1/2 before:z-0'>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>4 stars</div>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>(1)</div>
                    </div>

                    <div className='relative flex justify-between before:border before:border-[#909090] before:w-full before:h-[1px] before:absolute before:top-1/2 top-1/2 before:z-0'>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>3 stars</div>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>(0)</div>
                    </div>

                    <div className='relative flex justify-between before:border before:border-[#909090] before:w-full before:h-[1px] before:absolute before:top-1/2 top-1/2 before:z-0'>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>2 stars</div>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>(0)</div>
                    </div>

                    <div className='relative flex justify-between before:border before:border-[#909090] before:w-full before:h-[1px] before:absolute before:top-1/2 top-1/2 before:z-0'>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>1 stars</div>
                        <div className='px-3 bg-backgroundprimary z-10 font-bold'>(0)</div>
                    </div>
                </div>
            </div>
            <div className='basis-7/12'>
                <div className='mt-48 flex flex-col gap-10'>
                    <ReviewItem numberStart={5} time="October 21, 2020" title="Amazing and durable jacket" description="It was a gift for a friend and she completely loved it and her warm and stylish she could wear it with almost everything that she has in her wardrobe. She uses it for many things including hiking and put it through the test of actual outdoors being involved in her purchase. And whenever she doesn't use it for the outdoors she uses it casually, which is a great alternative for her because she likes to be diversified in her closet. " review="Was this review helpful? Yes (4) No (0)" />
                    <ReviewItem numberStart={3} time="October 21, 2020" title="Amazing and durable jacket" description="Have been buying the Denali since the first ones, and personally own 3. I want A new one, white with the gray in xxl. Not interested in cream and black. Pluck the length is shorter." review="Was this review helpful? Yes (4) No (0)" />
                </div>
            </div>
        </div>
    )
}
