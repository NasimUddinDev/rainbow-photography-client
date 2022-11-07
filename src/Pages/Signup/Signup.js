import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="hero bg-base-200 py-4">
      <div className="hero-content flex-col w-1/3">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>

        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Img Link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />

              {/* Error Message */}
              <div>
                <h3 className="text-red-500">{}</h3>
              </div>
            </div>

            <div className="form-control mt-3">
              <button className="btn btn-active">SignUp</button>
            </div>

            <div>
              <p className="text-center">Or signup with</p>
              <button className="btn btn-active w-full mt-3">
                <FcGoogle className="mr-2" /> <span>Google</span>
              </button>
            </div>

            <div className="text-center">
              <small>
                already have an account?{" "}
                <Link to="/login" className="underline ">
                  Log In
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
