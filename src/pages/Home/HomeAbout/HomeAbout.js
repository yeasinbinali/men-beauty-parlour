import React from "react";
import HomeAboutImg from "../../../images/homeImg.png";

const HomeAbout = () => {
  return (
    <div className="md:flex justify-between items-center px-3">
      <img className='lg:w-full mx-auto md:w-1/2' src={HomeAboutImg} alt="" />
      <div>
        <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold'>
          Let us handle your screen{" "}
          <strong className="text-primary">Professionally</strong>
        </h2>
        <p className='text-justify my-5'>
          A beauty salon is an establishment that offers a variety of cosmetic
          treatments and cosmetic services for men. Beauty salons may
          offer a variety of services including professional hair cutting and
          styling, manicures and pedicures, and often cosmetics, makeup and
          makeovers.
        </p>
        <div className='flex justify-between items-center'>
            <p><h2 className='md:text-3xl text-2xl font-bold text-accent'>500+</h2><small>Happy Customer</small></p>
            <p><h2 className='md:text-3xl text-2xl font-bold text-accent'>15+</h2><small>Total Services</small></p>
            <p><h2 className='md:text-3xl text-2xl font-bold text-accent'>2.5k+</h2><small>Youtube Subscribers</small></p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
