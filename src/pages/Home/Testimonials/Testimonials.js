import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState("");

  useEffect(() => {
    fetch("https://men-beauty-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="lg:my-10 md:my-8 my-6">
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center lg:mb-10 md:mb-8 mb-6">
        Customer <strong className="text-primary">Testimonials</strong>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
        {testimonials &&
          testimonials.slice(0, 3).map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="bg-white p-5 flex flex-col justify-between"
              >
                <p className="text-justify">❝{testimonial.description}❞</p>
                <div className="flex items-center my-6">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt=""
                  />
                  <div className="ml-2">
                    <p className="text-accent font-bold">{testimonial.name}</p>
                    <small>{testimonial.area}</small>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-xl btn-primary text-white">
          <Link to="/reviews">More Reviews</Link>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
