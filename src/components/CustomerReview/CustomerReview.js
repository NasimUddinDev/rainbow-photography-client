import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaScribd } from "react-icons/fa";

const CustomerReview = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">Customer Review</h2>
      </div>

      <div className="flex gap-6 text-center">
        <div
          className=" bg-lime-200 px-4 py-8 rounded-md"
          data-aos="fade-right"
        >
          <h3 className="text-2xl  font-bold mb-3">Amazing Service</h3>
          <p className="text-gray-500">
            <FaScribd className="inline text-red-500 font-bold" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            incidunt autem fugit totam qui ratione repellendus{" "}
            <FaScribd className="inline text-red-500 font-bold" />
          </p>

          <div className="flex justify-center gap-2 items-center mt-3">
            <img
              src="https://www.small-improvements.com/wp-content/uploads/2016/10/Profile_Scott.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Jhon</h4>
              <p className="text-yellow-500 flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-blue-200 px-4 py-8 rounded-md">
          <h3 className="text-2xl  font-bold mb-3">Amazing Service</h3>
          <p className="text-gray-500">
            <FaScribd className="inline text-red-500 font-bold" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            incidunt autem fugit totam qui ratione repellendus
            <FaScribd className="inline text-red-500 font-bold" />
          </p>

          <div className="flex justify-center gap-2 items-center mt-3">
            <img
              src="https://addison.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/05/person-team-01-640x640.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Jane Deo</h4>
              <p className="text-yellow-500 flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-green-200 px-4 py-8 rounded-md">
          <h3 className="text-2xl  font-bold mb-3">Amazing Service</h3>
          <p className="text-gray-500">
            <FaScribd className="inline text-red-500 font-bold" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            incidunt autem fugit totam qui ratione repellendus
            <FaScribd className="inline text-red-500 font-bold" />
          </p>

          <div className="flex justify-center gap-2 items-center mt-3">
            <img
              src="https://divicio.us/demos/demo/wp-content/uploads/2018/03/face-1.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Jake Deo</h4>
              <p className="text-yellow-500 flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
          </div>
        </div>

        <div className="bg-cyan-200 px-4 py-8 rounded-md" data-aos="fade-left">
          <h3 className="text-2xl  font-bold mb-3">Amazing Service</h3>
          <p>
            <FaScribd className="inline text-red-500 font-bold" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            incidunt autem fugit totam qui ratione repellendus
            <FaScribd className="inline text-red-500 font-bold" />
          </p>

          <div className="flex justify-center gap-2 items-center mt-3">
            <img
              src="https://divicio.us/demos/demo/wp-content/uploads/2018/03/woman.jpg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Md Nasim Uddin</h4>
              <p className="text-yellow-500 flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
