import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Service from "../../components/Service/Service";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Contact from "../../components/Contact/Contact";
import { UseTitle } from "../../utils/DaynamicTitle";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import Aboutus from "../../components/Aboutus/Aboutus";

const Home = () => {
  UseTitle("Home || Rainbow Photography");

  const [homeServices, setHomeServices] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(
      " https://rainbow-photography-server-nasim0994.vercel.app/homepageServices"
    )
      .then((res) => res.json())
      .then((data) => setHomeServices(data));
  }, []);

  useEffect(() => {
    fetch("https://rainbow-photography-server-nasim0994.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div data-aos-easing="linear" className="px-8 py-5">
      <section data-aos="zoom-out-up" className="banner-container">
        <div>
          <h2 className="lg:text-6xl text-white">
            Make Memories on your <br /> Wedding day <br /> That will last a
            Lifetime
          </h2>
        </div>
      </section>

      {/* Service section */}
      <section className="my-6 bg-slate-100 p-4">
        <div>
          <h2 className="text-center text-3xl font-bold">My Services</h2>
        </div>

        <div className="service-container mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
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

      {/* Gallery Section */}
      <section className="py-5 lg:px-10">
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">Photo Gallery</h2>
        </div>
        <div className="gallery-container md:grid-cols-2 grid lg:grid-cols-4 gap-3">
          {gallery.map((img) => (
            <PhotoProvider key={img._id}>
              <PhotoView src={img.picture}>
                <img
                  data-aos="zoom-in-up"
                  src={img.picture}
                  alt=""
                  className="w-full h-60 lg:h-80"
                />
              </PhotoView>
            </PhotoProvider>
          ))}
        </div>
      </section>

      <section className="py-5 lg:px-10 bg-slate-100">
        <CustomerReview />
      </section>

      <section className="py-5 lg:px-10 ">
        <Aboutus />
      </section>

      {/* Conract Section */}
      <section className="p-4 bg-slate-100">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
