import React, { use } from "react";
import { NavLink } from "react-router";
import logo from "../assets/arcade-machine.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);


    const handleLogOut = () => {
        console.log("log out btn clicked");
        logOut()
            .then(() => {
            alert("Logged Out")
            })
            .catch((error) => {
            console.log(error);
            
        })
        
    };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-purple-600 border-b-2 border-purple-600 pb-1"
      : "text-gray-600 hover:text-purple-600";

  const links = (
    <>
      <li>
        <NavLink className={linkClasses} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClasses} to="/my-profile">
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <header>
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
                {user ? (
                  <div>
                    <p>{user.name}</p>
                    <li
                      className="btn mt-5 bg-purple-300 hover:pointer "
                      onClick={handleLogOut}
                    >
                      Log Out
                    </li>
                  </div>
                ) : (
                  <div>
                    <li>
                      <NavLink className={linkClasses} to="/login">
                        LogIn
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={linkClasses} to="/registration">
                        Registration
                      </NavLink>
                    </li>
                  </div>
                )}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl gap-3">
              <img className="h-12 w-12" src={logo} alt="logo" />
              <NavLink
                to="/"
                className="btn btn-ghost font-mono text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
              >
                URBAN_ARCADE
              </NavLink>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn ml-5 bg-purple-300 hover:pointer"
                >
                  Log Out
                </button>
              ) : (
                <div>
                  <li>
                    <NavLink className={linkClasses} to="/login">
                      LogIn
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={linkClasses} to="/registration">
                      Registration
                    </NavLink>
                  </li>
                </div>
              )}
              <li></li>
            </ul>
          </div>
          {/* <div className="navbar-end">
            <a className="btn">Button</a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
