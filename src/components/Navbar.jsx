import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link
            to="/auth"
            className="border border-[#8B5CF6] bg-[#8B5CF6] px-4 py-2 rounded-md shadow-md hover:bg-[#7C3AED] hover:border-[#7C3AED] font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
