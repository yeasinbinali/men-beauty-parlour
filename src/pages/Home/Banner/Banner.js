import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../images/bannerImg.png";
import './Banner.css';

const Banner = () => {
  return (
    <div className='md:flex justify-between items-center lg:my-10 md:my-8 my-6 px-3'>
      <div className='md:w-1/2'>
        <h2 id='headline' className='lg:text-5xl md:text-4xl text-3xl font-bold text-white'>Beauty Salon For Every Men</h2>
        <p className='text-justify my-6'>
          A beauty salon is an establishment that offers a variety of cosmetic
          treatments and cosmetic services for men. Beauty salons may
          offer a variety of services including professional hair cutting and
          styling, manicures and pedicures, and often cosmetics, makeup and
          makeovers.
        </p>
        <button className="btn bg-primary text-white"><Link to='/services'>Get on Appointment</Link></button>
      </div>
      <div>
        <img className='w-full md:mt-0 mt-5' src={bannerImg} alt='' />
      </div>
    </div>
  );
};

export default Banner;
