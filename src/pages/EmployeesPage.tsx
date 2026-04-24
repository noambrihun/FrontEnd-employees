import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";
import { getEmployees } from "../services/employeeService";
import EmployeeCard from "../components/EmployeeCard";

function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    loadEmployees();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employees</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {employees.map((emp) => (
          <EmployeeCard key={emp._id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default EmployeesPage;