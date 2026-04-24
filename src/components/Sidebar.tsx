function Sidebar() {
    return (
      <div className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Employee Manager
        </h1>
  
        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </li>
  
          <li className="hover:text-blue-400 cursor-pointer">
            Employees
          </li>
  
          <li className="hover:text-blue-400 cursor-pointer">
            Add Employee
          </li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;