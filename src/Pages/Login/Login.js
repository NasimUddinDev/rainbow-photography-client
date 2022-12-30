import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/ContextProvider";
import { UseTitle } from "../../utils/DaynamicTitle";
import Swal from "sweetalert2";

const Login = () => {
  UseTitle("Login || Rainbow Photography");
  const { googleSignup, login, setLoading } = useContext(AuthContext);
  const [message, setmessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  // Login with email and password
  const handelLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        form.reset();
        const user = res.user;
        console.log(user);
        setmessage("");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Success",
          showConfirmButton: false,
          timer: 1000,
        });

        const userEmail = { email: user.email };

        // JWT post
        fetch("https://rainbow-photography-server-nasim0994.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("RP-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
        setmessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Handel Google Signup
  const handelGoogleSignup = () => {
    googleSignup()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setmessage("");

        const userEmail = { email: user.email };

        // JWT post
        fetch("https://rainbow-photography-server-nasim0994.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userEmail),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("RP-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
        setmessage(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="bg-base-200 py-4">
      <div className="hero-content flex-col md:w-2/3 lg:w-1/3 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Log In</h1>
        </div>

        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            {/* LogIn Form */}
            <form onSubmit={handelLogin}>
              <div className="form-control mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
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

              <div className="form-control mt-3">
                <button className="btn btn-active">Login</button>
              </div>
            </form>

            <p className="text-red-500">{message}</p>

            {/* Others way to Login */}
            <div>
              <p className="text-center">Or login with</p>
              <button
                onClick={handelGoogleSignup}
                className="btn btn-active w-full mt-3"
              >
                <FcGoogle className="mr-2" /> <span>Google</span>
              </button>
            </div>

            <div className="text-center">
              <small>
                Not an account?{" "}
                <Link to="/signup" className="underline ">
                  Sign Up
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
