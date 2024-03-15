import React, { useEffect, useContext } from 'react'
import { Route, useNavigate, Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'

const PrivateRounter = (props) => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    console.log("Check User contextttt: ", user)

    if (user && user.isAuthenticated) {
        // Mảng chứa các role được phép truy cập
        const allowedRoles = ['ADMIN', 'STAFF', 'STAFF_DELIVERY', 'DESIGNER'];

        // Kiểm tra xem user có role nào trong mảng allowedRoles không
        if (allowedRoles.includes(user.role)) {
            return <Outlet />;
        }
    }
    
    // Nếu không hợp lệ, chuyển hướng đến trang đăng nhập
    return <Navigate to="/login" />;

}

export default PrivateRounter
