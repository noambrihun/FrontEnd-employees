import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";
import { getEmployees } from "../services/employeeService";
import EmployeeCard from "../components/EmployeeCard";
import axios from "axios";

const API_URL = "https://backend-employees-nhwg.onrender.com/api/employees";

function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    loadEmployees();
  }, []);

  const handleDelete = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    setEmployees((prev) => prev.filter((emp) => emp._id !== id));
  };

  const handleEdit = async (id: string, data: Employee) => {
    // Most backends use PATCH for partial updates; fallback to PUT if needed.
    try {
      await axios.patch(`${API_URL}/${id}`, data);
    } catch {
      await axios.put(`${API_URL}/${id}`, data);
    }

    setEmployees((prev) =>
      prev.map((emp) => (emp._id === id ? { ...emp, ...data } : emp))
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employees</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {employees.map((emp) => (
            <EmployeeCard key={emp._id} employee={emp} onDelete={handleDelete} onEdit={handleEdit}/>
        ))}
      </div>
    </div>
  );
}

export default EmployeesPage;