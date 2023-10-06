import { Button, Link as LinkBase, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-[60px] gap-[20px] border border-sky-950 p-[50px] rounded-lg shadow-lg shadow-blue-500/50">
      <div className="flex flex-col text-center">
        <span className="text-[40px]  font-weight font-semibold">
          Create a new account
        </span>
        <span className="opacity-75">It’s quick and easy.</span>
      </div>
      <TextField name="name" type="text" id="name" label="Your name" required />
      <TextField
        name="email"
        type="email"
        id="outlined-basic"
        label="Email"
        required
      />
      <TextField
        name="password"
        type="password"
        id="outlined-basic"
        label="Password"
        required
      />
      <TextField
        name="password"
        type="password"
        id="outlined-basic"
        label="Re-enter password"
        required
      />
      <Button size="large" variant="contained">
        Sign Up
      </Button>
      <LinkBase href="registration" className="text-center">
        <Link to="/">Already have an account? Login here.</Link>
      </LinkBase>
    </div>
  );
};

export default Registration;
