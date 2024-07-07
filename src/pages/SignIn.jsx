import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/d6ef7146-5575-4375-8943-bdccdeaa474c/ID-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a1dd9dc7-7e87-4802-90cf-156809afc3c2_small.jpg"
          alt="netflix background"
        />
      </div>
      <div className="w-2/3 h-2/3 lg:w-1/3 lg:h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 rounded-xl bg-black/70">
        <h1 className="text-white text-3xl font-bold">Sign In</h1>
        <form className="flex flex-col w-full gap-4 my-8" action="">
          <div className="relative">
            <input
              className="bg-transparent w-full h-14 rounded border border-white/60 p-4 placeholder-transparent peer"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white"
            >
              Enter Email
            </label>
          </div>
          <div className="relative">
            <input
              className="bg-transparent w-full h-14 rounded border border-white/60 p-4 placeholder-transparent peer"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white"
            >
              Enter Password
            </label>
          </div>
          <button
            className="w-full h-10 font-bold rounded bg-red-600"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex items-center">
            <input
              className="w-4 h-4 mr-2"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
        </form>
        <div className="text-white/80">
          New to Netflix?
          <Link to="/signup">
            <span className="cursor-pointer font-bold text-white">
              {" "}
              Sign up now.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
