import React from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = ({ service }) => {
  const { _id, title, description, picture, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-between items-center">
          <h5 className="flex items-center font-semibold text-lg">
            <TbCurrencyTaka /> {price}
          </h5>
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn  btn-active btn-ghost gap-1">
              Details <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
