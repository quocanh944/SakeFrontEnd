import React from "react";
import icons from "../../utils/icons";
const { BsArrowRightShort } = icons;

const TABLE_HEAD = ["Product", "Price", "Sold", "Profit"];
const TABLE_ROWS = [
  {
    product: "decor",
    price: "$23.42",
    sold: "293",
    profit: "$1928.25",
  },
  {
    product: "decor",
    price: "$23.42",
    sold: "293",
    profit: "$1928.25",
  },
  {
    product: "decor",
    price: "$23.42",
    sold: "293",
    profit: "$1928.25",
  },
  {
    product: "decor",
    price: "$23.42",
    sold: "293",
    profit: "$1928.25",
  },
];

const ListBestSeller = () => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">Best Sellers</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <tr className="bg-stone-100 text-gray-400 text-left h-[64px] ">
          {TABLE_HEAD.map((head) => (
            <td className=" h-[64px] p-[15px]">{head}</td>
          ))}
        </tr>
        <tbody className="">
          {TABLE_ROWS.map((data, index) => {
            return (
              <tr
                className=" h-[64px] border-b-[1px] border-b-slate-200"
                key={index}
              >
                <td className="w-[70%] p-[15px] ">{data.product}</td>
                <td className="w-auto p-[15px]">{data.price}</td>
                <td className="w-auto p-[15px]">{data.sold}</td>
                <td className="w-auto p-[15px]">{data.profit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListBestSeller;
