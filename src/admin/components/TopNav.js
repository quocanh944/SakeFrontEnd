import React from "react";
import DropdownComponent from "./DropdownComponent";

const TopNav = (props) => {
  return (
    <>
      <header className="flex justify-between">
        <div className="flex items-center font-semibold text-[24px]">
          {props.name}
        </div>
        <DropdownComponent />
      </header>
    </>
  );
};

export default TopNav;
