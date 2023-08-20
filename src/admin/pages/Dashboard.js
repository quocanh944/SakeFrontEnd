import React from "react";
import Box, { BoxSpecial } from "../components/Box";
import List from "../components/List";
import ListBestSeller from "../components/ListBestSeller";
import BarStats from "../components/BarStats";
import { useState } from "react";
import { UserData } from "../../utils/UserData.js";
import GridStats from "../components/GridStats";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        labels: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        labels: "Users Lost",
        data: UserData.map((data) => data.userLost),
      },
    ],
  });
  return (
    <div>
      <div className="flex justify-between">
        <GridStats />
      </div>
      <div className="mt-[50px] flex justify-between">
        <div className="p-[36px] w-[70%] bg-white bg-opacity-30 rounded-lg shadow-lg">
          <BarStats chartData={userData} />
        </div>
        {/* <div className="">
          <BoxSpecial name="cart" />
        </div> */}
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
