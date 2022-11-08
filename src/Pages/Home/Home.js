import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  const [homeServices, setHomeServices] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/homepageServices")
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
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

      <section className="py-5 px-10">
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">Photo Gallery</h2>
        </div>
        <div className="gallery-container md:grid-cols-2 grid lg:grid-cols-4 gap-3">
          {gallery.map((img) => (
            <PhotoProvider>
              <PhotoView src={img.picture}>
                <img
                  key={img._id}
                  src={img.picture}
                  alt=""
                  className="w-full h-80"
                />
              </PhotoView>
            </PhotoProvider>
          ))}
        </div>
      </section>

      <section className="p-4 bg-slate-50">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
