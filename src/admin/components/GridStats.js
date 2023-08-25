import React from "react";
import Box from "./Box";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllStatistic } from "../services/StatisticService";
import { IoBagHandle } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import icons from "../../utils/icons";

const { LuShoppingBag, BiUser } = icons;

const GridStats = () => {
  const size = "text-2xl text-white";
  const [statistic, setStatistic] = useState([]);
  useEffect(() => {
    getStatistic();
  }, []);
  const getStatistic = async () => {
    let res = await fetchAllStatistic();
    if (res && res.data) {
      // console.log(res);
      setStatistic(res.data);
    }
  };
  return (
    <>
      <div className="flex">
        <Box
          name="Renevue"
          amount={statistic.totalRevenue}
          update=""
          color="bg-blue-500"
          icons={<BsCashCoin className={size} />}
        />
      </div>
      <div className="flex">
        <Box
          name="Orders"
          amount={statistic.numberOfOrder}
          update=""
          color="bg-red-500"
          icons={<IoBagHandle className={size} />}
        />
      </div>
      <div className="flex">
        <Box
          name="Visitors"
          amount={statistic.numberOfUser}
          update=""
          color="bg-orange-500"
          icons={<BiUser className={size} />}
        />
      </div>
      <div className="flex">
        <Box
          name="Sold Out"
          amount={statistic.numberOfSoldProduct}
          update=""
          color="bg-green-500"
          icons={<LuShoppingBag className={size} />}
        />
      </div>
    </>
  );
};

export default GridStats;
