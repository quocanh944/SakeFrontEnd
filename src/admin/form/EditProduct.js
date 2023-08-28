import React from "react";
// import Avatar from "../components/Avatar";
import { useState } from "react";
import ButtonCustom from "../components/ButtonCustom";
import { useEffect } from "react";
import {
  createProduct,
  getProductById,
  updateProduct,
} from "../services/ProductService";
import { useRef } from "react";
import { fetchAllFilms } from "../services/FilmService";
import defaultImg from "../../assets/images.png";
import { fetchAllBrands } from "../services/BrandService";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  //   const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    let res = await getProductById(id);
    if (res && res.data) {
      console.log(res);
      setValues({
        ...values,
        name: res.data.name,
        description: res.data.description,
        film: res.data.film.name,
        brand: res.data.brand.name,
        price: res.data.price,
        quantity: res.data.quantity,
        image: res.data.medias[0].url,
      });
    }
  };
  const [values, setValues] = useState({
    name: "",
    description: "",
    film: "",
    brand: "",
    price: "",
    quantity: "",
    image: "",
  });
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };
  //   const [name, setNameProduct] = useState();
  //   const [description, setDescription] = useState();
  //   const [price, setPrice] = useState();
  //   const [quantity, setQuantity] = useState();
  //   const [image, setImage] = useState();
  //   const [path, setPath] = useState();
  const [filmList, setFilmList] = useState();
  const [brandList, setBrandList] = useState();
  //   const [film, setFilm] = useState();
  //   const [brand, setBrand] = useState();
  useEffect(() => {
    return () => {
      values.image && URL.revokeObjectURL(values.image.preview);
    };
  }, [values.image]);
  useEffect(() => {
    getFilmList();
  }, []);
  const getFilmList = async () => {
    let res = await fetchAllFilms();
    if (res && res.data) {
      setFilmList(res.data);
    }
  };
  useEffect(() => {
    getBrandList();
  }, []);
  const getBrandList = async () => {
    let res = await fetchAllBrands();
    if (res && res.data) {
      setBrandList(res.data);
    }
  };
  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    console.log(file);
    setValues(...values, { image: file.preview });
    //  setImage(file);
    // console.log(URL.createObjectURL(file));
    //  setPath(file);
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", values.image);
    formData.append("product", JSON.stringify(values));
    console.log(formData.get("product"));
    let res = await updateProduct(id, formData);
    if (res) {
      toast.success("Update product succeed!");
      window.location.href = "/product";
    } else {
      toast.error("Update Failed");
    }
  };
  return (
    <div>
      <form
        className="w-full bg-white rounded p-8"
        encType="multipart/form-data"
      >
        <div className="text-4xl flex justify-center font-semibold">
          Add Product
        </div>
        <div className="mb-[20px] ">
          <div
            className="w-[250px] h-[220px] m-auto cursor-pointer"
            onClick={handleImageClick}
          >
            {values.image ? (
              <img
                src={values.image}
                alt=""
                className="rounded w-full h-full"
              />
            ) : (
              <img
                src={values.image.preview}
                alt=""
                className="rounded w-full h-full"
              />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handlePreviewImage}
              className="hidden"
              id="image_product"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 w-[48%]">
            <div className="border-b-[2px] ">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Name Product"
                name="name_product"
                value={values.nameProduct}
                onChange={(e) =>
                  setValues({ ...values, nameProduct: e.target.value })
                }
              ></input>
            </div>
            <div className="">
              <textarea
                className="w-full rounded-lg h-[250px]"
                placeholder="Describe about product"
                name="desc_product"
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[48%]">
            <div className="border-b-[2px] ">
              <select
                className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-0 "
                name="film_product"
                value={values.film}
                onChange={(e) => setValues({ ...values, film: e.target.value })}
              >
                <option value="" disabled selected>
                  Choose Film
                </option>
                {filmList &&
                  filmList.length > 0 &&
                  filmList.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                ;
              </select>
            </div>
            <div className="border-b-[2px] ">
              <select
                className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-0 "
                name="brand_product"
                value={values.brand}
                onChange={(e) =>
                  setValues({ ...values, brand: e.target.value })
                }
              >
                <option value="" disabled selected>
                  Choose Brand
                </option>
                {brandList &&
                  brandList.length > 0 &&
                  brandList.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                ;
              </select>
            </div>
            <div className="border-b-[2px] ">
              <input
                type="number"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Price"
                value={values.price}
                onChange={(e) =>
                  setValues({ ...values, price: e.target.value })
                }
                name="price_product"
              ></input>
            </div>
            <div className="border-b-[2px] ">
              <input
                type="number"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Quantity"
                value={values.quantity}
                onChange={(e) =>
                  setValues({ ...values, quantity: e.target.value })
                }
                name="quantity_product"
              ></input>
            </div>
          </div>
        </div>
        <button
          className="p-[5px] w-[120px] h-[50px] rounded-lg bg-green-500 mt-[5px] font-medium text-lg"
          onClick={saveProduct}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
