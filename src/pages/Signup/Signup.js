import React from "react";
import { Link } from "react-router-dom";
import signup from "../../images/signup.png";

const Signup = () => {
  return (
    <div className="md:flex justify-between items-center my-10">
      <div className="md:w-1/2 mx-auto">
        <img src={signup} alt="signIn" />
      </div>
      <div className="card md:w-1/2">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="text-black">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-black">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-black">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-3">
            <button className="btn btn-primary text-white">Login</button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-accent font-bold" to="/login">
              Login
            </Link>
          </p>
          <div className="divider m-0">OR</div>
          <div className='text-center'>
            <button className='btn btn-accent text-white'>Google Sign-In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
