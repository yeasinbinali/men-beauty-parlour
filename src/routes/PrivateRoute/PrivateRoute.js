import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <button className="btn loading text-black border-slate-950">Loading..</button>
    }
    
    if(user && user.uid){
        return children;
    }else{
        <Navigate to='/login' state={{from: location }} replace></Navigate>
    }
};

export default PrivateRoute;