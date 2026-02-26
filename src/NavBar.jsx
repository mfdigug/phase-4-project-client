import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="text-xl font-bold">Book Exchange</h1>

      <NavLink to="/" className="mr-4 text-gray-300 hover:text-white">
        Available Books
      </NavLink>

      <NavLink
        to="/userprofile"
        className="mr-4 text-gray-300 hover:text-white"
      >
        My Profile
      </NavLink>
    </nav>
  );
}
