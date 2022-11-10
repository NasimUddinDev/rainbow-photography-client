import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import { UseTitle } from "../../utils/DaynamicTitle";
import "./MyReview.css";

import ReviewBody from "./ReviewBody/ReviewBody";

const MyReview = () => {
  UseTitle("My Review || Rainbow Photography");

  const { user, logout } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      `https://rainbow-photography-server-nasim0994.vercel.app/reviews?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("RP-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logout();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
        setLoader(false);
      });
  }, [user.email, logout]);

  // Handel Review Delete
  const handelReviewDelete = (id) => {
    const confirm = window.confirm("Ayr You sure Delete Review");

    if (confirm) {
      fetch(
        `https://rainbow-photography-server-nasim0994.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
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

  return (
    <div className="px-16 py-8">
      {loader && <h2 className="text-xl font-bold text-center">Loadding...</h2>}
      {myReviews.length > 0 ? (
        <>
          <h2 className="text-2xl text-center pb-4 font-bold">
            My Review: {myReviews?.length}
          </h2>

          <div className="overflow-x-auto w-full">
            <table className="table w-full border border-stone-200">
              <thead className="review-table-header">
                <tr className="flex flex-col lg:table-row mb-5 lg:mb-0 bg-slate-400 lg:bg-white">
                  <th>Delete</th>
                  <th>Service Info</th>
                  <th>Review</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Update</th>
                </tr>
              </thead>

              <tbody>
                {myReviews.map((review) => (
                  <ReviewBody
                    key={review._id}
                    review={review}
                    handelReviewDelete={handelReviewDelete}
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
