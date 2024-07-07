import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center py-4 px-8 w-full absolute z-50">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl">NETFLIX</h1>
      </Link>
      {location.pathname === "/" && (
        <div className="">
          <Link to="/signin">
            <button className="text-white font-bold mr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="text-white font-bold bg-red-600 rounded px-6 py-2">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
