import { Button, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect, useState } from "react";
import api from "../api/http";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import getDateTime from "../components/GetDateTime";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "full_name", headerName: "Full name", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "created_at",
    headerName: "Registration",
    width: 180,
    renderCell: (params) => <>{getDateTime(params.value)}</>,
  },
  {
    field: "login_at",
    headerName: "Login",
    width: 180,
    renderCell: (params) => (
      <>{params.value ? getDateTime(params.value) : "Was not logged yet"}</>
    ),
  },
  {
    field: "blocked",
    headerName: "Status",
    width: 180,
    renderCell: (params) => (
      <>
        {params.value ? (
          <span className="text-red-700">Blocked</span>
        ) : (
          <span className="text-green-800">Not blocked</span>
        )}
      </>
    ),
  },
];

const AdminTable = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();
  const onMount = async () => {
    setIsLoading(true);
    const { data } = await api.get("users");

    setRows(data);
    setIsLoading(false);
  };

  useEffect(() => {
    onMount();
  }, []);

  const logout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const onSelection = (ids) => {
    setSelectedIds(ids);
  };

  const onBlock = async () => {
    try {
      const { data } = await api.post("users/block", {
        users_ids: selectedIds,
      });
      setRows(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const onUnblock = async () => {
    try {
      const { data } = await api.post("users/unblock", {
        users_ids: selectedIds,
      });
      setRows(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onDelete = async () => {
    try {
      const { data } = await api.post("users/delete", {
        users_ids: selectedIds,
      });
      setRows(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-between mx-auto">
      <div className="flex justify-end items-center gap-[50px] mr-[20px] mt-[20px]">
        <span>Hello, name!</span>{" "}
        <LoadingButton variant="text" onClick={logout}>
          Log out
        </LoadingButton>
      </div>
      <div className="flex flex-col justify-center border max-w-[1400px] mx-auto border-sky-950 p-[15px] mt-[30px] rounded-lg shadow-lg shadow-blue-500/50">
        <div className="flex justify-center items-center mt-[5px]">
          <span className="font-semibold text-[40px]">Admin table</span>
        </div>
        <div className="flex justify-end gap-[8px]">
          <Button
            color="info"
            startIcon={<LockIcon />}
            onClick={onBlock}
            disabled={!selectedIds.length}
          >
            Block
          </Button>
          <Button
            color="success"
            startIcon={<LockOpenIcon />}
            onClick={onUnblock}
            disabled={!selectedIds.length}
          >
            Unblock
          </Button>
          <Button
            color="error"
            startIcon={<DeleteIcon />}
            onClick={onDelete}
            disabled={!selectedIds.length}
          >
            Delete
          </Button>
        </div>
        <div
          className="flex justify-center mx-auto mt-[20px]"
          style={{ width: "100%" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            slots={{
              loadingOverlay: LinearProgress,
            }}
            loading={isLoading}
            onRowSelectionModelChange={onSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
