import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const ReviewBody = ({ review, handelReviewDelete }) => {
  const { _id, message, date, time, serviceId, rating } = review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(
      `https://rainbow-photography-server-nasim0994.vercel.app/services/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [serviceId]);

  return (
    <tr className="flex flex-col lg:table-row mb-5 bg-slate-400 lg:bg-white">
      <th className="bg-slate-500 lg:bg-white mb-2 rounded-none">
        <button
          onClick={() => handelReviewDelete(_id)}
          className="text-2xl text-red-700"
          title="Delete"
        >
          <AiFillDelete />
        </button>
      </th>

      <td className="bg-slate-500 lg:bg-white mb-2">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img
                src={reviewService.picture}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewService.title}</div>
            <div className="text-sm opacity-50 flex items-center">
              <TbCurrencyTaka /> {reviewService.price}
            </div>
          </div>
        </div>
      </td>

      <td className="bg-slate-500 lg:bg-white mb-2">
        <p className="text-xl">{message}</p>
      </td>

      <td className="bg-slate-500 lg:bg-white mb-2">
        <p className="text-xl">{rating}</p>
      </td>

      <td className="bg-slate-500 lg:bg-white mb-2">
        <div>{date}</div>
        <div>{time}</div>
      </td>

      <th className="bg-slate-500 lg:bg-white rounded-none">
        {/* The button to open modal */}
        <Link to={`/updateReview/${_id}`} className="btn">
          <MdOutlineModeEditOutline /> Edite
        </Link>
      </th>
    </tr>
  );
};

export default ReviewBody;
