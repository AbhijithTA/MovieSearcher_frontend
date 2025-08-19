import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Movie Searcher</span>
          </div>

        
          <div className="flex items-center space-x-1">
            {user && (
              <div className="flex items-center space-x-1 mr-6">
                <Link 
                  to="/search"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  Search
                </Link>
                <Link 
                  to="/saved"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  Saved
                </Link>
              </div>
            )}

           
            <div className="flex items-center space-x-3">
              {!user ? (
                <>
                  <Link 
                    to="/login" 
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register"
                    className="px-4 py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors duration-200 shadow-sm"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button 
                  onClick={logout} 
                  className="px-4 py-2 text-sm font-medium bg-red-500 text-white hover:bg-red-600 rounded-md transition-colors duration-200 shadow-sm"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}