import React from "react";
import { useParams } from "react-router-dom";

const CustomerDetail = () => {
  const { id } = useParams();
  return <div>Customer Detail</div>;
};

export default CustomerDetail;
