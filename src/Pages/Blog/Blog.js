import React from "react";
import "./Blog.css";
import { UseTitle } from "../../utils/DaynamicTitle";

const Blog = () => {
  UseTitle("Blog || Rainbow Photography");
  return (
    <div className="px-10 py-5">
      {/* 1 */}
      <div className="md:flex gap-3 bg-slate-100 p-4 mb-4">
        <div className="md:w-2/5">
          <img
            src="https://sazzadul.com/wp-content/uploads/2022/07/SQl-or-NoSQL.jpg"
            alt=""
            className="w-full h-56"
          />
        </div>
        <div className="md:w-3/5">
          <h2 className="text-3xl font-semibold mb-4">
            1. Difference between SQL and NoSQL?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
            similique dolorum perspiciatis adipisci corrupti delectus,
            temporibus sit necessitatibus nostrum assumenda quod quos culpa
            repellendus sequi, laborum suscipit eum sed ducimus earum vel, nam
            aliquid. Aliquid, repellendus itaque? Magni quaerat recusandae
            facere obcaecati qui, perspiciatis culpa veniam incidunt explicabo
            esse?
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className="md:flex gap-3 bg-slate-100 p-4 mb-4">
        <div className="md:w-2/5">
          <img
            src="http://jwt.io/img/logo-asset.svg"
            alt=""
            className="w-full h-56"
          />
        </div>
        <div className="md:w-3/5">
          <h2 className="text-3xl font-semibold mb-4">
            1. What is JWT, and how does it work?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
            similique dolorum perspiciatis adipisci corrupti delectus,
            temporibus sit necessitatibus nostrum assumenda quod quos culpa
            repellendus sequi, laborum suscipit eum sed ducimus earum vel, nam
            aliquid. Aliquid, repellendus itaque? Magni quaerat recusandae
            facere obcaecati qui, perspiciatis culpa veniam incidunt explicabo
            esse?
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className="md:flex gap-3 bg-slate-100 p-4 mb-4">
        <div className="md:w-2/5">
          <img
            src="https://i.ytimg.com/vi/7RUJ9E2Jk48/maxresdefault.jpg"
            alt=""
            className="w-full h-56"
          />
        </div>
        <div className="md:w-3/5">
          <h2 className="text-3xl font-semibold mb-4">
            1. What is the difference between javascript and NodeJS?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
            similique dolorum perspiciatis adipisci corrupti delectus,
            temporibus sit necessitatibus nostrum assumenda quod quos culpa
            repellendus sequi, laborum suscipit eum sed ducimus earum vel, nam
            aliquid. Aliquid, repellendus itaque? Magni quaerat recusandae
            facere obcaecati qui, perspiciatis culpa veniam incidunt explicabo
            esse?
          </p>
        </div>
      </div>
      {/* 4 */}
      <div className="md:flex gap-3 bg-slate-100 p-4">
        <div className="md:w-2/5">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--06ezZhc0--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/cosh3nee9nkfwnsmpn9p.png"
            alt=""
            className="w-full h-56"
          />
        </div>
        <div className="md:w-3/5">
          <h2 className="text-3xl font-semibold mb-4">
            1. How does NodeJS handle multiple requests at the same time?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi
            similique dolorum perspiciatis adipisci corrupti delectus,
            temporibus sit necessitatibus nostrum assumenda quod quos culpa
            repellendus sequi, laborum suscipit eum sed ducimus earum vel, nam
            aliquid. Aliquid, repellendus itaque? Magni quaerat recusandae
            facere obcaecati qui, perspiciatis culpa veniam incidunt explicabo
            esse?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
