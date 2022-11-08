import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
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
            <a href="https://www.facebook.com/nasimuddin0994/" target="blank">
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

      <div className="py-2 my-1">
        <h4 className="text-base font-semibold">Contact Me</h4>
        <button className="w-1/2 text-start btn  btn-active btn-ghost">
          Call
        </button>
      </div>
    </>
  );
};

export default Sidebar;
