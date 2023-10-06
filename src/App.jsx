import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import AdminTable from "./pages/Table";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-table" element={<AdminTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
