import React from "react";

const ButtonCustom = (props) => {
  return (
    <button
      className={
        "w-[130px] text-lg font-bold h-[50px] p-[4px] rounded-lg " +
        props.styles
      }
    >
      <a href={props.link}>{props.util}</a>
    </button>
  );
};

export default ButtonCustom;
