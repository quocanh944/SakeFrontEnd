import axios from "./AxiosCustom";
const fetchAllProducts = () => {
  return axios.get(
    `/api/products?page=0&size=9
  `
  );
};

export { fetchAllProducts };
