import axios from "./AxiosCustom";
const token = localStorage.getItem("token");
const fetchAllUsers = (page) => {
  return axios.get(
    `api/user/all-user?page=${page}&size=9
  `,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export { fetchAllUsers };

const getUser = (id) => {
  return axios.get(`api/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export { getUser };
