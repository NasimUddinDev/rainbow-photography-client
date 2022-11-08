import React from "react";
import "./ServiceDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, title, description, picture, price } = service;
  return (
    <div className="px-10 py-5 service-details-container bg-slate-100">
      <div className="p-4 bg-white rounded-md">
        {/* Service Details */}
        <div>
          <img src={picture} alt="" />

          <div className="flex items-center justify-between my-3">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <h5 className="flex items-center font-semibold text-lg">
              <TbCurrencyTaka /> {price}
            </h5>
          </div>
          <p className="text-lg text-slate-600">{description}</p>
        </div>

        <div className="py-5">
          <hr />
        </div>

        {/* service Review Form*/}

        <div className="mt-6 border p-4 bg-slate-100">
          {/* <h2 className="text-center">
            Please{" "}
            <Link to="/login" className="underline text-primary">
              LogIn
            </Link>{" "}
            to add a Review
          </h2> */}

          <form className="card-body">
            <div className="flex items-center gap-4">
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <input
                  type="text"
                  placeholder="Img Link"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <textarea
                className="textarea input-bordered"
                placeholder="Type your review ..."
              ></textarea>
            </div>

            <div className="form-control mt-3">
              <button className="btn btn-active">Review</button>
            </div>
          </form>
        </div>

        {/* Old Review */}
        <div className="mt-6 border p-7 bg-slate-100 ">
          <div className="flex items-cenetr gap-2 mb-5 border-b-2 pb-3">
            <div className="text-5xl">
              <HiUserCircle />
            </div>
            <div>
              <h4 className="font-semibold">MD Nasim Uddin</h4>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus perspiciatis eligendi earum esse atque, deleniti modi
                fugit qui blanditiis quod.
              </p>
            </div>
          </div>

          <div className="flex items-cenetr gap-2 mb-5 border-b-2 pb-3">
            <div className="text-5xl">
              <HiUserCircle />
            </div>
            <div>
              <h4 className="font-semibold">MD Nasim Uddin</h4>
              <p className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus perspiciatis eligendi earum esse atque, deleniti modi
                fugit qui blanditiis quod.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*--------------- Sidebar ----------*/}
      <div className="p-4 bg-white rounded-md">
        <h2 className="text-xl font-bold border-b-2 pb-2">
          Photographer Overview
        </h2>

        <div className="py-2 my-2">
          <h4 className="text-base font-semibold">SERVICES AVAILABLE</h4>
          <p className="text-sm text-slate-500">Photography & Cinematography</p>
        </div>

        <div className="py-2 my-1">
          <h4 className="text-base font-semibold">YEARS OF EXPERIENCE</h4>
          <p className="text-sm text-slate-500">5+ Years</p>
        </div>

        <div className="py-2 my-1">
          <h4 className="text-base font-semibold">PAYMENT OPTIONS</h4>
          <p className="text-sm text-slate-500">Cash, bKash, Bank Deposit</p>
        </div>

        <div className="py-2 my-1">
          <h4 className="text-base font-semibold">DELIVERY TIMELINE</h4>
          <p className="text-sm text-slate-500">Approx 10 days</p>
        </div>
        <div className="py-2 my-1">
          <h4 className="text-base font-semibold">SOCIAL LINKS</h4>
          <ul className="flex items-center gap-2">
            <li className="text-2xl text-blue-600">
              <BsFacebook />
            </li>
            <li className="text-3xl text-red-600">
              <AiFillInstagram />
            </li>
          </ul>
        </div>

        <div className="py-2 my-1">
          <h4 className="text-base font-semibold">Contact Me</h4>
          <button className="w-1/2 text-start btn  btn-active btn-ghost">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
