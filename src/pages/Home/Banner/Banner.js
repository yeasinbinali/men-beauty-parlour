import React from "react";
import bannerImg from "../../../images/bannerImg.png";

const Banner = () => {
  return (
    <div className='lg:flex justify-between items-center my-10'>
      <div className='lg:w-1/2'>
        <h2 className='text-5xl font-bold'>Beauty Salon For Every Men</h2>
        <p className='text-justify my-8'>
          A beauty salon is an establishment that offers a variety of cosmetic
          treatments and cosmetic services for men and women. Beauty salons may
          offer a variety of services including professional hair cutting and
          styling, manicures and pedicures, and often cosmetics, makeup and
          makeovers.
        </p>
        <button className="btn bg-primary text-white">Get on Appointment</button>
      </div>
      <div>
        <img className='w-full' src={bannerImg} alt='' />
      </div>
    </div>
  );
};

export default Banner;
