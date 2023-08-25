import axios from "./AxiosCustom";

const fetchAllUsers = () => {
  return axios.get("api/user");
};

export { fetchAllUsers };
