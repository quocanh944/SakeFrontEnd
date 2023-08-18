import React from "react";
import Box, { BoxSpecial } from "../components/Box";
import List from "../components/List";
import ListBestSeller from "../components/ListBestSeller";
import BarStats from "../components/BarStats";
import { useState } from "react";
import { UserData } from "../../utils/UserData.js";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        labels: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <Box name="Renevue" amount="$7,825" />
        </div>
        <div className="flex">
          <Box name="Orders" amount="920" />
        </div>
        <div className="flex">
          <Box name="Visitors" amount="15.5K" />
        </div>
        <div className="flex">
          <Box name="Conversion" amount="28%" />
        </div>
      </div>
      <div className="mt-[50px] flex justify-between">
        <div className="p-[36px] w-[70%] bg-white bg-opacity-30 rounded-lg shadow-lg">
          <BarStats chartData={userData} />
        </div>
        <div className="">
          <BoxSpecial name="cart" />
        </div>
      </div>
      <div className="mt-[50px]">
        <List header="Best Sellers" />
      </div>
      <div className="mt-[50px]">
        <List header="Orders Recent" />
      </div>
    </div>
  );
};

export default Dashboard;
