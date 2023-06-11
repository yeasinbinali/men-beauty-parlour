import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const GivenReview = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgBB_key;

  const handleReview = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(data);
        if (imgData.success) {
          const opinionDetail = {
            name: data.name,
            image: imgData.data.url,
            area: data.address,
            description: data.opinion,
          };
          fetch("https://men-beauty-server.vercel.app/reviews", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(opinionDetail),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(
                  `Thanks ${data.name}, Your review added successfully!`
                );
                navigate("/reviews");
              }
            });
        }
      });
  };

  return (
    <div className="md:w-1/2 mx-auto px-3">
      <h2 className="lg:text-4xl md:text-3xl text-2xl mt-3 mb-4 text-center">
        Give Your <strong className="text-primary font-bold">Opinion</strong>
      </h2>
      <form onSubmit={handleSubmit(handleReview)}>
        {/* Name */}
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: true,
              minLength: 3,
            })}
          />
          {errors.name?.type === "required" && (
            <small className="text-red-600" role="alert">
              Name is required
            </small>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <small className="text-red-600" role="alert">
              Min Length 3
            </small>
          )}
        </div>
        {/* Address */}
        <div className="mb-2">
          <label htmlFor="address">Address</label>
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Your Address"
            {...register("address", {
              required: true,
            })}
          />
          {errors.name?.type === "required" && (
            <small className="text-red-600" role="alert">
              Address is required
            </small>
          )}
        </div>
        {/* image */}
        <div className="mb-2">
          <label htmlFor="image">Photo</label>
          <input
            type="file"
            className="input input-bordered w-full"
            {...register("image", {
              required: true,
            })}
          />
          {errors.image?.type === "required" && (
            <small className="text-red-600" role="alert">
              Image is required
            </small>
          )}
        </div>
        {/* Message */}
        <div>
          <label htmlFor="opinion">Opinion</label>
          <textarea
            type="text"
            className="textarea textarea-bordered w-full h-24"
            placeholder="Your Opinion"
            {...register("opinion", {
              required: true,
            })}
          />
          {errors.time?.type === "required" && (
            <small className="text-red-600" role="alert">
              Your Opinion is required
            </small>
          )}
        </div>
        <br />
        {/* submit btn */}
        <div className="text-center">
          <input
            value="Add Review"
            type="submit"
            className="btn btn-primary text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default GivenReview;
