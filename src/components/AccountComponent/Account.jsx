import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
const Account = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(UserContext);
    const handleLogout = () => {
        logout();
        navigate("/login")
    };
    if (user && user.isAuthenticated === true) {
        return (
            <>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                    {/* item*/}
                    <div className=" dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="mdi mdi-account-circle me-1" />
                        <span>My Account</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="mdi mdi-account-edit me-1" />
                        <span>Settings</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="mdi mdi-lifebuoy me-1" />
                        <span>Support</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="mdi mdi-lock-outline me-1" />
                        <span>Lock Screen</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" 
                    className="dropdown-item notify-item"
                    onClick={handleLogout}
                    >
                        <i className="mdi mdi-logout me-1" />
                        <span>Logout</span>
                    </a>
                </div>
            </>
        )
    }
}

export default Account
