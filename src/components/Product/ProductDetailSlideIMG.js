import React, { useState } from 'react'

export default function ProductDetailSlideIMG({ imgList }) {
    const [image, setImg] = useState('')
    return (
        <div className='flex gap-2 pl-9 w-full max-h-[400px]'>
            <div className='flex flex-col gap-4 overflow-scroll'>
                {imgList.length === 1 ?
                    <img src={imgList[0]} alt='IMG Detail feature' width="80" height="80" className='object-cover cursor-pointer bg-backgroundprimary border border-[#979797] rounded-md' onClick={() => { setImg(imgList[0]) }} />
                    : imgList.map(
                        (img, index) => {
                            return (
                                <img key={index} src={img} alt='IMG Detail feature' width="80" height="80" className='object-cover cursor-pointer bg-backgroundprimary border border-[#979797] rounded-md' onClick={() => { setImg(img) }} />
                            )
                        }
                    )}
            </div>
            <div className='flex items-center justify-center w-full max-h-[450px]'>
                <img src={image ? image : imgList[0]} alt='IMG Detail feature' className='w-[90%] h-[90%] object-cover bg-backgroundprimary rounded-lg border'/>
            </div>
        </div>
    )
}
