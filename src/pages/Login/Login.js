import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router';
import { Typewriter } from "react-simple-typewriter";
import signIn from "../../images/signin.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {loginUser} = useContext(AuthContext);
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
    .then(result => {
      const user = result.user;
      navigate(from, {replace: true});
    })
    .catch(error => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
  };

  return (
    <div className="md:flex justify-between items-center my-10">
      <div className="md:w-1/2 mx-auto">
        <img src={signIn} alt="signIn" />
      </div>
      <div className="card md:w-1/2">
        <div className="card-body">
          <h2 className="md:text-3xl text-2xl text-center font-bold my-5">
            <span>
              <Typewriter
                words={["Login", "Sign In"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="input input-bordered w-full"
                placeholder="Email Address"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <small className="text-red-600" role="alert">
                  Email Address is required
                </small>
              )}
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <small className="text-red-600" role="alert">
                  Password is required
                </small>
              )}
            </div>
            <br />
            {
              error ? <p className='text-center text-red-600 mb-2'>{error}</p> : ''
            }
            {/* submit btn */}
            <input
              value="submit"
              type="submit"
              className="btn btn-primary text-white w-full"
            />
          </form>
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
