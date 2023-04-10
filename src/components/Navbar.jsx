import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div className="hidden md:flex md:flex-row justify-between items-center font-bold px-6 w-auto mx-auto p-6 md:px-24  ">
        <NavLink to="/">
          <h2 className="text-3xl">HireGo</h2>
        </NavLink>
        <div className="flex gap-4">
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/appliedjobs">Applied Jobs</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
        <button className="btn-primary">Start Applying</button>
      </div>

      {/* for mobile */}
      <div className="flex items-center md:hidden p-4">
        <div className=" dropdown ">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </label>
          {isMenuOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/appliedjobs">Applied Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <button className="btn-primary">Start Applying</button>
              <li></li>
            </ul>
          )}
        </div>
        <NavLink to="/" className="w-full flex justify-center">
          <h2 className="text-3xl">HireGo</h2>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
