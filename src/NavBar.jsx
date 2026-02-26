import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const isBooklist = location.pathname === "/";

  return (
    <nav>
      {isBooklist ? (
        <div>
          <h1 className="text-xl font-bold">Book Exchange</h1>
          <NavLink
            to="/userprofile"
            className="mr-4 text-gray-300 hover:text-white"
          >
            My Profile
          </NavLink>
        </div>
      ) : (
        <div>
          <h1 className="text-xl font-bold">My Profile</h1>

          <NavLink to="/" className="mr-4 text-gray-300 hover:text-white">
            Available Books
          </NavLink>
          <NavLink
            to="/userprofile/mybooks"
            className="mr-4 text-gray-300 hover:text-white"
          >
            My Books
          </NavLink>
          <NavLink
            to="/userprofile/requestedbooks"
            className="mr-4 text-gray-300 hover:text-white"
          >
            Requested Books
          </NavLink>
          <NavLink
            to="/userprofile/pendingrequests"
            className="mr-4 text-gray-300 hover:text-white"
          >
            Pending Requests
          </NavLink>
        </div>
      )}
    </nav>
  );
}
