import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b border-slate-700/60 bg-[#151b2d] shadow-lg shadow-slate-950/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <Link to="/" className="text-xl font-bold">
          NexGear
        </Link>

        <div className="flex items-center gap-4 text-lg">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded px-2.5 py-2 font-semibold transition-colors ${isActive ? "bg-violet-500/15 text-violet-300" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `rounded px-2.5 py-2 font-semibold transition-colors ${isActive ? "bg-violet-500/15 text-violet-300" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`
            }
          >
            Cart
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden max-w-40 truncate text-xs text-slate-400 sm:inline">
                {user.email}
              </span>
              <button
                type="button"
                onClick={logout}
                className="btn-sec cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
