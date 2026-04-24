import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <aside className="w-64 shrink-0 bg-gray-900 p-6 text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-8">
          Employee Manager
        </h1>
        <Link to="/" className="hover:text-blue-400">
            Dashboard
        </Link>
         <ul className="space-y-4">
            <li>
                <Link to="/employees" className="hover:text-blue-400">
                    Employees
                </Link>
            </li>

            <li>
                <Link to="/add" className="hover:text-blue-400">
                    Add Employee
                </Link>
            </li>
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;