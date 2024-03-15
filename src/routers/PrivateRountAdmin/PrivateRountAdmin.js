import React, { useEffect, useContext } from 'react'
import { Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const PrivateRountAdmin = (props) => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    console.log("Check User contextttt: ", user)
  
    if (user && user.isAuthenticated === true && user.role === 'ADMIN') {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
}

export default PrivateRountAdmin
