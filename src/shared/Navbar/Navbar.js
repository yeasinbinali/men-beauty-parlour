import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/UserContext";
import useAdmin from "../../hooks/useAdmin";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleToast = () => {
    toast.error("Only admin use this route!");
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-50"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              {user && user.uid && (
                <li tabIndex={0}>
                  <Link>
                    Dashboard
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 bg-gray-100">
                    <li>
                      <Link to="/dashboard/myAppointment">My Appointment</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/allUser">All User</Link>
                    </li>
                    <li>
                      {isAdmin ? (
                        <Link to="/dashboard/addService">Add New Service</Link>
                      ) : (
                        <button onClick={handleToast}>Add New Service</button>
                      )}
                    </li>
                    <li>
                      <Link to="/dashboard/givenReview">Your Review</Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <h2 className="text-3xl font-bold">
            Beauty <strong className="text-primary">Parlour</strong>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            {user && user.uid && (
              <li tabIndex={0}>
                <Link>
                  Dashboard
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-gray-100">
                  <li>
                    <Link to="/dashboard/myAppointment">My Appointment</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allUser">All Users</Link>
                  </li>
                  <li>
                    {isAdmin ? (
                      <Link to="/dashboard/addService">Add New Service</Link>
                    ) : (
                      <button onClick={handleToast}>Add New Service</button>
                    )}
                  </li>
                  <li>
                    <Link to="/dashboard/givenReview">Your Review</Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user && user.uid ? (
            <button
              onClick={handleLogout}
              className="btn bg-primary text-white"
            >
              Logout
            </button>
          ) : (
            <button className="btn bg-primary text-white">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
