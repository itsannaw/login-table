import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "full_name", headerName: "Full name", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "created_at", headerName: "Registration", width: 180 },
  { field: "login_at", headerName: "Login", width: 180 },
  { field: "blocked", headerName: "Status", width: 180 },
];

const AdminTable = () => {
  const [rows, setRows] = useState([]);
  const onMount = async () => {
    const { data } = await axios.get("http://localhost:3000/users");
    setRows(data);
  };

  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className="flex flex-col justify-between mx-auto">
      <div className="flex justify-end items-center gap-[50px] mr-[20px] mt-[20px]">
        <span>Hello, name!</span> <Button variant="text">Log out</Button>
      </div>
      <div className="flex flex-col justify-center border max-w-[1400px] mx-auto border-sky-950 p-[15px] mt-[30px] rounded-lg shadow-lg shadow-blue-500/50">
        <div className="flex justify-center items-center mt-[5px]">
          <span className="font-semibold text-[40px]">Admin table</span>
        </div>
        <div className="flex justify-end gap-[8px]">
          <Button color="info" startIcon={<LockIcon />}>
            Block
          </Button>
          <Button color="success" startIcon={<LockOpenIcon />}>
            Unblock
          </Button>
          <Button color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </div>
        <div
          className="flex justify-center mx-auto mt-[20px]"
          style={{ width: "100%" }}
        >
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
