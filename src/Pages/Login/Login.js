import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/ContextProvider";
import { UseTitle } from "../../utils/DaynamicTitle";

const Login = () => {
  UseTitle("Login || Rainbow Photography");
  const { googleSignup, login, setLoading } = useContext(AuthContext);

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
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  // Handel Google Signup
  const handelGoogleSignup = () => {
    googleSignup()
      .then((res) => {
        navigate(from, { replace: true });
        console.log(res.user);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="hero bg-base-200 py-4">
      <div className="hero-content flex-col w-1/3">
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
