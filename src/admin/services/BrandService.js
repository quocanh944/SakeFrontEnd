import axios from "./AxiosCustom";

const fetchAllBrands = () => {
  return axios.get("api/brands");
};

export { fetchAllBrands };
