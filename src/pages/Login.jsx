import { Button, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { unauthorizedApi } from "../api/http";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await unauthorizedApi.post("login", {
        user: credentials,
      });
      const token = response.headers.get("Authorization");
      console.log(token, response);
      // Store the tokens in localStorage or secure cookie for later use
      Cookies.set("token", token);
      navigate("/admin-table");
      // Redirect or perform other actions upon successful login
    } catch (error) {
      // Handle login error
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
      />
      <TextField
        name="password"
        type="password"
        id="password"
        label="Password"
        required
        value={credentials.password}
        onChange={handleChange}
      />
      <Button size="large" variant="contained" onClick={handleSubmit}>
        Log In
      </Button>
      <Link className="text-[#1976d2] text-center underline" to="/registration">
        Don`t have an account? Register here.
      </Link>
    </div>
  );
};

export default Login;
