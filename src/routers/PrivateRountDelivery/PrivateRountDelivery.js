import React, { useEffect, useContext } from 'react'
import { Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const PrivateRountDelivery = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    console.log("Check User contextttt: ", user)

    if (user && user.isAuthenticated === true && user.role === 'ADMIN' || user.role === 'STAFF_DELIVERY') {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRountDelivery
