import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-8 bg-base-300">
      <div className="navbar ">
        <div className="flex-1">
          <Link to="/home" className="text-3xl font-bold">
            <h2>
              {" "}
              Rainbow
              <span className="text-rose-600 ">Photography</span>
            </h2>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 gap-4">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "active" : "btn  btn-ghost "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="btn btn-ghost ">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="btn btn-ghost ">
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
