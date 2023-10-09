import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3000/signup", {
      user: {
        full_name: fullName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    });

    navigate("/");
  };

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-[60px] gap-[20px] border border-sky-950 p-[50px] rounded-lg shadow-lg shadow-blue-500/50">
      <div className="flex flex-col text-center">
        <span className="text-[40px]  font-weight font-semibold">
          Create a new account
        </span>
        <span className="opacity-75">It’s quick and easy.</span>
      </div>
      <TextField
        name="full_name"
        type="text"
        id="full_name"
        label="Your name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <TextField
        name="email"
        type="email"
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        name="password"
        type="password"
        id="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextField
        name="password_confirmation"
        type="password"
        id="password_confirmation"
        label="Re-enter password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        required
      />
      <Button
        size="large"
        variant="contained"
        method="post"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>

      <Link className="text-[#1976d2] text-center underline" to="/">
        Already have an account? Login here.
      </Link>
    </div>
  );
};

export default Registration;
