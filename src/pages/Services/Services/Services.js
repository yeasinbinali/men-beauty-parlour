import React from "react";
import { useQuery } from "@tanstack/react-query";
import Service from "../Service/Service";

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("https://men-beauty-server.vercel.app/services");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <button className="btn loading text-black border-slate-950">
        Loading..
      </button>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5 px-3">
      {services &&
        services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
    </div>
  );
};

export default Services;
