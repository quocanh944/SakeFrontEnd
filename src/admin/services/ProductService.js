import axios from "./AxiosCustom";
const fetchAllProducts = (page) => {
  return axios.get(
    `api/products?page=${page}&size=6&sort=ASC

  `
  );
};

export { fetchAllProducts };

const fetchBestSeller = () => {
  return axios.get(`api/products?page=0&size=6&sort=ASC`);
};

export { fetchBestSeller };
const token = localStorage.getItem("token");
const createProduct = (product) => {
  return axios.post(`api/products`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export { createProduct };

const getProductById = (id) => {
  return axios.get(`api/products/${id}`);
};

export { getProductById };

const updateProduct = (id, product) => {
  return axios.put(`api/products/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export { updateProduct };
