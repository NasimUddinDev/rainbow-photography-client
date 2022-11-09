import React, { useState } from "react";
import "./ServiceDetails.css";
import { useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import ReviewForm from "./ReviewForm/ReviewForm";
import ReviewDisplay from "./ReviewDisplay/ReviewDisplay";
import Sidebar from "./Sidebar/Sidebar";
import { UseTitle } from "../../utils/DaynamicTitle";

const ServiceDetails = () => {
  UseTitle("Services Details || Rainbow Photography");
  const service = useLoaderData();
  const { title, description, picture, price } = service;
  const [reviews, setReviews] = useState([]);

  return (
    <div className="px-12 py-5 bg-slate-100  lg:flex gap-4">
      <section className="p-4 bg-white rounded-md lg:w-2/3">
        {/* Service Details */}
        <div className="px-4">
          <img src={picture} alt="" className="service-img" />

          <div className="flex items-center justify-between my-3">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <h5 className="flex items-center font-semibold text-lg">
              <TbCurrencyTaka /> {price}
            </h5>
          </div>
          <p className="text-lg text-slate-600">{description}</p>
        </div>

        {/* line */}
        <div className="py-5">
          <hr />
        </div>

        {/* service Review Form*/}
        <div className="mt-6 border p-4 bg-slate-100">
          <ReviewForm
            service={service}
            reviews={reviews}
            setReviews={setReviews}
          >
            {" "}
          </ReviewForm>
        </div>

        {/* Old Review */}
        <div className="mt-6 border p-7 bg-slate-100">
          <ReviewDisplay
            service={service}
            reviews={reviews}
            setReviews={setReviews}
          >
            {" "}
          </ReviewDisplay>
        </div>
      </section>

      {/*--------------- Sidebar ----------*/}
      <section className="p-4 bg-white rounded-md mt-4 lg:mt-0 lg:w-1/3">
        <Sidebar />
      </section>
    </div>
  );
};

export default ServiceDetails;
