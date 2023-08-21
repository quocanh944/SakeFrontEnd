import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList(props) {
    // api products is requiment
    return (
        <div className='grid grid-cols-4 px-[141px] gap-[19px] mb-[134px]'>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    )
}
