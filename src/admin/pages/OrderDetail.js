import React from "react";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  return <div>Order Detail</div>;
};

export default OrderDetail;
