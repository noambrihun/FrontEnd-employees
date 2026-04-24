import type { Employee } from "../types/Employee";

type Props = {
  employee: Employee;
};

function EmployeeCard({ employee }: Props) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{employee.name}</h2>
      <p>{employee.position}</p>
      <p>{employee.department}</p>
      <p className="text-green-600 font-semibold">
        ${employee.salary}
      </p>
    </div>
  );
}

export default EmployeeCard;