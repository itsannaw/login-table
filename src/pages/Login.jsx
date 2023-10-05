import { Button, Link as LinkBase, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-[130px] gap-[20px] border border-sky-950 p-[50px] rounded-lg shadow-lg shadow-blue-500/50">
      <span className="text-[40px] text-center font-weight font-semibold">
        Login
      </span>
      <TextField name="email" type="email" id="outlined-basic" label="Email" />
      <TextField
        name="password"
        type="password"
        id="outlined-basic"
        label="Password"
      />
      <Button
        size="large"
        variant="contained"
        onClick={() => navigate("admin-table")}
      >
        Log In
      </Button>

      <LinkBase className="text-center">
        <Link to="/registration">Don`t have an account? Register here.</Link>
      </LinkBase>
    </div>
  );
};

export default Login;
