import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import "./MyAppointment.css";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-5 px-3">
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center mb-4">
        My <strong className="text-primary font-bold">Appointment</strong>
      </h2>
      <div className='overflow-x-auto'>
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th>ID</th>
              <th>SERVICE</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>FEE</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings && bookings?.length === 0 ? (
              <p className="text-center text-2xl">You have no booking</p>
            ) : (
              bookings?.map((booking, i) => {
                return (
                  <tr key={booking._id}>
                    <td>{i + 1}</td>
                    <td>{booking.serviceName}</td>
                    <td>{booking.date}</td>
                    <td>{booking.slot}</td>
                    <td>{booking.price}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>
                      {!booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-xs btn-primary">
                            Pay
                          </button>
                        </Link>
                      )}
                      {booking.paid && (
                        <span className="text-primary">Paid</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
