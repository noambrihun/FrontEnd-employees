import { useEffect, useState } from "react";
import type { Employee } from "./types/Employee";
import { getEmployees } from "./services/employeeService";
import "./index.css";

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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Employees</h1>

      {employees.map((emp) => (
        <div key={emp._id} className="border p-4 mb-3 rounded shadow">
          <h2 className="text-xl font-semibold">{emp.name}</h2>
          <p>{emp.position}</p>
          <p>{emp.department}</p>
          <p>${emp.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default App;