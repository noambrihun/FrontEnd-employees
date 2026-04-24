import { useState } from "react";
import axios from "axios";

function AddEmployeePage() {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
      try {
        const response = await axios.post("http://localhost:3000/api/employees", {
          name,
          position,
          salary,
          department,
        });
        console.log(response.data);
      } catch (error) {
      };
      setName("");
      setPosition("");
      setSalary("");
      setDepartment("");
      alert("Employee added successfully");
    }

    return (
        <div className="flex flex-col items-center  h-screen">
            <h1 className="text-3xl font-bold mb-6">Add Employee</h1>
            <form className="bg-white p-6 rounded-lg shadow-md max-w-xl space-y-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="w-full border p-2 rounded" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Position" className="w-full border p-2 rounded" value={position} onChange={(e) => setPosition(e.target.value)} />
                <input type="number" placeholder="Salary" className="w-full border p-2 rounded" value={salary} onChange={(e) => setSalary(e.target.value)} />
                <input type="text" placeholder="Department" className="w-full border p-2 rounded" value={department} onChange={(e) => setDepartment(e.target.value)} />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Employee</button>
            </form>
        </div>
    );
  }
  
  export default AddEmployeePage;