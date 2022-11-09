import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";

import ReviewBody from "./ReviewBody/ReviewBody";

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

  // Handel Review Delete
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

  // Handel Update Review
  const handelReviewEdite = (id) => {};

  return (
    <div className="px-10 py-5">
      {myReviews.length > 0 ? (
        <>
          <h2 className="text-2xl text-center py-2 font-bold">
            My Review: {myReviews.length}
          </h2>

          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Service Info</th>
                  <th>Review</th>
                  <th>Date</th>
                  <th>Update</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {myReviews.map((review) => (
                  <ReviewBody
                    key={review._id}
                    review={review}
                    handelReviewDelete={handelReviewDelete}
                    handelReviewEdite={handelReviewEdite}
                  ></ReviewBody>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h2 className="text-2xl text-center py-2 font-bold">
          No reviews were added
        </h2>
      )}
    </div>
  );
};

export default MyReview;
