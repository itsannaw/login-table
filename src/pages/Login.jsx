import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-[130px] gap-[20px] border border-sky-950 p-[50px] rounded-lg shadow-lg shadow-blue-500/50">
      <span className="text-[40px] text-center font-weight font-semibold">
        Login
      </span>
      <TextField name="email" type="email" id="email" label="Email" required />
      <TextField
        name="password"
        type="password"
        id="password"
        label="Password"
        required
      />
      <Button
        size="large"
        variant="contained"
        onClick={() => navigate("admin-table")}
      >
        Log In
      </Button>

      <Link className="text-[#1976d2] text-center underline" to="/registration">
        Don`t have an account? Register here.
      </Link>
    </div>
  );
};

export default Login;
