import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { GrMenu, GrClose } from "react-icons/gr";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handelLogout = () => {
    logout()
      .then((res) => {})
      .catch((error) => console.error(error));
  };

  return (
    <header className="px-8 bg-slate-200">
      <div className="navbar ">
        <div className="flex-1">
          <Link to="/home">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              {" "}
              Rainbow
              <span className="text-rose-600 ">Photography</span>
            </h2>
          </Link>
        </div>
        <div className="flex-none">
          <button
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            className="lg:hidden text-2xl"
          >
            {toggleMenu ? <GrClose /> : <GrMenu />}
          </button>

          {/* Menu */}
          <ul
            className={`menu menu-horizontal p-0 gap-1 absolute lg:flex lg:static z-50 ${
              toggleMenu
                ? "top-16 bg-slate-400 right-0 w-full block"
                : "top-[-150px]"
            }`}
          >
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

                <div className="avatar online ">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
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
  );
};

export default Header;
