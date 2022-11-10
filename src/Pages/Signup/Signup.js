import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/ContextProvider";
import { UseTitle } from "../../utils/DaynamicTitle";

const Signup = () => {
  UseTitle("Signup || Rainbow Photography");
  const [message, setmessage] = useState("");

  const { googleSignup, signup, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  // SignUp with email and password
  const handelSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.name.value;
    const userImg = form.img.value;
    const email = form.email.value;
    const password = form.password.value;

    signup(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setmessage("");
        form.reset();

        handelUserProfile(userName, userImg);

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
      });
  };

  // Handel user Profiule
  const handelUserProfile = (userName, userImg) => {
    const profile = {
      displayName: userName,
      photoURL: userImg,
    };

    updateUser(profile)
      .then((res) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  // Handel Google Signup
  const handelGoogleSignup = () => {
    googleSignup()
      .then((res) => {
        const user = res.user;
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
      });
  };

  return (
    <div className="bg-base-200 py-4">
      <div className="hero-content flex-col md:w-2/3 lg:w-2/5 mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up</h1>
        </div>

        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handelSignup}>
              <div className="form-control mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <input
                  type="text"
                  name="img"
                  placeholder="Img Link"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <input
                  type="password"
                  name="password"
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
            </form>

            <p className="text-red-500">{message}</p>

            <div>
              <p className="text-center">Or signup with</p>
              <button
                onClick={handelGoogleSignup}
                className="btn btn-active w-full mt-3"
              >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
