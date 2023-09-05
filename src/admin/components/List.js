import React from "react";
import icons from "../../utils/icons";
import { useEffect } from "react";
import {
  deleteProduct,
  fetchAllProducts,
  fetchBestSeller,
} from "../services/ProductService";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";
import Pagination from "./Pagination";
import { deleteFilm, fetchAllFilms } from "../services/FilmService";
import { deleteBrand, fetchAllBrands } from "../services/BrandService";
import { fetchAllOrders } from "../services/OrderService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchAllUsers } from "../services/UserService";
import {
  ModalAddBrand,
  ModalAddFilm,
  ModalEditBrand,
  ModalEditFilm,
} from "./Modal";
// import { useState } from "react";
const { BsArrowRightShort, CiEdit, BiTrash, AiOutlinePlus } = icons;

export const ProductList = () => {
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

  const handleDelete = async (id) => {
    let res = await deleteProduct(id);
    if (res) {
      window.location.reload();
      toast.success(`Delete product #${id} is succeed!`);
    } else {
      toast.error("Delete failed!");
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
                    <Link
                      to={`/edit-product/${item.id}`}
                      className="text-blue-600"
                    >
                      <CiEdit
                        className="inline-block mr-3 cursor-pointer"
                        size={20}
                      />
                    </Link>
                    <a
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500"
                    >
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
    if (res && res.data) {
      setListProduct(res.data);
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
            <td className=" h-[64px] p-[25px] text-center">Sold</td>
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
                      src={item.product.image}
                      alt={item.product.name}
                      className="object-contain h-20 w-full"
                    ></img>
                  </td>
                  <td className="w-auto ">{item.product.name}</td>
                  <td className="w-auto text-center">{item.product.price}</td>
                  <td className="w-auto text-center">{item.quantity}</td>
                  {/* <td className="w-auto text-center">
                    {item.product.brand ? item.brand.name : ""}
                  </td>
                  <td className="w-auto text-center">{item.film.name}</td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export const FilmList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [listFilm, setListFilm] = useState([]);
  const [dataFilm, setDataFilm] = useState("");
  useEffect(() => {
    getFilms();
  }, []);
  const getFilms = async () => {
    let res = await fetchAllFilms();
    if (res && res.data) {
      setListFilm(res.data);
    }
  };
  const handleOnClose = () => {
    setShowModal(false);
    setShowModalEdit(false);
  };
  const handleDelete = async (id) => {
    let res = await deleteFilm(id);
    if (res) {
      toast.success(`Delete film #${id} is succeed!`);
      window.location.reload();
    } else {
      toast.error("Delete is failed!");
    }
  };
  const handleUpdate = (film) => {
    setDataFilm(film);
    setShowModalEdit(true);
  };

  return (
    <div className="w-[50%] max-h-[800px] bg-white h-auto shadow-lg flex mx-auto my-0 flex-col rounded-2xl p-8 gap-3">
      <div className="flex justify-between ">
        <div className="font-medium flex items-center text-xl">Film List</div>
        <div className="w-auto flex-col items-center">
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <AiOutlinePlus size={30} />
          </button>
        </div>
      </div>
      <div className="max-h-[600px] overflow-y-auto block">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="bg-stone-100 text-gray-400 text-left  ">
              <td className="  p-[25px] text-center">ID</td>
              <td className="  p-[25px] text-center">Name</td>
              <td className="  p-[25px] text-center">Action</td>
            </tr>
          </thead>
          <tbody className="h-[600px]">
            {listFilm &&
              listFilm.length > 0 &&
              listFilm.map((item, index) => {
                return (
                  <tr
                    className=" border-b-[1px] border-b-slate-200"
                    key={`film-${index}`}
                  >
                    <td className="w-auto text-center">{item.id}</td>
                    <td className="w-auto text-center">{item.name}</td>
                    <td className="w-auto text-center ">
                      <a
                        onClick={() => handleUpdate(item)}
                        className="text-blue-600"
                      >
                        <CiEdit
                          className="inline-block mr-3 cursor-pointer"
                          size={20}
                        />
                      </a>
                      <a
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500"
                      >
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
      <ModalAddFilm showModal={showModal} onClose={handleOnClose} />
      <ModalEditFilm
        showModal={showModalEdit}
        onClose={handleOnClose}
        dataFilm={dataFilm}
      />
    </div>
  );
};

export const BrandList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [listBrand, setListBrand] = useState([]);
  const [dataBrand, setDataBrand] = useState("");
  useEffect(() => {
    getBrands();
  }, []);
  const getBrands = async () => {
    let res = await fetchAllBrands();
    if (res && res.data) {
      setListBrand(res.data);
    }
  };
  const handleOnClose = () => {
    setShowModal(false);
    setShowModalEdit(false);
  };
  const handleDelete = async (id) => {
    let res = await deleteBrand(id);
    if (res) {
      toast.success(`Delete product #${id} is succeed!`);
      window.location.reload();
    } else {
      toast.error("Delete failed!");
    }
  };
  const handleUpdate = (brand) => {
    setShowModalEdit(true);
    setDataBrand(brand);
  };
  return (
    <div className="w-[50%] max-h-[800px] bg-white h-auto shadow-lg flex mx-auto my-0 flex-col rounded-2xl p-8 gap-3">
      <div className="flex justify-between ">
        <div className="font-medium flex items-center text-xl">Brand List</div>
        <div className="w-auto flex-col items-center">
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <AiOutlinePlus size={30} />
          </button>
        </div>
      </div>
      <div className="max-h-[600px] overflow-y-auto block">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="bg-stone-100 text-gray-400 text-left  ">
              <td className="  p-[25px] text-center">ID</td>
              <td className="  p-[25px] text-center">Name</td>
              <td className="  p-[25px] text-center">Action</td>
            </tr>
          </thead>
          <tbody className="h-[600px] ">
            {listBrand &&
              listBrand.length > 0 &&
              listBrand.map((item, index) => {
                return (
                  <tr
                    className="  border-b-[1px] border-b-slate-200"
                    key={`brand-${index}`}
                  >
                    <td className="w-auto text-center">{item.id}</td>
                    <td className="w-auto text-center">{item.name}</td>
                    <td className="w-auto text-center ">
                      <a
                        onClick={() => handleUpdate(item)}
                        className="text-blue-600"
                      >
                        <CiEdit
                          className="inline-block mr-3 cursor-pointer"
                          size={20}
                        />
                      </a>
                      <a
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500"
                      >
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
      <ModalAddBrand showModal={showModal} onClose={handleOnClose} />
      <ModalEditBrand
        showModal={showModalEdit}
        onClose={handleOnClose}
        dataBrand={dataBrand}
      />
    </div>
  );
};

export const OrderList = () => {
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

  const paginateFront = () => {
    getOrders(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    getOrders(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-4">
      <div className="font-medium flex items-center text-xl">Order List</div>
      <table className="w-full h-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left  font-semibold ">
            <td className="  p-[25px] text-center">ID</td>
            <td className="  p-[25px] text-center">Name</td>

            <td className="  p-[25px] text-center">Address</td>
            <td className="  p-[25px] text-center">Quantity</td>
            <td className="  p-[25px] text-center">Price</td>
            <td className="  p-[25px] text-center">Date Created</td>
            <td className="  p-[25px] text-center">Status</td>
            <td className="  p-[25px] text-center">Action</td>
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
                  <td className="w-auto text-center">{item.id}</td>
                  <td className="w-auto text-center">{item.name}</td>
                  <td className="w-auto ">{item.address}</td>
                  <td className="w-auto text-center">
                    {item.orderDetailList.length}
                  </td>
                  <td className="w-auto text-center">{item.total}</td>
                  <td className="w-auto text-center">{item.created_date}</td>
                  <td className="w-auto text-center"></td>
                  <td className="w-auto text-center ">
                    <Link to={`/order/${item.id}`} className="text-blue-600">
                      <CiEdit
                        className="inline-block mr-3 cursor-pointer"
                        size={20}
                      />
                    </Link>
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
export const CustomerList = () => {
  const [listUser, setListUser] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalpages, setTotalPages] = useState();
  const [size] = useState(6);
  useEffect(() => {
    // Call apis
    getUsers(0);
  }, []);
  const getUsers = async (page) => {
    let res = await fetchAllUsers(page);
    // console.log(res);
    if (res && res.data && res.data.content) {
      setListUser(res.data.content);
      setTotalPages(res.data.totalPages);
      setTotalUsers(res.data.totalElements);
      // console.log(res.data.totalElements);
    }
  };
  const paginateFront = () => {
    getUsers(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = () => {
    getUsers(currentPage - 1);
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">User List</div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] font-semibold ">
            <td className=" h-[64px] p-[25px] text-center">ID</td>
            <td className=" h-[64px] p-[25px] text-center">Name</td>
            <td className=" h-[64px] p-[25px] text-center">Avatar</td>
            <td className=" h-[64px] p-[25px] text-center">Fullname</td>
            <td className=" h-[64px] p-[25px] text-center">PhoneNumber</td>
            <td className=" h-[64px] p-[25px] text-center">TotalOrders</td>
            <td className=" h-[64px] p-[25px] text-center">Date Created</td>
            <td className=" h-[64px] p-[25px] text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr
                  className=" h-[64px] border-b-[1px] border-b-slate-200"
                  key={`order-${index}`}
                >
                  <td className="w-auto text-center">{item.id}</td>
                  <td className="w-auto text-center">{item.email}</td>
                  <td className="w-auto text-center">
                    {item.avatar || "Updating... "}
                  </td>
                  <td className="w-auto ">{item.fullName || "Updating... "}</td>
                  <td className="w-auto text-center">
                    {item.phoneNumber || "Updating... "}
                  </td>
                  <td className="w-auto text-center">
                    {item.orderDTO.length || "Updating... "}
                  </td>
                  <td className="w-auto text-center">
                    {item.created_date || "Updating... "}
                  </td>
                  <td className="w-auto text-center ">
                    <Link
                      to={`/customer/${item.id}`}
                      className="bg-orange-300 hover:bg-orange-700 hover:text-orange-200 text-orange-500  font-bold py-1 px-4 rounded-lg"
                    >
                      {/* <CiEdit
                        className="inline-block mr-3 cursor-pointer"
                        size={20}
                      /> */}
                      Detail
                    </Link>
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
        totalItems={totalUsers}
      />
    </div>
  );
};

export const OrderPusrchased = (props) => {
  const [listProduct, setListProduct] = useState(props.order);
  useEffect(() => {
    setListProduct(props.order);
  }, [props.order]);
  return (
    <div className="w-full bg-orange-100 shadow-lg h-full flex flex-col rounded-2xl p-8 gap-4 ">
      <div className="font-medium flex items-center text-xl">List Order</div>
      <div className="max-h-[300px] overflow-y-auto block">
        <table className="w-full max-h-[300px]">
          <thead className="sticky top-0">
            <tr className="bg-white text-gray-500 text-left font-semibold ">
              <td className="  p-[5px] text-center">ID</td>
              <td className="  p-[5px] text-center">Quantity</td>
              <td className="  p-[5px] text-center">Price</td>
              <td className="  p-[5px] text-center">Order date</td>
              <td className="  p-[5px] text-center">Action</td>
            </tr>
          </thead>
          <tbody className="max-h-[300px] font-semibold">
            {listProduct &&
              listProduct.length > 0 &&
              listProduct.map((item, index) => {
                // console.log("Id: ", item.id);
                // console.log("Quantity: ", item.quantity);
                // console.log("Name product: ", item.product.name);
                return (
                  <tr
                    className=" h-[50px] border-b-[1px] border-b-orange-300"
                    key={`order-${index}`}
                  >
                    <td className="w-auto text-center">{item.id}</td>
                    <td className="w-auto text-center">
                      {item.orderDetailList.length}
                    </td>
                    <td className="w-auto text-center">{item.total}</td>
                    <td className="w-auto text-center">{item.created_date}</td>
                    <td className="w-auto text-center">
                      <Link
                        to={`/order/${item.id}`}
                        className="bg-orange-300 hover:bg-orange-700 hover:text-orange-200 text-orange-500  font-bold py-1 px-4 rounded-lg"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ProductsOfOrder = (props) => {
  const { products } = props;
  const style = "w-auto text-center";
  const [listProduct, setListProduct] = useState(products);
  useEffect(() => {
    setListProduct(products);
  }, [products]);
  listProduct.map((item, index) => {
    console.log(item);
  });
  return (
    <div className="col-span-2 h-full">
      <div className={props.styles}>Products</div>
      <div className="w-full max-h-[400px] overflow-y-auto block bg-gray-100 shadow-lg p-4 font-semibold">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="bg-stone-100 text-gray-400 text-left font-semibold ">
              <td className="p-[15px] text-center">Image</td>
              <td className="p-[15px] text-center">Name</td>
              <td className="p-[15px] text-center">Quantity</td>
              <td className="p-[15px] text-center">Price</td>
            </tr>
          </thead>
          <tbody className="max-h-[400px] ">
            {listProduct &&
              listProduct.length > 0 &&
              listProduct.map((item, index) => {
                return (
                  <tr
                    className="  border-b-[2px] border-b-slate-200"
                    key={`brand-${index}`}
                  >
                    <td className={style}>
                      <img
                        src={item.product.image}
                        alt=""
                        className="object-contain h-[90px] w-full"
                      ></img>
                    </td>
                    <td className={style}>{item.product.name}</td>
                    <td className={style}>{item.quantity}</td>
                    <td className={style}>{item.total}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
