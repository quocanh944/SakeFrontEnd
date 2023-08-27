import axios from "./AxiosCustom";
const token = localStorage.getItem("token");
const fetchAllStatistic = () => {
  return axios.get("api/statistic", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { fetchAllStatistic };
