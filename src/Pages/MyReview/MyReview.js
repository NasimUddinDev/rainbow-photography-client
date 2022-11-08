import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user.email]);

  const handelReviewDelete = (id) => {
    const confirm = window.confirm("Ayr You sure Delete Review");

    if (confirm) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`${user.name} Delete successuly`);
            const remainingReview = myReviews.filter(
              (review) => review._id !== id
            );
            setMyReviews(remainingReview);
          }
        });
    }
  };

  const handelReviewEdite = (id) => {};

  return (
    <div className="px-10 py-5">
      <h2 className="text-2xl text-center py-2 font-bold">
        My Review: {myReviews.length}
      </h2>
      {myReviews.length > 0 && (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User</th>
                <th>Review</th>
                <th>Date</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review) => (
                <tr key={review._id}>
                  <th>
                    <button
                      onClick={() => handelReviewDelete(review._id)}
                      className="text-2xl text-red-700"
                      title="Delete"
                    >
                      <AiFillDelete />
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={review.userImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{review.userName}</div>
                        <div className="text-sm opacity-50">{review.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="message"
                      defaultValue={review.message}
                      className="outline-none"
                    />
                  </td>
                  <td>
                    <div>{review.date?.slice(0, 10)}</div>
                  </td>
                  <th>
                    <button
                      onClick={() => handelReviewEdite(review._id)}
                      className="btn btn-ghost "
                    >
                      <MdOutlineModeEditOutline />
                      Edite
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReview;
