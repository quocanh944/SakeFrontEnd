import React from "react";

const SubSummary = (props) => {
  const style = "text-orange-400";
  return (
    <div>
      <div className={props.styles}>Sub Summary</div>
      <div className="w-full h-auto bg-gray-100 shadow-lg p-4 font-semibold">
        <div>
          Delivery fee:{" "}
          <span className={style}>{props.deliveryFee || "0"}đ</span>
        </div>
        <div>
          Subtotal: <span className={style}>{props.total}đ</span>
        </div>
      </div>
    </div>
  );
};

export default SubSummary;
