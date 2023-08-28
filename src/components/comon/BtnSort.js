import React from 'react'

export default function btnSort({handleSort}) {
    return (
        <div className='max-w-[160px] h-9 flex justify-evenly gap-2 items-center border-2 tracking-[-0.3px] p-3 mb-[9px]'>
            <div className='text-[13px] leading-[26px] opacity-50'>Sort By</div>
            <select id="sort" className='bg-backgroundprimary text-[14px] font-bold leading-[26px] hover:cursor-pointer' onChange={(e) => {
                handleSort(e.target.value)
            }}>
                {/* css option??? */}
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
                {/* <option value="Color">Color</option> */}
            </select>
        </div>
    )
}
