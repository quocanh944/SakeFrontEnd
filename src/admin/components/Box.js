import React from "react";
import { IoBagHandle } from "react-icons/io5";

const Box = (props) => {
  return (
    <div className="box w-[280px] h-[108px] bg-white bg-opacity-30  rounded-lg shadow-lg flex ">
      <div className="box__detail flex items-center justify-center p-4">
        <div className="flex items-center justify-center bg-sky-500 rounded-full h-12 w-12">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="flex flex-col p-4 ">
          <div className="box__detail__name text-lg text-gray-400 font-semibold">
            {props.name}
          </div>
          <div className="box__detail__amount font-bold text-2xl ">
            {props.amount}
            <span className="text-green-300 text-lg ml-2">
              + {props.update}
            </span>
          </div>
        </div>
      </div>
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
