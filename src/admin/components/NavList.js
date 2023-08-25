import React from "react";
import ButtonCustom from "./ButtonCustom";

const NavList = () => {
  const background =
    "bg-slate-300 text-gray-600 border border-gray-400 shadow-lg";
  return (
    <div className="flex gap-3 mb-6 ">
      <ButtonCustom util="Product List" styles={background} link="product" />
      <ButtonCustom util="Film List" styles={background} link="films" />
      <ButtonCustom util="Brand List" styles={background} link="brands" />
    </div>
  );
};

export default NavList;
