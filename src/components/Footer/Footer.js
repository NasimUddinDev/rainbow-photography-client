import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const [footerService, setFooterService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setFooterService(data));
  }, []);

  console.log(footerService);
  return (
    <footer className="footer p-10 bg-slate-200 text-base-content">
      <div>
        <Link to="/home" className="text-3xl font-bold">
          <h2>
            {" "}
            Rainbow
            <span className="text-rose-600 ">Photography</span>
          </h2>
        </Link>
        <p>Md Nasim Uddin</p>
        <p>Dhaka, Bangladesh</p>
      </div>

      <div>
        <span className="footer-title text-lg">Services</span>
        {footerService.map((service) => (
          <Link
            key={service._id}
            to={`/serviceDetails/${service._id}`}
            className="link link-hover"
          >
            {service.title}
          </Link>
        ))}
      </div>

      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
