import { TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { unauthorizedApi } from "../api/http";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleChange = (e) => {
    setErrorText("");
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await unauthorizedApi.post("login", {
        user: credentials,
      });
      const token = response.headers.get("Authorization");
      Cookies.set("token", token);
      setIsLoading(false);
      navigate("/admin-table");
    } catch (error) {
      if (error.response?.data.error) {
        setErrorText(error.response.data.error);
      }
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-[130px] gap-[20px] border border-sky-950 p-[50px] rounded-lg shadow-lg shadow-blue-500/50">
      <span className="text-[40px] text-center font-weight font-semibold">
        Login
      </span>
      <TextField
        name="email"
        type="email"
        id="email"
        label="Email"
        required
        value={credentials.email}
        onChange={handleChange}
        error={!!errorText}
      />
      <TextField
        name="password"
        type="password"
        id="password"
        label="Password"
        required
        value={credentials.password}
        onChange={handleChange}
        error={!!errorText}
      />
      <div className="text-red-500 text-[15px] font-semibold">{errorText}</div>
      <LoadingButton
        size="large"
        variant="contained"
        onClick={handleSubmit}
        loading={isLoading}
      >
        Log In
      </LoadingButton>
      <Link className="text-[#1976d2] text-center underline" to="/registration">
        Don`t have an account? Register here.
      </Link>
    </div>
  );
};

export default Login;
