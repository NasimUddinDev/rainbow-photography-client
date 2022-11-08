import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";

const Home = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homepageServices")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);

  return (
    <div className="px-8 py-5">
      <section className="banner-container">
        <div>
          <h2 className="lg:text-6xl text-white">
            Make Memories on your <br /> Wedding day <br /> That will last a
            Lifetime
          </h2>
        </div>
      </section>

      <section className="my-6 bg-slate-100 p-4">
        <div>
          <h2 className="text-center text-3xl font-bold">My Services</h2>
        </div>

        <div className="service-container mt-5">
          {homeServices.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <div className="text-center mt-8 ">
          <Link to="/services">
            <button className="btn btn-active">See All Services</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
