import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";

const ReviewForm = ({ service, reviews, setReviews }) => {
  const { user } = useContext(AuthContext);

  const handelReviewForm = (e) => {
    e.preventDefault();

    const userName = user?.displayName;
    const email = user?.email;
    const serviceId = service._id;

    const form = e.target;
    const userImg = form.img.value;
    const message = form.message.value;
    const rating = form.rating.value;

    const fullDate = new Date();
    const date = fullDate.toDateString();
    const time =
      fullDate.getHours() +
      "-" +
      fullDate.getMinutes() +
      "-" +
      fullDate.getSeconds();

    const dateTime = date + " " + time;

    const review = {
      userName,
      userImg,
      message,
      email,
      serviceId,
      rating,
      dateTime,
    };

    fetch(`https://rainbow-photography-server-nasim0994.vercel.app/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          const newReview = [review, ...reviews];
          setReviews(newReview);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {user ? (
        <form onSubmit={handelReviewForm} className="card-body">
          <div className="flex items-center gap-1">
            <img
              src={user?.photoURL}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold -mb-1">{user?.displayName}</h3>
              <small>{user?.email}</small>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="form-control w-1/3">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Number of Rating (out of 5)"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-2/3">
              <label className="label">
                <span className="label-text">Image Link</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="Img Link"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea input-bordered"
              placeholder="Type your review ..."
              required
            ></textarea>
          </div>

          <div className="form-control mt-3">
            <button type="submit" className="btn btn-active">
              Review
            </button>
          </div>
        </form>
      ) : (
        <h2 className="text-center">
          Please{" "}
          <Link to="/login" className="underline text-primary">
            LogIn
          </Link>{" "}
          to add a Review
        </h2>
      )}
    </>
  );
};

export default ReviewForm;
