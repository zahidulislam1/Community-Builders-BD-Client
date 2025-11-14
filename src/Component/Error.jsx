import React from "react";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-6">
      <div className="text-6xl text-red-500 animate__animated animate__shakeX mb-4">
        ❌
      </div>

      <p className="text-xl text-center text-red-600 font-semibold mb-4">
        Something went wrong! 404
      </p>

      <NavLink
        to="/"
        className="btn bg-[#3bd671] flex items-center gap-2 md:px-6 md:py-3 text-lg rounded-full transition-all duration-500 hover:bg-[#2cc762] hover:rounded-xl"
      >
        Go Back
      </NavLink>
    </div>
  );
};

export default Error;
