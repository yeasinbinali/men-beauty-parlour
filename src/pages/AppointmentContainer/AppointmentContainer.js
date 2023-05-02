import { differenceInCalendarDays, format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useLoaderData } from "react-router";

const AppointmentContainer = () => {
  const today = new Date();
  const [selected, setSelected] = useState(today);
  const service = useLoaderData();
  console.log(service);
  const { price, title, slots } = service;

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

  return (
    <div className="lg:flex justify-evenly items-center">
      <div className='lg:w-fit md:w-60 sm:w-60 mx-auto'>
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
            tfoot: { fontSize: "20px" },
          }}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          disabled={isPastDate}
          required
        />
      </div>
      <form className="text-center my-5">
        <h2 className="text-2xl font-bold mb-5">
          Your selected service:{" "}
          <strong className="text-primary">{title}</strong>
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xl mb-2"
          required
        />
        <input
          type="text"
          placeholder="Email Address"
          className="input input-bordered w-full max-w-xl mb-2"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xl mb-2"
          required
        />
        <input
          type="text"
          placeholder={`${format(selected, "PPP")}`}
          className="input input-bordered w-full max-w-xl mb-2"
          readOnly
        />
        <select className="select select-bordered w-full max-w-xl mb-2">
          <option selected>{slots[0]}</option>
          {
            slots.map(slot => <option>{slot}</option>)
          }
        </select>
        <input
          type="text"
          placeholder={price}
          className="input input-bordered w-full max-w-xl mb-2"
          readOnly
        /><br/>
        <button className='btn btn-primary btn-wide text-white'>Submit</button>
      </form>
    </div>
  );
};

export default AppointmentContainer;
