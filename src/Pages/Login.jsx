import React, { use, useRef, useState } from "react";
import "animate.css";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
  const { authSignIn, handleGoogleSignin, setUser, sendPassResetEmailFunc } =
    use(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  const emailRef = useRef(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    authSignIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        toast.success("Sign In successful");
        Navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    handleGoogleSignin()
      .then((result) => {
        setUser(result);
        Navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign In successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleForgetPassword = () => {
    console.log();
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then((res) => {
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-[7px] top-[35px] cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
            {error && <p className="text-red-400">{error}</p>}
            <div className=" mt-1">
              <a
                href="/forgot-password"
                onClick={handleForgetPassword}
                type="button"
                className="text-sm text-[#3bd671] hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-[#3bd671] hover:bg-[#2cc762] w-full rounded-full transition-all duration-300"
          >
            Login
          </button>
        </form>{" "}
        <div className="divider">OR</div>
        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleSignin}
          className="btn bg-white text-black border-[#e5e5e5] rounded-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#3bd671] hover:underline">
            Register
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
