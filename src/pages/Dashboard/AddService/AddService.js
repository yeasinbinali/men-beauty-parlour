import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddService = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgBB_key;

  const handleService = (data) => {
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
        if (imgData.success) {
          const serviceDetail = {
            title: data.name,
            price: data.price,
            time: data.time,
            barber: data.barber,
            slots: [
              "8:00am",
              "9:00am",
              "10:00am",
              "11:00am",
              "12:00am",
              "1:00pm",
              "2:00pm",
              "3:00pm",
              "4:00pm",
              "5:00pm",
              "6:00pm",
              "7:00pm",
              "8:00pm",
            ],
            img: imgData.data.url,
          };
          fetch("https://men-beauty-server.vercel.app/services", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(serviceDetail),
          })
            .then((res) => res.json())
            .then((serviceData) => {
              if (serviceData.acknowledged) {
                toast.success(`New service ${data.name}, added successfully!`);
                reset();
                navigate("/services");
              }
            });
        }
      });
  };

  return (
    <div className="md:w-1/2 mx-auto px-3">
      <h2 className="lg:text-4xl md:text-3xl text-2xl mt-3 mb-4 text-center">
        Add <storng className="text-primary font-bold">New</storng> Service
      </h2>
      <form onSubmit={handleSubmit(handleService)}>
        {/* Service Name */}
        <div className="mb-2">
          <label htmlFor="name">Service Name</label>
          <input
            className="input input-bordered w-full"
            placeholder="New Service Name"
            type="text"
            {...register("name", {
              required: true,
              minLength: { value: 5 },
            })}
          />
          {errors.name?.type === "required" && (
            <small className="text-red-600" role="alert">
              Service name is required
            </small>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <small className="text-red-600" role="alert">
              Min Length 5
            </small>
          )}
        </div>
        {/* price */}
        <div className="mb-2">
          <label htmlFor="price">price</label>
          <input
            className="input input-bordered w-full"
            placeholder="$price"
            type="text"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <small className="text-red-600" role="alert">
              $price is required
            </small>
          )}
        </div>
        {/* Time */}
        <div className="mb-2">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Time Needed"
            {...register("time", {
              required: true,
            })}
          />
          {errors.time?.type === "required" && (
            <small className="text-red-600" role="alert">
              Time is required
            </small>
          )}
        </div>
        {/* barber */}
        <div className="mb-2">
          <label htmlFor="barber">Barber</label>
          <br />
          <select
            className="select w-full"
            {...register("barber", {
              required: true,
            })}
          >
            <option disabled selected>
              Select barber
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {errors.barber?.type === "required" && (
            <small className="text-red-600" role="alert">
              Barber is required
            </small>
          )}
        </div>
        {/* image */}
        <div>
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
        <br />
        {/* submit btn */}
        <div className="text-center">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
