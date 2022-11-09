import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewDisplay = ({ reviews, setReviews, service }) => {
  useEffect(() => {
    fetch(`https://rainbow-photography-server-nasim0994.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        const thisReview = data.filter(
          (review) => review.serviceId === service._id
        );
        setReviews(thisReview);
      })
      .catch((error) => console.error(error));
  }, [service._id, setReviews]);

  return (
    <>
      {reviews.length >= 1 ? (
        reviews.map((review, index) => (
          <div key={index} className="mb-5 border-b-2 pb-3">
            <div className="flex items-cenetr gap-2">
              <img
                src={review?.userImg}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold -mb-1">{review?.userName}</h4>
                <div className=" flex items-center gap-4 text-slate-400">
                  <div>
                    <small className="flex items-center">
                      Rating: {review.rating > 0 ? review?.rating : 0}
                      <AiFillStar className="text-red-500" />
                    </small>
                  </div>
                  <div>
                    <small>{review?.date}</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Des */}
            <div className="mt-2 ml-2">
              <p className="text-md text-slate-600">{review?.message}</p>
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
