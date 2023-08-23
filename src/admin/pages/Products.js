import React from "react";
import { ProductList } from "../components/List";
import NavList from "../components/NavList";
// import ProductForm from "../form/ProductForm";

const Products = () => {
  return (
    <div>
      <NavList />
      <ProductList />
      {/* <ProductForm /> */}
    </div>
  );
};

export default Products;
