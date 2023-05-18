import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router";
import { AuthContext } from "../../contexts/UserContext";

const DisplayError = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const {logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='text-center'>
      <h1 className='font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <p className='text-3xl font-bold'>Please <button onClick={handleLogout}>Logout</button> and log back in</p>
    </div>
  );
};

export default DisplayError;
