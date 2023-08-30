import axios from "./AxiosCustom";
const fetchAllProducts = (page) => {
  return axios.get(
    `api/products?page=${page}&size=6&sort=ASC

  `
  );
};

export { fetchAllProducts };
const token = localStorage.getItem("token");
const fetchBestSeller = () => {
  return axios.get(`api/products/best-seller?amount=6`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { fetchBestSeller };

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

const deleteProduct = (id) => {
  return axios.delete(`api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export { deleteProduct };
