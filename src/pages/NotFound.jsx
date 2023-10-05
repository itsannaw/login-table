import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center max-w-[600px] mx-auto mt-[100px] gap-[20px] p-[50px]">
      <span className="text-[40px] text-center font-weight font-semibold">
        Houston, we have a problem...
      </span>
      <div className="flex flex-col">
        <span className="text-[65px] text-center text-blue-600 font-weight font-semibold text-shadow shadow-indigo-500/50">
          404
        </span>
        <span className="text-[40px] text-center font-weight font-semibold">
          Page not found
        </span>
      </div>
      <div className="flex justify-center mt-[15px] w-[300px] mx-auto">
        <Button size="large" onClick={() => navigate(-1)}>
          Сome back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
