import React from "react";
import Box from "./Box";

const GridStats = () => {
  return (
    <>
      <div className="flex">
        <Box name="Renevue" amount="$7,825" update="394" />
      </div>
      <div className="flex">
        <Box name="Orders" amount="920" update="394" />
      </div>
      <div className="flex">
        <Box name="Visitors" amount="15.5K" update="394" />
      </div>
      <div className="flex">
        <Box name="Conversion" amount="28%" update="394" />
      </div>
    </>
  );
};

export default GridStats;
