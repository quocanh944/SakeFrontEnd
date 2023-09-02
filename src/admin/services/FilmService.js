import axios from "./AxiosCustom";
const fetchAllFilms = () => {
  return axios.get("api/films");
};
export { fetchAllFilms };
const token = localStorage.getItem("token");
const addFilm = (name) => {
  return axios.post(
    `api/films`,
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
export { addFilm };

const updateFilm = (id, name) => {
  return axios.put(
    `api/films/${id}`,
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export { updateFilm };

const deleteFilm = (id) => {
  return axios.delete(`api/films/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export { deleteFilm };

const getFilmByID = (id) => {
  return axios.get(`api/films/${id}`);
};
export { getFilmByID };
