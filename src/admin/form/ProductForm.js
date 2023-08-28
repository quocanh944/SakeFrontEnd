import React from "react";
// import Avatar from "../components/Avatar";
import { useState } from "react";
import ButtonCustom from "../components/ButtonCustom";
import { useEffect } from "react";
import { createProduct } from "../services/ProductService";
import { useRef } from "react";
import { fetchAllFilms } from "../services/FilmService";
import defaultImg from "../../assets/images.png";
import { fetchAllBrands } from "../services/BrandService";

const ProductForm = () => {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const [nameProduct, setNameProduct] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [image, setImage] = useState();
  const [path, setPath] = useState();
  const [filmList, setFilmList] = useState();
  const [brandList, setBrandList] = useState();
  const [film, setFilm] = useState();
  const [brand, setBrand] = useState();
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
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
    setImage(file);
    // console.log(URL.createObjectURL(file));
    setPath(file);
  };
  const saveProduct = async (e) => {
    e.preventDefault();
    const products = {
      name: nameProduct,
      price: price,
      quantity: quantity,
      desciption: description,
      film: film,
      brand: brand,
    };
    const formData = new FormData();
    formData.append("file", path);
    formData.append("product", JSON.stringify(products));
    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // console.log(formData.get("product"));
    const jsonStringtify = JSON.stringify(data);
    console.log(jsonStringtify);
    // console.log(formData.get("file"));
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
            {image ? (
              <img
                src={image.preview}
                alt=""
                className="rounded w-full h-full"
              />
            ) : (
              <img src={defaultImg} alt="" className="rounded w-full h-full" />
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
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)}
              ></input>
            </div>
            <div className="">
              <textarea
                className="w-full rounded-lg h-[250px]"
                placeholder="Describe about product"
                name="desc_product"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[48%]">
            <div className="border-b-[2px] ">
              <select
                className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-0 "
                name="film_product"
                onChange={(e) => setFilm(e.target.value)}
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
                onChange={(e) => setBrand(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="price_product"
              ></input>
            </div>
            <div className="border-b-[2px] ">
              <input
                type="number"
                className=" appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 focus:ring-0 "
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
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

export default ProductForm;
