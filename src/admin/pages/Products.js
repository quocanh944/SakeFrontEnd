import React from "react";
import List from "../components/List";
import ButtonCustom from "../components/ButtonCustom";
import ProductForm from "../form/ProductForm";

const Products = () => {
  return (
    <div>
      <div className="flex ">
        <ButtonCustom />
      </div>
      {/* <List /> */}
      <ProductForm />
    </div>
  );
};

export default Products;
