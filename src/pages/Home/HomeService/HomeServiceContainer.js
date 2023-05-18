import React, { useContext } from "react";
import {
  faClock,
  faMoneyBillWave,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext";

const HomeServiceContainer = ({ service }) => {
  const { user } = useContext(AuthContext);
  const { img, title, time, price, barber } = service;

  return (
    <div className="border-4 p-2">
      <img className="w-80 h-60 mx-auto" src={img} alt="service" />
      <h3 className="font-bold text-center text-xl my-2">{title}</h3>
      <div className="flex justify-evenly items-center">
        <p>
          <FontAwesomeIcon icon={faMoneyBillWave} />
          {price}
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} />
          {time}
        </p>
        <p>
          <FontAwesomeIcon icon={faPerson} />
          {barber}
        </p>
      </div>
      <div className="text-center my-2">
        {user && user.uid ? (
          <button className="btn btn-xs bg-accent text-white">
            <Link to={`/service/${service._id}`}>Appointment</Link>
          </button>
        ) : (
          <button className="btn btn-xs bg-accent text-white">
            <Link to="/login">Appointment</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeServiceContainer;
