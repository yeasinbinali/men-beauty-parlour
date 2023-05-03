import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import signup from "../../images/signup.png";
import { useForm } from "react-hook-form";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../contexts/UserContext";


const Signup = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const {createUser, googleSignIn} = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      navigate('/');
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleSignUp = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    createUser(email, password)
    .then(result => {
      const user = result.user;
      navigate('/');
      console.log(user);
    })
    .catch(error => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  return (
    <div className="md:flex justify-between items-center my-10">
      <div className="md:w-1/2 mx-auto">
        <img src={signup} alt="signIn" />
      </div>
      <div className="card md:w-1/2">
        <div className="card-body">
          <h2 className="text-3xl text-center font-bold my-5">
            <span>
              <Typewriter
                words={["Create an Account", "Sign Up"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            {/* Name */}
            <div className='mb-3'>
              <label htmlFor="name">Name</label>
              <input
                className="input input-bordered w-full"
                placeholder="Your Name"
                type="text"
                {...register("name", {
                  required: true,
                  minLength: { value: 5 },
                })}
              />
              {errors.name?.type === "required" && (
                <small className="text-red-600" role="alert">
                  Your Name is required
                </small>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <small className="text-red-600" role="alert">
                  Min Length 5
                </small>
              )}
            </div>
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
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters and longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[0-9])/,
                    message: "Use one uppercase and one number",
                  },
                })}
              />
              {errors.password && (
                <small className="text-red-600" role="alert">
                  {errors.password.message}
                </small>
              )}
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
            Already have an account?{" "}
            <Link className="text-accent font-bold" to="/login">
              Login
            </Link>
          </p>
          <div className="divider m-0">OR</div>
          {/* google signin btn */}
          <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-accent text-white">
              Google Sign-In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
