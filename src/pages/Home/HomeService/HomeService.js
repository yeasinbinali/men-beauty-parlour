import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import HomeServiceContainer from "./HomeServiceContainer";

const HomeServices = () => {
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="lg:my-10 md:my-8 my-6">
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center">
        Our <strong className="text-primary">Services</strong>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5 px-3">
        {services &&
          services
            .slice(0, 3)
            .map((service) => (
              <HomeServiceContainer
                key={service._id}
                service={service}
              ></HomeServiceContainer>
            ))}
      </div>
      <div className="text-center">
        <button className="btn btn-xl btn-primary text-white">
          <Link to="/services">Explore More 5+</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeServices;
