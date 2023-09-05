import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../components/auth";
import { toast } from "react-toastify";
import { LoginApi } from "../services/AuthService";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Email/Password is required !");
    }
    if (!email.match(mailformat)) {
      toast.warning("Email is not valid !");
    }
    try {
      let res = await LoginApi(email, password);
      let jwt_decode = jwtDecode(res.data.accessToken);
      const author = jwt_decode.role[0].authority;
      if (author === "ADMIN") {
        window.localStorage.setItem("token", res.data.accessToken);
        navigate("/");
        toast.success("Login success");
      } else {
        toast.warning("Account is not Admin");
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.warning("Email/Password is wrong");
      }
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase decoration-wavy">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
              onChange={(e) => setPassword(e.target.value)}
            >
              Password
            </label>
            <input
              value={password}
              type="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
