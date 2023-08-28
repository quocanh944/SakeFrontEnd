import axios from "./AxiosCustom";

const LoginApi = (email, password) => {
  return axios.post("api/auth/login", { email, password });
  // .catch(function (error) {
  //   console.log(error.toJSON());
  // });
};
export { LoginApi };
