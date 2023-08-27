import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Carousel from '../components/comon/Carousel'
import ProductList from '../components/Product/ProductList'
import axios from 'axios'

export default function Body1() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
        .get('http://localhost:8080/api/products', {
            params: {
                page: 0,
                size: 4,
                sort: 'ASC'
            }
        })
        .then(res => {
            setProducts(preProduct => [...preProduct, ...res.data.content])
        })
}, [])
  return (
    <div>
      <Title></Title>
      <Carousel></Carousel>
      <ProductList products={products}></ProductList>
      <Carousel></Carousel>
      <ProductList products={products}></ProductList>
    </div>
  )
}
