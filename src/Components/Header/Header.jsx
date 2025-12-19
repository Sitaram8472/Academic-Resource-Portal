// react router
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// icon
import { MdDarkMode } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  // for dropdown
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  let toggledropdown = () => {
    setOpen(!open);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center border-b border-b-red-200">
      <div className="">
        <h2>LEARN_IX</h2>
      </div>

      <nav className="flex justify-between items-center gap-6">
        <div className="flex justify-between items-center gap-12 mr-40">
          <Link to="/Home" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/services" className="hover:underline">
            services
          </Link>
        </div>

        <div className="font">
          <MdDarkMode />
        </div>

        <div className="ml-10">
          <Link to="/login" className="pl-10">
            Login
          </Link>
          <Link to="/signup" className="pl-10">
            Sign Up
          </Link>
        </div>

        {/* drop down */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggledropdown}
            className="items-center gap-2 hover:[#2f2f2f] px-3 py-1 rounded"
          >
            {<FaUserCircle size={40} className={"rounded-lg"} />}
          </button>
          {/* Dropdown Menu */}
          {open && (
            <ul className="absolute right-0 mt-2 w-52 bg-white text-black shadow-lg rounded-lg overflow-hidden">
              <li>
                <Link
                  to="/my-profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/edit-profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/explanation"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Explanation
                </Link>
              </li>
              <li>
                <Link
                  to="/report-bug"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Report Bug
                </Link>
              </li>
              <li>
                <Link
                  to="/certificates"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  My Certificate
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-red-600 hover:bg-gray-200"
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
