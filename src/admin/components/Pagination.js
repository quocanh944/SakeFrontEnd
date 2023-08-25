import React from "react";
import icons from "../../utils/icons";
const { IoIosArrowForward, IoIosArrowBack } = icons;
export default function Pagination(props) {
  return (
    <>
      <div className="py-2">
        <div className="mb-1">
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium">
              {" "}
              {props.currentPage * props.size}{" "}
            </span>
            to
            <span className="font-medium">
              {" "}
              {props.currentPage * props.size + props.size <= props.totalItems
                ? props.currentPage * props.size + props.size
                : props.totalItems}{" "}
            </span>
            of
            <span className="font-medium"> {props.totalItems} </span>
            results
          </p>
        </div>
        <nav className="block"></nav>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              onClick={() => {
                props.handlePageBack();
              }}
              className={
                props.currentPage === 0
                  ? "hidden "
                  : "relative inline-flex items-center px-4 py-2 rounded-l-md bg-white text-lg font-medium text-gray-500 hover:bg-gray-100 cursor-pointer"
              }
            >
              <span>
                <IoIosArrowBack />
              </span>
            </a>

            <a
              onClick={() => {
                props.handlePageFront();
              }}
              className={
                props.currentPage * props.size + 6 >= props.totalItems
                  ? "hidden"
                  : "relative inline-flex items-center px-4 py-2 rounded-l-md bg-white text-lg font-medium text-gray-500 hover:bg-gray-100 cursor-pointer"
              }
            >
              <span>
                <IoIosArrowForward />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
