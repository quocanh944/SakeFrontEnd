import axios from "./AxiosCustom";

const fetchAllBrands = () => {
  return axios.get("api/brands");
};

export { fetchAllBrands };

const token = localStorage.getItem("token");
const updateBrand = (id) => {
  return axios.put(`api/brands/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export { updateBrand };

const deleteBrand = (id) => {
  return axios.delete(`api/brands/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export { deleteBrand };
