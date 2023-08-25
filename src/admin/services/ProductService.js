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
