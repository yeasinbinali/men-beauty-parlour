import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBillWave,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return 'Loading...'
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
        {services?.map((service) => {
          return (
            <div className="border-4 p-2">
              <img
                className="w-80 h-60 mx-auto"
                src={service.img}
                alt="service"
              />
              <h3 className="font-bold text-center text-xl my-2">
                {service.title}
              </h3>
              <div className="flex justify-evenly items-center">
                <p>
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  {service.price}
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} />
                  {service.time}
                </p>
                <p>
                  <FontAwesomeIcon icon={faPerson} />
                  {service.barber}
                </p>
              </div>
              <div className="text-center my-2">
                <button className="btn btn-xs bg-accent text-white">
                  <Link to={`/service/${service._id}`}>Appointment</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
