import axios from "./AxiosCustom";

const fetchAllOrders = (page) => {
  const token = localStorage.getItem("token");
  return axios.get(`api/orders/recent?page=${page}&size=6`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { fetchAllOrders };
