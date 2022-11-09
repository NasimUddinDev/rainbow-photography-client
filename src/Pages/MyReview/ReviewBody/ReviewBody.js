import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const ReviewBody = ({ review, handelReviewDelete, handelReviewEdite }) => {
  const { _id, message, date, time, serviceId } = review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [serviceId]);

  return (
    <tr>
      <th>
        <button
          onClick={() => handelReviewDelete(_id)}
          className="text-2xl text-red-700"
          title="Delete"
        >
          <AiFillDelete />
        </button>
      </th>

      <td>
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

      <td>
        <input
          type="text"
          name="message"
          defaultValue={message}
          className="outline-none"
        />
      </td>
      <td>
        <div>{date}</div>
        <div>{time}</div>
      </td>
      <th>
        <button
          onClick={() => handelReviewEdite(_id)}
          className="btn btn-ghost "
        >
          <MdOutlineModeEditOutline />
          Edite
        </button>
      </th>
    </tr>
  );
};

export default ReviewBody;
