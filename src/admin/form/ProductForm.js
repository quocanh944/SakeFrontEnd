import React from "react";
// import Avatar from "../components/Avatar";
import { useState } from "react";
import ButtonCustom from "../components/ButtonCustom";
import { useEffect } from "react";
import { createProduct } from "../services/ProductService";
import { useRef } from "react";
import defaultImg from "../../assets/images.png";

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
  useEffect(() => {
    return () => {
      image && URL.revokeObjectURL(image.preview);
    };
  }, [image]);
  const handlePreviewImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
    console.log(URL.createObjectURL(file));
    setPath(file.preview);
  };
  const saveProduct = async () => {
    const formData = new FormData();
    formData.append();
  };

  //   const product = { nameProduct, description, price, quantity };
  //   let res = await createProduct(product);
  //   console.log(res);
  //   // console.log(product);
  //   // createProduct(product)
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });
  // };
  return (
    <div>
      <form
        action=""
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
              >
                <option selected>Film</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="border-b-[2px] ">
              <select
                className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:ring-0 "
                name="brand_product"
              >
                <option selected>Brand</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
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
          onClick={() => saveProduct()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
