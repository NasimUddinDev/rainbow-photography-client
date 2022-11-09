import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handelLogout = () => {
    logout()
      .then((res) => {})
      .catch((error) => console.error(error));
  };

  return (
    <>
      <header className="px-8 bg-slate-200">
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
            <ul className="menu menu-horizontal p-0 gap-2">
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
                <NavLink to="/services" className="btn btn-ghost ">
                  Services
                </NavLink>
              </li>

              {user?.uid || user?.email ? (
                <>
                  <li>
                    <NavLink to="/myReview" className="btn btn-ghost">
                      My Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/addService" className="btn btn-ghost">
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handelLogout}
                      className="btn btn-active btn-ghost"
                    >
                      LogOut
                    </button>
                  </li>

                  <li className="w-12 h-12 border rounded-full border-gray-600 overflow-hidden">
                    <img src={user?.photoURL} alt="" className="w-full p-0" />
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login" className="btn btn-ghost ">
                    Log In
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
