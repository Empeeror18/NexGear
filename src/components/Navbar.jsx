import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#1E2438]">
      <div className="flex items-center justify-between px-10 py-5">
        <Link to="/" className="text-xl font-bold">
          NexGear
        </Link>

        <div className="flex items-center gap-4 text-lg">
          <Link to="/" className="hover:text-[#8B5CF6]">
            Home
          </Link>

          <Link to="/checkout" className="hover:text-[#8B5CF6]">
            Cart
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-sm text-slate-300 sm:inline">
                {user.email}
              </span>
              <button
                type="button"
                onClick={logout}
                className="rounded-md border border-[#8B5CF6] px-4 py-2 font-semibold text-white hover:bg-[#8B5CF6] hover:cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="rounded-md border border-[#8B5CF6] px-4 py-2 font-semibold text-white hover:bg-[#8B5CF6] hover:cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
