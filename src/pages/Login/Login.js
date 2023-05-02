import React from "react";
import { Link } from "react-router-dom";
import signIn from "../../images/signin.png";

const Login = () => {
  return (
    <div className="md:flex justify-between items-center my-10">
      <div className="md:w-1/2 mx-auto">
        <img src={signIn} alt="signIn" />
      </div>
      <div className="card md:w-1/2">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="text-black">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-black">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <small className="m-0">Forget Password?</small>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary text-white">Login</button>
          </div>
          <p className="text-center">
            New to here?{" "}
            <Link className="text-accent font-bold" to="/signup">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
