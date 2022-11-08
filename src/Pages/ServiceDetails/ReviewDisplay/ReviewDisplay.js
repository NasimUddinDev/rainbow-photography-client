import React, { useEffect } from "react";

const ReviewDisplay = ({ reviews, setReviews }) => {
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => console.error(error));
  }, [setReviews]);

  return (
    <>
      {reviews.length >= 1 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-cenetr gap-2 mb-5 border-b-2 pb-3"
          >
            <img
              src={review?.userImg}
              alt=""
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h4 className="font-semibold">{review?.userName}</h4>
              <p className="text-sm text-slate-600">{review?.message}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No Review</p>
      )}
    </>
  );
};

export default ReviewDisplay;