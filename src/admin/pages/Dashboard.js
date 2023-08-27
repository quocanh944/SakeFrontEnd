import React from "react";
import List, { BestSellerList, ProductList } from "../components/List";
import GridStats from "../components/GridStats";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <GridStats />
      </div>
      <div className="mt-[50px] flex justify-between"></div>
      <div className="mt-[50px]">
        <BestSellerList />
      </div>
    </div>
  );
};

export default Dashboard;
