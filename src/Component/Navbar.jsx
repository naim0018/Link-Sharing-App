import { TiInfinityOutline } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { FaLink, FaUser, FaEye } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-indigo-600 rounded-lg p-[1px]">
                <TiInfinityOutline className="text-white text-2xl" />
              </div>
              <Link to="/links" className="ml-2 text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer hidden sm:inline">
                devlinks
              </Link>
            </div>
            <nav className="flex space-x-4">
                <NavLink
                  to="/links"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-500 hover:text-gray-700"
                    }`
                  }
                >
                  <span className="sm:hidden"><FaLink /></span>
                  <span className="hidden sm:inline">🔗 Links</span>
                </NavLink>
                <NavLink
                  to="/profile-details"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-500 hover:text-gray-700"
                    }`
                  }
                >
                  <span className="sm:hidden"><FaUser /></span>
                  <span className="hidden sm:inline">👤 Profile Details</span>
                </NavLink>
            </nav>
            <Link
              to="/profile"
              className="border border-indigo-600 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FaEye className="sm:hidden" />
              <span className="hidden sm:inline">Preview</span>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
