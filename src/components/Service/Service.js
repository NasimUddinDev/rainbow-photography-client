import React from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { _id, title, description, picture, price } = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl mb-3 ">
      <figure>
        <PhotoProvider>
          <PhotoView src={picture}>
            <img src={picture} alt="" title="Click to zoom" />
          </PhotoView>
        </PhotoProvider>
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
