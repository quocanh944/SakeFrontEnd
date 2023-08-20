import React from "react";
import icons from "../../utils/icons";
const { BsArrowRightShort, CiEdit, BiTrash, RxDotsHorizontal } = icons;

const TABLE_HEAD = [
  "Product",
  "QTY",
  "Dated",
  "Revenue",
  "Net Profit",
  "Status",
  "Action",
];

const TABLE_ROWS = [
  {
    product: "John Michael",
    qty: "Manager",
    date: "23/04/18",
    revenue: "231",
    netprofit: "113",
    status: "Pending",
  },
  {
    product: "Alexa Liras",
    qty: "Developer",
    date: "23/04/18",
    revenue: "123",
    netprofit: "11",
    status: "123",
  },
  {
    product: "Laurent Perrier",
    qty: "Executive",
    date: "19/09/17",
    revenue: "123",
    netprofit: "asd",
    status: "1casdc",
  },
  {
    product: "Michael Levi",
    qty: "Developer",
    date: "24/12/08",
    revenue: "124",
    netprofit: "asdczx",
    status: "dsa",
  },
  {
    product: "Richard Gran",
    qty: "Manager",
    date: "04/10/21",
    revenue: "1234",
    netprofit: "asdzxc",
    status: "1234",
  },
];

const List = (props) => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">{props.header}</div>
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
            <td className=" h-[64px] p-[25px]">{head}</td>
          ))}
        </tr>
        <tbody className="">
          {TABLE_ROWS.map((data, index) => {
            return (
              <tr
                className=" h-[64px] border-b-[1px] border-b-slate-200"
                key={index}
              >
                <td className="w-[25%] p-[25px]">{data.product}</td>
                <td className="w-auto p-[25px]">{data.qty}</td>
                <td className="w-auto p-[25px]">{data.date}</td>
                <td className="w-auto p-[25px]">{data.revenue}</td>
                <td className="w-auto p-[25px]">{data.netprofit}</td>
                <td className="w-auto p-[25px]">{data.status}</td>
                <td className="w-[10%] p-[25px]">
                  <a href="/#">
                    <CiEdit
                      className="inline-block mr-3 cursor-pointer"
                      size={20}
                    />
                  </a>
                  <a href="/#">
                    <BiTrash
                      className="inline-block mr-3 cursor-pointer"
                      size={20}
                    />
                  </a>
                  <a href="/#">
                    <RxDotsHorizontal
                      className="inline-block cursor-pointer"
                      size={20}
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;

export const ProductList = () => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">Products</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] ">
            {TABLE_HEAD.map((head) => (
              <td className=" h-[64px] p-[25px]">{head}</td>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export const FilmList = () => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">Film List</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] ">
            {TABLE_HEAD.map((head) => (
              <td className=" h-[64px] p-[25px]">{head}</td>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
export const CustomerList = (data) => {
  return (
    <div className="w-full bg-white shadow-lg h-auto flex flex-col rounded-2xl p-8 gap-8">
      <div className="flex justify-between ">
        <div className="font-medium text-xl">{data.header}</div>
        <div className="w-[63px] flex items-center">
          <span className="flex items-center text-[14px] font-semibold font-sans ">
            More
            <BsArrowRightShort size={20} className="text-gray-400" />
          </span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-stone-100 text-gray-400 text-left h-[64px] ">
            {TABLE_HEAD.map((head) => (
              <td className=" h-[64px] p-[25px]">{head}</td>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
