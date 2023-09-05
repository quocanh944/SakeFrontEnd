import axios from "./AxiosCustom";
const token = localStorage.getItem("token");
const fetchAllOrders = (page) => {
  return axios.get(`api/orders/recent?page=${page}&size=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { fetchAllOrders };

const getOrderById = (id) => {
  return axios.get(`api/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export { getOrderById };
