import type { Employee } from "../types/Employee";

type Props = {
  employee: Employee;
  onDelete: (id: string) => void | Promise<void>;
  onEdit: (id: string, data: Employee) => void | Promise<void>;
};

function EmployeeCard({ employee, onDelete, onEdit }: Props) {
  const handleDeleteClick = () => {
    if (!employee._id) return;
    onDelete(employee._id);
  };

  const handleEditClick = () => {
    if (!employee._id) return;

    const name = prompt("New name:", employee.name);
    if (name === null) return;

    const position = prompt("New position:", employee.position);
    if (position === null) return;

    const department = prompt("New department:", employee.department);
    if (department === null) return;

    const salaryInput = prompt("New salary:", String(employee.salary));
    if (salaryInput === null) return;

    const salary = Number(salaryInput);
    if (Number.isNaN(salary)) {
      alert("Salary must be a number");
      return;
    }

    onEdit(employee._id, {
      ...employee,
      name,
      position,
      department,
      salary,
    });
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{employee.name}</h2>
      <p>{employee.position}</p>
      <p>{employee.department}</p>
      <p className="text-green-600 font-semibold">
        ${employee.salary}
      </p>
      <button onClick={handleDeleteClick} className="bg-red-500 text-white px-3 py-1 rounded">
        Delete
      </button>
      <button onClick={handleEditClick} className="bg-orange-500 text-white px-3 py-1 rounded">
        Edit
      </button>
    </div>
  );
}

export default EmployeeCard;