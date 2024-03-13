import React, { useEffect, useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

const Header = () => {
    // const navigate = useNavigate()
    const { user } = useContext(UserContext);
    return (
        <div>
            {/* ========== Left Sidebar Start ========== */}
            <div className="leftside-menu">
                {/* LOGO */}
                <a href="/" className="logo text-center logo-light">
                    <span className="logo-lg">
                        <img src="assets/images/logo.png" alt height={16} />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm.png" alt height={16} />
                    </span>
                </a>
                {/* LOGO */}
                <a href="/" className="logo text-center logo-dark">
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt height={16} />
                    </span>
                    <span className="logo-sm">
                        <img src="assets/images/logo_sm_dark.png" alt height={16} />
                    </span>
                </a>
                <div className="h-100" id="leftside-menu-container" data-simplebar>
                    {/*- Sidemenu */}
                    <ul className="side-nav">
                        <li className="side-nav-title side-nav-item">Navigation</li>
                        {/* <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="/" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
                                <i className="uil-home-alt" />
                                <span> Dashboards </span>
                            </a>
                        </li> */}
                        <li className="side-nav-item">
                            <a href="/" className="side-nav-link">
                            <i className="uil-home-alt" />
                                <span> Dashboards </span>
                            </a>
                        </li>
                        <li className="side-nav-title side-nav-item">Apps</li>
                        <li className="side-nav-item">
                            <a href="/" className="side-nav-link">
                                <i className="uil-calender" />
                                <span> Calendar </span>
                            </a>
                        </li>
                        <li className="side-nav-item">
                            <a href="/" className="side-nav-link">
                                <i className="uil-comments-alt" />
                                <span> Chat </span>
                            </a>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="side-nav-link">
                                <i className="uil uil-tachometer-fast" />
                                <span className="menu-arrow" />
                                <span> User </span>
                            </a>
                            <div className="collapse" id="sidebarCrm">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="/customer">Customers</a>
                                    </li>
                                    <li>
                                        <a href="/seller">Seller</a>
                                    </li>
                                    <li>
                                        <a href="/designer">Designer</a>
                                    </li>
                                    <li>
                                        <a href="/deliver">Deliver</a>
                                    </li>
                                    <li>
                                        <a href="crm-management.html">Management</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
                                <i className="uil-store" />
                                <span> Ecommerce </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarEcommerce">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="/product">Products</a>
                                    </li>
                                    <li>
                                        <a href="/order">Orders</a>
                                    </li>
                                   
                                   
                                </ul>
                            </div>
                        </li>
                        {/* Email */}
                        {/* <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
                                <i className="uil-envelope" />
                                <span> Email </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarEmail">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="apps-email-inbox.html">Inbox</a>
                                    </li>
                                    <li>
                                        <a href="apps-email-read.html">Read Email</a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                        {/* projects */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarProjects" aria-expanded="false" aria-controls="sidebarProjects" className="side-nav-link">
                                <i className="uil-briefcase" />
                                <span> Booking </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarProjects">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="/booking">List Booking</a>
                                    </li>
                                    <li>
                                        <a href="/view-project-booking">ProjectBooking</a>
                                    </li>
                                    {/* <li>
                                        <a href="apps-projects-gantt.html">Gantt <span className="badge rounded-pill bg-light text-dark font-10 float-end">New</span></a>
                                    </li> */}
                                    {/* <li>
                                        <a href="/create-design">Create Design</a>
                                    </li> */}
                                </ul>
                            </div>
                        </li>
                        {/* Social Feed */}
                        {/* <li className="side-nav-item">
                            <a href="apps-social-feed.html" className="side-nav-link">
                                <i className="uil-rss" />
                                <span> Social Feed </span>
                            </a>
                        </li> */}
                        {/* Tasks */}
                        <li className="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarTasks" aria-expanded="false" aria-controls="sidebarTasks" className="side-nav-link">
                                <i className="uil-clipboard-alt" />
                                <span> Blogs </span>
                                <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarTasks">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <a href="/list-blog">List</a>
                                    </li>
                                    {/* <li>
                                        <a href="apps-tasks-details.html">Details</a>
                                    </li>
                                    <li>
                                        <a href="apps-kanban.html">Kanban Board</a>
                                    </li> */}
                                    <li>
                                        <a href="/create-blog">Create Blog</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </li>
                        {/* file manager */}
                        {/* <li className="side-nav-item">
                            <a href="apps-file-manager.html" className="side-nav-link">
                                <i className="uil-folder-plus" />
                                <span> File Manager </span>
                            </a>
                        </li> */}
                    </ul>
                    {/* end Help Box */}
                    {/* End Sidebar */}
                    <div className="clearfix" />
                </div>
                {/* Sidebar -left */}
            </div>
            {/* Left Sidebar End */}

        </div>
    )
}

export default Header
