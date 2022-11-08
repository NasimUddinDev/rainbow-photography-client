import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";

const ReviewForm = ({ service, reviews, setReviews }) => {
  const { user } = useContext(AuthContext);

  const handelReviewForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.name.value;
    const userImg = form.img.value;
    const message = form.message.value;

    const email = user?.email;
    const serviceId = service._id;

    const date = new Date();

    const review = { userName, userImg, message, email, serviceId, date };

    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          const newReview = [...reviews, review];
          setReviews(newReview);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {user ? (
        <form onSubmit={handelReviewForm} className="card-body">
          <div className="flex items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control w-1/2">
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
