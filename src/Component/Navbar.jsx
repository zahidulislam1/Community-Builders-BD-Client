import React, { use, useEffect, useState } from "react";
import logo from "/logo.png";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import MyLink from "./MyLink";
import toast from "react-hot-toast";
import { AuthContext } from "../Auth/AuthProvider";
import { NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { user, authSignOut, setUser } = use(AuthContext);
  const handleLogOut = () => {
    authSignOut()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "light" : "dark");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <MyLink to="/" className="hover:text-[#3bd671] transition-colors">
                Home
              </MyLink>
            </li>
            <li>
              <MyLink
                to="/upcoming-event"
                className="hover:text-[#3bd671] transition-colors"
              >
                Upcoming Event
              </MyLink>
            </li>
            <li>
              <MyLink
                to="/about"
                className="hover:text-[#3bd671] transition-colors"
              >
                About
              </MyLink>
            </li>
            <li>
              <MyLink
                to="/register"
                className="hover:text-[#3bd671] transition-colors"
              >
                Register
              </MyLink>
            </li>
          </ul>
        </div>
      </div>
      <NavLink to="/" className="navbar-center  space-x-2">
        <div className="">
          <img className="w-16" src={logo} alt="" />
        </div>
        <h1 to="/" className=" text-2xl font-bold hidden lg:flex space-x-1 ">
          <span className="text-[#3bd671] text-shadow-md ">Community</span>
          <span> Builders BD</span>
        </h1>
      </NavLink>
      <div className="navbar-end space-x-2">
        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem("theme") === "light"}
          className="toggle"
        />
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              <li className="mt-3">
                <NavLink to={"/profile"}>
                  <FaUser /> Profile
                </NavLink>
              </li>

              <li>
                <NavLink to="/Create-event">Create Event</NavLink>
              </li>

              <li>
                <NavLink to="/joined-event">Joined Events</NavLink>
              </li>
              <li>
                <NavLink to="/manage-event">Manage Events</NavLink>
              </li>

              <li>
                <a>
                  <FaGear /> Settings
                </a>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-xs bg-[#3bd671] flex items-center gap-2 md:px-6 md:py-3 text-lg rounded-full transition-all duration-500 hover:bg-[#2cc762] hover:rounded-xl"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="btn bg-[#3bd671] flex items-center gap-2 md:px-6 md:py-3 text-lg rounded-full transition-all duration-500 hover:bg-[#2cc762] hover:rounded-xl "
          >
            <IoLogIn /> Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
