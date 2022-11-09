import React from "react";
import { UseTitle } from "../../utils/DaynamicTitle";

const AddService = () => {
  UseTitle("Add Service || Rainbow Photography");

  const handelNewService = (e) => {
    e.preventDefault();

    const form = e.target;
    const picture = form.picture.value;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;

    const service = { picture, title, price, description };

    fetch(`https://rainbow-photography-server-nasim0994.vercel.app/services`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("service added");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="md:px-10 py-5">
      <h2 className="text-center text-3xl font-bold">Add New Service</h2>

      <form
        onSubmit={handelNewService}
        className="card-body lg:w-1/2 m-auto bg-slate-100 rounded-md"
      >
        <div className="lg:flex items-center gap-4">
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Service Image Link</span>
            </label>
            <input
              type="text"
              name="picture"
              placeholder="Image link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control lg:w-1/2">
            <label className="label">
              <span className="label-text">Service Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Service Title"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Service Price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Description</span>
          </label>
          <textarea
            name="description"
            className="textarea input-bordered"
            placeholder="Service Description"
            required
          ></textarea>
        </div>

        <div className="form-control mt-3">
          <button type="submit" className="btn btn-active">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
