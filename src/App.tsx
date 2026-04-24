import { useEffect, useState } from "react";
import type { Employee } from "./types/Employee";
import { getEmployees } from "./services/employeeService";

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
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Employee Manager</h1>

        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 cursor-pointer">Employees</li>
          <li className="hover:text-blue-400 cursor-pointer">Add Employee</li>
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">Employees</h2>

        <div className="grid grid-cols-3 gap-5">
          {employees.map((emp) => (
            <div
              key={emp._id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold">{emp.name}</h3>
              <p>{emp.position}</p>
              <p>{emp.department}</p>
              <p className="text-green-600 font-semibold">
                ${emp.salary}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;