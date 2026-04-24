import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";
import { getEmployees } from "../services/employeeService";

import Sidebar from "./Sidebar";
import EmployeeCard from "./EmployeeCard";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    loadEmployees();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">Employees</h2>

        <div className="grid grid-cols-3 gap-5">
          {employees.map((emp) => (
            <EmployeeCard key={emp._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;