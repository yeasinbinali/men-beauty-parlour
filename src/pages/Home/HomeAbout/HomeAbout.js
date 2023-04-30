import React from "react";
import HomeAboutImg from "../../../images/homeImg.png";

const HomeAbout = () => {
  return (
    <div className="lg:flex justify-between items-center">
      <img className='w-full mx-auto' src={HomeAboutImg} alt="" />
      <div>
        <h2 className='text-4xl font-bold'>
          Let us handle your screen{" "}
          <strong className="text-primary">Professionally</strong>
        </h2>
        <p className='text-justify my-5'>
          A beauty salon is an establishment that offers a variety of cosmetic
          treatments and cosmetic services for men and women. Beauty salons may
          offer a variety of services including professional hair cutting and
          styling, manicures and pedicures, and often cosmetics, makeup and
          makeovers.
        </p>
        <div className='flex justify-between items-center'>
            <p><h2 className='text-3xl font-bold text-accent'>500+</h2>Happy Customer</p>
            <p><h2 className='text-3xl font-bold text-accent'>15+</h2>Total Services</p>
            <p><h2 className='text-3xl font-bold text-accent'>2.5k+</h2>Youtube Subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
