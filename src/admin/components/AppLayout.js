import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const AppLayout = () => {
  if (
    window.localStorage.getItem("token") == null &&
    window.location.pathname !== "/login"
  ) {
    window.location.href = "/login";
  }

  return (
    <div className="w-full flex ">
      <div className=" w-[144px] bg-orange-400 flex-none ">
        <Sidebar />
      </div>
      <div className="flex-auto px-[48px] py-[38px] bg-neutral-200 flex flex-col gap-4 overflow-y-auto h-screen">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
