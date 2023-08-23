import React from "react";
import icons from "../../utils/icons";
import { useEffect } from "react";
import { fetchAllProducts } from "../services/ProductService";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";
// import { useState } from "react";
const { BsArrowRightShort, CiEdit, BiTrash, RxDotsHorizontal, AiOutlinePlus } =
  icons;

const List = (props) => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">{props.header}</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <tr className="bg-stone-100 text-gray-400 text-left h-[64px] "></tr>
        <tbody className=""></tbody>
      </table>
    </div>
  );
};

export default List;

export const ProductList = (props) => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    // Call apis
    getProducts();
  }, []);
  const getProducts = async () => {
    let res = await fetchAllProducts();
    if (res && res.data && res.data.content) {
      setListProduct(res.data.content);
    }
  };
  // console.log(Object.keys(listProduct[0]));
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-6">
      <ButtonCustom
        util={<AiOutlinePlus size={30} />}
        styles="bg-orange-400 flex justify-center items-center text-white"
        link="add-product"
      />
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] font-semibold ">
            {/* {listProduct &&
              listProduct.length > 0 &&
              key_array.map((item) => {
                return (
                  <td className=" h-[64px] p-[25px] text-center">{item}</td>
                );
              })}
          </tr> */}
            <td className=" h-[64px] p-[25px] text-center">ID</td>
            <td className=" h-[64px] p-[25px] text-center">Image</td>
            <td className=" h-[64px] p-[25px] text-center">Name</td>
            <td className=" h-[64px] p-[25px] text-center">Price</td>
            <td className=" h-[64px] p-[25px] text-center">Quantity</td>
            <td className=" h-[64px] p-[25px] text-center">Brand</td>
            <td className=" h-[64px] p-[25px] text-center">Film</td>
            <td className=" h-[64px] p-[25px] text-center">Description</td>
            <td className=" h-[64px] p-[25px] text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {listProduct &&
            listProduct.length > 0 &&
            listProduct.map((item, index) => {
              return (
                <tr
                  className=" h-[64px] border-b-[1px] border-b-slate-200"
                  key={`product-${index}`}
                >
                  <td className="w-auto text-center">{item.id}</td>
                  <td className="w-auto ">
                    <img
                      src={item.image}
                      alt={item.id}
                      className="object-contain h-20 w-full"
                    ></img>
                  </td>
                  <td className="w-auto ">{item.name}</td>
                  <td className="w-auto text-center">{item.price}</td>
                  <td className="w-auto text-center">{item.quantity}</td>
                  <td className="w-auto text-center">{item.brand}</td>
                  <td className="w-auto text-center">{item.film}</td>
                  <td className="w-auto ">{item.description}</td>
                  <td className="w-auto text-center ">
                    <a href="/#" className="text-blue-600">
                      <CiEdit
                        className="inline-block mr-3 cursor-pointer"
                        size={20}
                      />
                    </a>
                    <a href="/#" className="text-red-500">
                      <BiTrash
                        className="inline-block mr-3 cursor-pointer"
                        size={20}
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const BestSellerList = (props) => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    // Call apis
    getProducts();
  }, []);
  const getProducts = async () => {
    let res = await fetchAllProducts();
    if (res && res.data && res.data.content) {
      setListProduct(res.data.content);
    }
  };
  // console.log(Object.keys(listProduct[0]));
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">Best Sellers</div>
        <div className="w-[63px] flex items-center">
          <a
            href="/product"
            className="flex items-center text-[14px] font-semibold font-sans cursor-pointer"
          >
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </a>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] font-semibold ">
            {/* {listProduct &&
              listProduct.length > 0 &&
              key_array.map((item) => {
                return (
                  <td className=" h-[64px] p-[25px] text-center">{item}</td>
                );
              })}
          </tr> */}
            <td className=" h-[64px] p-[25px] text-center">ID</td>
            <td className=" h-[64px] p-[25px] text-center">Image</td>
            <td className=" h-[64px] p-[25px] text-center">Name</td>
            <td className=" h-[64px] p-[25px] text-center">Price</td>
            <td className=" h-[64px] p-[25px] text-center">Brand</td>
            <td className=" h-[64px] p-[25px] text-center">Film</td>
          </tr>
        </thead>
        <tbody>
          {listProduct &&
            listProduct.length > 0 &&
            listProduct.map((item, index) => {
              return (
                <tr
                  className=" h-[64px] border-b-[1px] border-b-slate-200"
                  key={`product-${index}`}
                >
                  <td className="w-auto text-center">{item.id}</td>
                  <td className="w-auto ">
                    <img
                      src={item.image}
                      alt={item.id}
                      className="object-contain h-20 w-full"
                    ></img>
                  </td>
                  <td className="w-auto ">{item.name}</td>
                  <td className="w-auto text-center">{item.price}</td>
                  <td className="w-auto text-center">{item.brand}</td>
                  <td className="w-auto text-center">{item.film}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const FilmList = () => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">Film List</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] "></tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export const CustomerList = (data) => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">{data.header}</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] "></tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
