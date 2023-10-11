import { TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { unauthorizedApi } from "../api/http";
import { LoadingButton } from "@mui/lab";
import DefaultErrors from "../components/DefaultErrors";

const Registration = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const newErrors = { ...errors };
    delete newErrors[e.target.name];
    setErrors(newErrors);
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();

      await unauthorizedApi.post("signup", {
        user: {
          ...forms,
        },
      });
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      if (error.response?.data.status.errors) {
        setErrors(error.response.data.status.errors);
      }
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto my-[60px] gap-[20px] border border-sky-950 p-[50px] rounded-lg shadow-lg shadow-blue-500/50">
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
        value={forms.fullName}
        onChange={handleChange}
        error={!!errors.full_name}
        required
      />
      <TextField
        name="email"
        type="email"
        id="email"
        label="Email"
        value={forms.email}
        onChange={handleChange}
        error={!!errors.email}
        required
      />
      <TextField
        name="password"
        type="password"
        id="password"
        label="Password"
        value={forms.password}
        onChange={handleChange}
        error={!!errors.password}
        required
      />
      <TextField
        name="password_confirmation"
        type="password"
        id="password_confirmation"
        label="Re-enter password"
        value={forms.passwordConfirmation}
        onChange={handleChange}
        error={!!errors.password_confirmation}
        required
      />
      <DefaultErrors errors={errors} />

      <LoadingButton
        size="large"
        variant="contained"
        method="post"
        onClick={handleSubmit}
        loading={isLoading}
      >
        Sign Up
      </LoadingButton>

      <Link className="text-[#1976d2] text-center underline" to="/">
        Already have an account? Login here.
      </Link>
    </div>
  );
};

export default Registration;
