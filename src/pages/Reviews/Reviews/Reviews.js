import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [testimonials, setTestimonials] = useState("");

  useEffect(() => {
    fetch("https://men-beauty-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="my-5 px-3">
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center lg:mb-10 md:mb-8 mb-6">
        Customer <strong className="text-primary">Reviews</strong>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {testimonials &&
          testimonials.map((testimonial) => {
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
    </div>
  );
};

export default Reviews;
