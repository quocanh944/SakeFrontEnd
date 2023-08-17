import React from "react";

const Box = (props) => {
  return (
    <div className="box w-[280px] h-[108px] bg-white bg-opacity-30  rounded-lg shadow-lg flex">
      <div className="box__detail flex-1 flex flex-col justify-center items-center">
        <div className="box__detail__name ">{props.name}</div>
        <div className="box__detail__amount font-bold text-3xl">
          {props.amount}
        </div>
      </div>
      <div className="box__chart flex-1"></div>
    </div>
  );
};

export default Box;

export const BoxSpecial = (props) => {
  return (
    <div className="h-full p-[36px] w-[280px] flex flex-col justify-between bg-white bg-opacity-30 rounded-lg shadow-lg">
      <div className="font-semibold text-[20px]">{props.name}</div>
      <div></div>
      <div>
        <div className="flex justify-between">
          <div>Abandoned Cart</div>
          <div>720</div>
        </div>
        <div className="flex justify-between">
          <div>Abandoned Renevue</div>
          <div>$5.920</div>
        </div>
      </div>
    </div>
  );
};
