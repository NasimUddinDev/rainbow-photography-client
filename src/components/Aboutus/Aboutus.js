import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">About Us</h2>
      </div>

      <div className="lg:flex gap-6 items-center">
        <div className="lg:w-[50%]" data-aos="fade-right">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            {" "}
            Rainbow
            <span className="text-rose-600 ">Photography</span>
          </h2>
          <p className="mb-4 text-gray-600">
            We specialize in wedding photography, corporate, family and senior
            portraits, often traveling to your destination to capture the
            perfect moment in the perfect place. From the shores here in Lake
            Geneva to the beaches of Lake Michigan in Milwaukee and Chicago and
            beyond. We will be there with you every step of the way to guarantee
            your special moments are captured for all time.
          </p>
          <button className="btn btn-active">See More</button>
        </div>
        <div className="lg:w-[50%]" data-aos="fade-left">
          <img
            src="http://hazelgraphy.com/wp-content/uploads/2015/02/Rainbow_Photography_Logo_Preview.jpg"
            alt=""
            className="lg:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
