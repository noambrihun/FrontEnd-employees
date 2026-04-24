import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import EmployeesPage from "./pages/EmployeesPage";
import AddEmployeePage from "./pages/AddEmployeePage";

function App() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-x-hidden p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/add" element={<AddEmployeePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;