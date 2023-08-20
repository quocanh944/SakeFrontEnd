import React from "react";
import ButtonCustom from "../components/ButtonCustom";
const Brands = () => {
  const background =
    "bg-slate-300 text-gray-600 border border-gray-400 shadow-lg";
  return (
    <div>
      <div className="flex gap-3">
        <ButtonCustom
          util="Add product"
          styles={background}
          link="add-product"
        />
        <ButtonCustom util="Film List" styles={background} link="films" />
        <ButtonCustom util="Brand List" styles={background} link="brands" />
      </div>
      Brand List
    </div>
  );
};

export default Brands;
