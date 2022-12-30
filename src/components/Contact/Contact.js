import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-4">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-5">
        <div
          data-aos="fade-right"
          className="p-8  rounded-md py-12 bg-slate-200 shadow-lg"
        >
          <h2 className="text-cenetr text-2xl font-bold mb-4">Contact Info</h2>

          <div>
            <div className="flex items-center gap-2 mb-2 text-lg">
              <MdLocationOn />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2 mb-2 text-lg">
              <IoMdCall />
              <p>01706260000</p>
            </div>
            <div className="flex items-center gap-2 mb-2 text-lg">
              <MdEmail />
              <p>nasimuddin@gmail.com</p>
            </div>
          </div>

          <div className="mt-8">
            <ul className="flex items-center gap-4 mx-auto w-1/2">
              <li className="text-2xl text-blue-600">
                <a
                  href="https://www.facebook.com/nasimuddin0994/"
                  target="blank"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="text-3xl text-red-600">
                <a href="https://www.instagram.com/" target="blank">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="text-3xl text-black">
                <a
                  href="https://github.com/nasim0994?tab=repositories"
                  target="blank"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-left" className="p-8 rounded-md bg-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>

          <form>
            <div className="lg:flex items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs mb-3 lg:mb-0"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="mb-4 w-full">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="w-full mb-4">
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn px-8">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
