import axios from "./AxiosCustom";
const fetchAllFilms = () => {
  return axios.get("api/films");
};
export { fetchAllFilms };

const addFilm = (name) => {
  return axios.post(`api/films`, { name });
};
export { addFilm };
