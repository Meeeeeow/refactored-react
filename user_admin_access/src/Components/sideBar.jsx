/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = ({ role }) => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard/products"
              className="block py-2 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className="block py-2 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Profile
            </NavLink>
          </li>
          {role === "admin" && (
            <li>
              <NavLink
                to="/dashboard/users"
                className="block py-2 hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                Users List
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
