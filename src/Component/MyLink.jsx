import React from "react";
import { NavLink } from "react-router";


const MyNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-[#3bd671] font-semibold" : `${className} font-medium`
      }
    >
      {children}
    </NavLink>
  );
};
export default MyNavLink;
