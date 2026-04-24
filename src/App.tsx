import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import EmployeesPage from "./pages/EmployeesPage";
import AddEmployeePage from "./pages/AddEmployeePage";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/add" element={<AddEmployeePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;