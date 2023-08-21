import React from 'react'
import Title from '../components/Title'
import Carousel from '../components/comon/Carousel'
import ProductList from '../components/Product/ProductList'

export default function Body1() {
  return (
    <div>
      <Title></Title>
      <Carousel></Carousel>
      <ProductList></ProductList>
      <Carousel></Carousel>
      <ProductList></ProductList>
    </div>
  )
}
