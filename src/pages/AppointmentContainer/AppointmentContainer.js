import { differenceInCalendarDays, format } from "date-fns";
import React, { useState, useContext } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/UserContext";
import toast from 'react-hot-toast';

const AppointmentContainer = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
  const today = new Date();
  const {user} = useContext(AuthContext);
  const [selected, setSelected] = useState(today);
  const service = useLoaderData();
  const { price, title, slots } = service;
  const navigate = useNavigate();

  const footer = selected ? (
    <p>
      You selected <b className="text-primary">{format(selected, "PPP")}</b>
    </p>
  ) : (
    <p>Please pick a day.</p>
  );

  function isPastDate(date) {
    return differenceInCalendarDays(date, new Date()) < 0;
  }

  const handleBooking = data => {
    const booking = {
      serviceName: title,
      name: data.name,
      email: user?.email,
      phone: data.phone,
      date: format(selected, "PPP"),
      slot: data.slot,
      price: data.price
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        console.log(data);
        navigate('/dashboard/myAppointment');
        toast.success('Booking confirmed');
      }
    })
  }

  return (
    <div className="lg:flex justify-between items-center">
      <div className='lg:w-fit md:w-60 sm:w-60 mx-auto lg:px-10 md:px-0 px-10'>
        <DayPicker
          styles={{
            caption: {
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
              marginBottom: "4px",
            },
            head_cell: { padding: "10px" },
            cell: { padding: "10px" },
            tfoot: { fontSize: "20px" }
          }}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          disabled={isPastDate}
          required
        />
      </div>
      <form onSubmit={handleSubmit(handleBooking)} className="text-center my-5">
        <h2 className="text-2xl font-bold mb-5">
          Your selected service:{" "}
          <strong className="text-primary">{title}</strong>
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="input input-bordered w-full lg:max-w-xl md:max-w-sm mb-2"
          required
        />
        <input
          type="text"
          {...register("email",
          {value:`${user?.email}`}
          )}
          className="input input-bordered w-full lg:max-w-xl md:max-w-sm mb-2"
          required
          readOnly
        />
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phone")}
          className="input input-bordered w-full lg:max-w-xl md:max-w-sm mb-2"
          required
        />
        <input
          type="text"
          value={`${format(selected, "PPP")}`}
          {...register("date")}
          className="input input-bordered w-full lg:max-w-xl md:max-w-sm mb-2"
          readOnly
        />
        <select {...register("slot")} className="select select-bordered w-full lg:max-w-xl md:max-w-sm mb-2">
          <option selected>{slots[0]}</option>
          {
            slots.map(slot => <option>{slot}</option>)
          }
        </select>
        <input
          type="text"
          {...register("price", 
          {value:`${price}`}
          )}
          className="input input-bordered w-full lg:max-w-xl md:max-w-sm mb-2"
          readOnly
        /><br/>
        <button className='btn btn-primary btn-wide text-white my-2'>Submit</button>
      </form>
    </div>
  );
};

export default AppointmentContainer;
