import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UseTitle } from "../../../utils/DaynamicTitle";

const UpdateReview = () => {
  UseTitle("Update Review || Rainbow Photography");

  const { _id, message, serviceId, rating } = useLoaderData();
  const [reviewService, setReviewService] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://rainbow-photography-server-nasim0994.vercel.app/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [serviceId]);

  // Handel Update Review
  const handelReviewEdite = (e) => {
    e.preventDefault();

    const form = e.target;
    const message = form.message.value;
    const rating = form.rating.value;

    const now = new Date();
    const date = now.toDateString();
    const time =
      now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();

    const updateReview = { message, rating, date, time };

    fetch(
      `https://rainbow-photography-server-nasim0994.vercel.app/reviews/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review update success",
            showConfirmButton: false,
            timer: 1000,
          });

          form.reset();
          navigate("/myReview");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-12">
      <h2 className="text-center text-3xl font-bold mb-4">
        Update Your Review
      </h2>
      <form
        onSubmit={handelReviewEdite}
        className="w-full md:w-2/3 lg:w-1/2  mx-auto bg-slate-100 p-10 rounded-md"
      >
        <div className="form-control mb-3">
          <label className="label font-semibold">
            <span className="label-text">Service Name</span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered"
            defaultValue={reviewService.title}
            readOnly
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Review Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="New Rating?"
            className="input input-bordered"
            defaultValue={rating}
            required
          />

          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">Review Message</span>
            </label>
            <textarea
              name="message"
              className="textarea input-bordered"
              placeholder="Type your review ..."
              defaultValue={message}
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn  mt-3 w-40 ">
              Update Review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
