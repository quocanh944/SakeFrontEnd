import React from "react";
import { useState } from "react";

const BillInfomation = (props) => {
  const style = "text-orange-400";
  return (
    <div>
      <div className={props.styles}>Bill Infomation</div>
      <div className="w-full h-auto bg-gray-100 shadow-lg p-4 font-semibold">
        <div>
          Guest name: <span className={style}>{props.guestName}</span>
        </div>
        <div>
          Guest address: <span className={style}>{props.guestAddress}</span>
        </div>
        <div>
          Guest phone number:{" "}
          <span className={style}>{props.guestPhoneNumber}</span>
        </div>
        <div>
          Date: <span className={style}>{props.createdDate}</span>
        </div>
      </div>
    </div>
  );
};

export default BillInfomation;
