import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="service-container px-9 py-5">
      {services.map((service) => (
        <Service service={service} key={service._id}></Service>
      ))}
    </div>
  );
};

export default Services;
