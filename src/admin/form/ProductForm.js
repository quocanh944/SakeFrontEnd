import React from "react";

const ProductForm = () => {
  return (
    <div>
      <form className="w-full bg-white rounded p-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 w-[48%]">
            <div className="border-b-[2px] ">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Name"
                name="name_product"
              ></input>
            </div>
            <div className="">
              <textarea
                className="w-full rounded-lg h-[250px]"
                placeholder="Describe about product"
                name="desc_product"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[48%]">
            <div className="border-b-[2px] ">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-0 "
                placeholder="Film"
                name="film_product"
              ></input>
            </div>
            <div className="border-b-[2px] ">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-0 "
                placeholder="Brand"
                name="brand_product"
              ></input>
            </div>
            <div className="border-b-[2px] ">
              <input
                type="number"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Price"
                name="price_product"
              ></input>
            </div>
            <div className="border-b-[2px] ">
              <input
                type="number"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Quantity"
                name="quantity_product"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
