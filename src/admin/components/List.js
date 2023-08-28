import React from "react";
import icons from "../../utils/icons";
import { useEffect } from "react";
import { fetchAllProducts, fetchBestSeller } from "../services/ProductService";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";
import Pagination from "./Pagination";
import { fetchAllFilms } from "../services/FilmService";
import { fetchAllBrands } from "../services/BrandService";
import { fetchAllOrders } from "../services/OrderService";
// import { useState } from "react";
const { BsArrowRightShort, CiEdit, BiTrash, AiOutlinePlus } = icons;

export const ProductList = (props) => {
  const [listProduct, setListProduct] = useState([]);
  const [totalpages, setTotalPages] = useState();
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [size] = useState(6);

  useEffect(() => {
    // Call apis
    getProducts(0);
  }, []);
  const getProducts = async (page) => {
    let res = await fetchAllProducts(page);
    if (res && res.data && res.data.content) {
      setListProduct(res.data.content);
      setTotalPages(res.data.totalPages);
      setTotalProducts(res.data.totalElements);
    }
  };
  const paginateFront = () => {
    getProducts(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    getProducts(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="w-full bg-white shadow-lg h-[780px] flex flex-col rounded-2xl p-8 gap-4">
      <div className="flex justify-between ">
        <div className="font-medium flex items-center text-xl">
          Product List
        </div>
        <div className="w-auto flex-col items-center">
          <ButtonCustom
            util={<AiOutlinePlus size={30} />}
            styles="bg-orange-400 flex justify-center items-center text-white"
            link="add-product"
          />
          {/* <span>Add New Film</span> */}
        </div>
      </div>
      <table className="w-full h-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] font-semibold ">
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
                      src={item.medias[0].url}
                      alt={item.id}
                      className="object-contain h-20 w-full"
                    ></img>
                  </td>
                  <td className="w-auto ">{item.name}</td>
                  <td className="w-auto text-center">{item.price}</td>
                  <td className="w-auto text-center">{item.quantity}</td>
                  <td className="w-auto text-center">
                    {item.brand ? item.brand.name : ""}
                  </td>
                  <td className="w-auto text-center">{item.film.name}</td>
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
      <Pagination
        handlePageFront={paginateFront}
        handlePageBack={paginateBack}
        currentPage={currentPage}
        size={size}
        totalItems={totalProducts}
      />
    </div>
  );
};

export const BestSellerList = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    // Call apis
    getProducts();
  }, []);
  const getProducts = async () => {
    let res = await fetchBestSeller();
    if (res && res.data && res.data.content) {
      setListProduct(res.data.content);
    }
  };
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
                  className=" h-[64px] border-b-[1px] border-b-slate-200 "
                  key={`product-${index}`}
                >
                  <td className="w-auto ">
                    <img
                      src={item.medias[0].url}
                      alt={item.id}
                      className="object-contain h-20 w-full"
                    ></img>
                  </td>
                  <td className="w-auto ">{item.name}</td>
                  <td className="w-auto text-center">{item.price}</td>
                  <td className="w-auto text-center">
                    {item.brand ? item.brand.name : ""}
                  </td>
                  <td className="w-auto text-center">{item.film.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const FilmList = () => {
  const [listFilm, setListFilm] = useState([]);
  useEffect(() => {
    getFilms();
  }, []);
  const getFilms = async () => {
    let res = await fetchAllFilms();
    if (res && res.data) {
      setListFilm(res.data);
    }
  };

  return (
    <div className="w-[50%] bg-white h-auto shadow-lg flex mx-auto my-0 flex-col rounded-2xl p-8 gap-3 overflow-y-auto">
      <div className="flex justify-between ">
        <div className="font-medium flex items-center text-xl">Film List</div>
        <div className="w-auto flex-col items-center">
          <ButtonCustom
            util={<AiOutlinePlus size={30} />}
            styles="bg-orange-400 flex justify-center items-center text-white"
            link="add-film"
          />
          {/* <span>Add New Film</span> */}
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] ">
            <td className=" h-[64px] p-[25px] text-center">ID</td>
            <td className=" h-[64px] p-[25px] text-center">Name</td>
          </tr>
        </thead>
        <tbody>
          {listFilm &&
            listFilm.length > 0 &&
            listFilm.map((item, index) => {
              return (
                <tr
                  className=" h-[64px] border-b-[1px] border-b-slate-200"
                  key={`film-${index}`}
                >
                  <td className="w-auto text-center">{item.id}</td>
                  <td className="w-auto text-center">{item.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const BrandList = () => {
  const [listBrand, setListBrand] = useState([]);
  useEffect(() => {
    getBrands();
  }, []);
  const getBrands = async () => {
    let res = await fetchAllBrands();
    if (res && res.data) {
      setListBrand(res.data);
    }
  };
  return (
    <div className="w-[50%] bg-white h-auto shadow-lg flex mx-auto my-0 flex-col rounded-2xl p-8 gap-3 overflow-y-auto">
      <div className="flex justify-between ">
        <div className="font-medium flex items-center text-xl">Brand List</div>
        <div className="w-auto flex-col items-center">
          <ButtonCustom
            util={<AiOutlinePlus size={30} />}
            styles="bg-orange-400 flex justify-center items-center text-white"
            link="add-brand"
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] ">
            <td className=" h-[64px] p-[25px] text-center">ID</td>
            <td className=" h-[64px] p-[25px] text-center">Name</td>
          </tr>
        </thead>
        <tbody>
          {listBrand &&
            listBrand.length > 0 &&
            listBrand.map((item, index) => {
              return (
                <tr
                  className=" h-[64px] border-b-[1px] border-b-slate-200"
                  key={`brand-${index}`}
                >
                  <td className="w-auto text-center">{item.id}</td>
                  <td className="w-auto text-center">{item.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const OrderList = (props) => {
  const [listOrder, setListOrder] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalpages, setTotalPages] = useState();
  const [size] = useState(6);
  useEffect(() => {
    // Call apis
    getOrders(0);
  }, []);
  const getOrders = async (page) => {
    let res = await fetchAllOrders(page);
    if (res && res.data && res.data.content) {
      setListOrder(res.data.content);
      setTotalPages(res.data.totalPages);
      setTotalOrders(res.data.totalElements);
    }
  };
  // console.log(listOrder[0].orderDetailList.length);
  // const pageNumbers = [];
  // for (let i = 0; i < totalpages; i++) {
  //   pageNumbers.push(i);
  // }

  const paginateFront = () => {
    getOrders(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    getOrders(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="w-full bg-white shadow-lg h-[756px] flex flex-col rounded-2xl p-8 gap-4">
      <div className="font-medium flex items-center text-xl">Order List</div>
      <table className="w-full h-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] font-semibold ">
            <td className=" h-[64px] p-[25px] text-center">Name</td>
            <td className=" h-[64px] p-[25px] text-center">Address</td>
            <td className=" h-[64px] p-[25px] text-center">Quantity</td>
            <td className=" h-[64px] p-[25px] text-center">Price</td>
            <td className=" h-[64px] p-[25px] text-center">Date Created</td>
            <td className=" h-[64px] p-[25px] text-center">Status</td>
            <td className=" h-[64px] p-[25px] text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {listOrder &&
            listOrder.length > 0 &&
            listOrder.map((item, index) => {
              return (
                <tr
                  className=" h-[64px] border-b-[1px] border-b-slate-200"
                  key={`order-${index}`}
                >
                  <td className="w-auto text-center">{item.name}</td>
                  <td className="w-auto ">{item.address}</td>
                  <td className="w-auto text-center">
                    {item.orderDetailList.length}
                  </td>
                  <td className="w-auto text-center">{item.total}</td>
                  <td className="w-auto text-center">{item.created_date}</td>
                  <td className="w-auto text-center">{""}</td>
                  <td className="w-auto text-center ">
                    <a href="/#" className="text-blue-600">
                      <CiEdit
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
      <Pagination
        handlePageFront={paginateFront}
        handlePageBack={paginateBack}
        currentPage={currentPage}
        size={size}
        totalItems={totalOrders}
      />
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
