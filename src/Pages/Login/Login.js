import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="hero bg-base-200 py-4">
      <div className="hero-content flex-col w-1/3">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Log In</h1>
        </div>

        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>

              <div>
                <h3 className="text-red-500">{}</h3>
              </div>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-active">Login</button>
            </div>

            <div>
              <p className="text-center">Or login with</p>
              <button className="btn btn-active w-full mt-3">
                <FcGoogle className="mr-2" /> <span>Google</span>
              </button>
            </div>

            <div className="text-center">
              <small>
                Not a account?{" "}
                <Link to="/signup" className="underline ">
                  Sign Up
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
