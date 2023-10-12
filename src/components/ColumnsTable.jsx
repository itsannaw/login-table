import getDateTime from "./GetDateTime";

const ColumnsTable = [
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

export default ColumnsTable;