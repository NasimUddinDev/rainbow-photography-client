import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  return <div className="px-8">service: {service.title}</div>;
};

export default ServiceDetails;
