import React from 'react'

const Home = () => {
    return (
        <>
            <div className="content">
                {/* Topbar Start */}
                <div className="navbar-custom">
                    <ul className="list-unstyled topbar-menu float-end mb-0">
                        <li className="dropdown notification-list d-lg-none">
                            <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="dripicons-search noti-icon" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                <form className="p-3">
                                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                </form>
                            </div>
                        </li>
                        <li className="dropdown notification-list topbar-dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <img src="assets/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height={12} />
                                <span className="align-middle d-none d-sm-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
                                </a>
                            </div>
                        </li>
                        <li className="dropdown notification-list">
                            <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="dripicons-bell noti-icon" />
                                <span className="noti-icon-badge" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
                                {/* item*/}
                                <div className="dropdown-item noti-title px-3">
                                    <h5 className="m-0">
                                        <span className="float-end">
                                            <a href="javascript: void(0);" className="text-dark">
                                                <small>Clear All</small>
                                            </a>
                                        </span>Notification
                                    </h5>
                                </div>
                                <div className="px-3" style={{ maxHeight: 300 }} data-simplebar>
                                    <h5 className="text-muted font-13 fw-normal mt-0">Today</h5>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon bg-primary">
                                                        <i className="mdi mdi-comment-account-outline" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon bg-info">
                                                        <i className="mdi mdi-account-plus" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Admin <small className="fw-normal text-muted ms-1">1 hours ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">New user registered</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <h5 className="text-muted font-13 fw-normal mt-0">Yesterday</h5>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon">
                                                        <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Cristina Pride <small className="fw-normal text-muted ms-1">1 day ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <h5 className="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon bg-primary">
                                                        <i className="mdi mdi-comment-account-outline" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Datacorp</h5>
                                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    {/* item*/}
                                    <a href="javascript:void(0);" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close" /></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon">
                                                        <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                                                    <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="text-center">
                                        <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0" />
                                    </div>
                                </div>
                                {/* All*/}
                                <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item border-top border-light py-2">
                                    View All
                                </a>
                            </div>
                        </li>
                        <li className="dropdown notification-list d-none d-sm-inline-block">
                            <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="dripicons-view-apps noti-icon" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                                <div className="p-2">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/slack.png" alt="slack" />
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/github.png" alt="Github" />
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/g-suite.png" alt="G Suite" />
                                                <span>G Suite</span>
                                            </a>
                                        </div>
                                    </div> {/* end row*/}
                                </div>
                            </div>
                        </li>
                        <li className="notification-list">
                            <a className="nav-link end-bar-toggle" href="javascript: void(0);">
                                <i className="dripicons-gear noti-icon" />
                            </a>
                        </li>
                        <li className="dropdown notification-list">
                            <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <span className="account-user-avatar">
                                    <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle" />
                                </span>
                                <span>
                                    <span className="account-user-name">Dominic Keller</span>
                                    <span className="account-position">Founder</span>
                                </span>
                            </a>
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
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="mdi mdi-logout me-1" />
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="button-menu-mobile open-left">
                        <i className="mdi mdi-menu" />
                    </button>
                    <div className="app-search dropdown d-none d-lg-block">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                                <span className="mdi mdi-magnify search-icon" />
                                <button className="input-group-text btn-primary" type="submit">Search</button>
                            </div>
                        </form>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                            </div>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="uil-notes font-16 me-1" />
                                <span>Analytics Report</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="uil-life-ring font-16 me-1" />
                                <span>How can I help you?</span>
                            </a>
                            {/* item*/}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="uil-cog font-16 me-1" />
                                <span>User profile settings</span>
                            </a>
                            {/* item*/}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                            </div>
                            <div className="notification-list">
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex">
                                        <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height={32} />
                                        <div className="w-100">
                                            <h5 className="m-0 font-14">Erwin Brown</h5>
                                            <span className="font-12 mb-0">UI Designer</span>
                                        </div>
                                    </div>
                                </a>
                                {/* item*/}
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex">
                                        <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height={32} />
                                        <div className="w-100">
                                            <h5 className="m-0 font-14">Jacob Deo</h5>
                                            <span className="font-12 mb-0">Developer</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Topbar */}
                {/* Start Content*/}
                <div className="container-fluid">
                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <form className="d-flex">
                                        <div className="input-group">
                                            <input type="text" className="form-control form-control-light" id="dash-daterange" />
                                            <span className="input-group-text bg-primary border-primary text-white">
                                                <i className="mdi mdi-calendar-range font-13" />
                                            </span>
                                        </div>
                                        <a href="javascript: void(0);" className="btn btn-primary ms-2">
                                            <i className="mdi mdi-autorenew" />
                                        </a>
                                        <a href="javascript: void(0);" className="btn btn-primary ms-1">
                                            <i className="mdi mdi-filter-variant" />
                                        </a>
                                    </form>
                                </div>
                                <h4 className="page-title">Dashboard</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card widget-flat">
                                        <div className="card-body">
                                            <div className="float-end">
                                                <i className="mdi mdi-account-multiple widget-icon" />
                                            </div>
                                            <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Customers</h5>
                                            <h3 className="mt-3 mb-3">36,254</h3>
                                            <p className="mb-0 text-muted">
                                                <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 5.27%</span>
                                                <span className="text-nowrap">Since last month</span>
                                            </p>
                                        </div> {/* end card-body*/}
                                    </div> {/* end card*/}
                                </div> {/* end col*/}
                                <div className="col-sm-6">
                                    <div className="card widget-flat">
                                        <div className="card-body">
                                            <div className="float-end">
                                                <i className="mdi mdi-cart-plus widget-icon" />
                                            </div>
                                            <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Orders</h5>
                                            <h3 className="mt-3 mb-3">5,543</h3>
                                            <p className="mb-0 text-muted">
                                                <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 1.08%</span>
                                                <span className="text-nowrap">Since last month</span>
                                            </p>
                                        </div> {/* end card-body*/}
                                    </div> {/* end card*/}
                                </div> {/* end col*/}
                            </div> {/* end row */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card widget-flat">
                                        <div className="card-body">
                                            <div className="float-end">
                                                <i className="mdi mdi-currency-usd widget-icon" />
                                            </div>
                                            <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                                            <h3 className="mt-3 mb-3">$6,254</h3>
                                            <p className="mb-0 text-muted">
                                                <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> 7.00%</span>
                                                <span className="text-nowrap">Since last month</span>
                                            </p>
                                        </div> {/* end card-body*/}
                                    </div> {/* end card*/}
                                </div> {/* end col*/}
                                <div className="col-sm-6">
                                    <div className="card widget-flat">
                                        <div className="card-body">
                                            <div className="float-end">
                                                <i className="mdi mdi-pulse widget-icon" />
                                            </div>
                                            <h5 className="text-muted fw-normal mt-0" title="Growth">Growth</h5>
                                            <h3 className="mt-3 mb-3">+ 30.56%</h3>
                                            <p className="mb-0 text-muted">
                                                <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> 4.87%</span>
                                                <span className="text-nowrap">Since last month</span>
                                            </p>
                                        </div> {/* end card-body*/}
                                    </div> {/* end card*/}
                                </div> {/* end col*/}
                            </div> {/* end row */}
                        </div> {/* end col */}
                        <div className="col-xl-7 col-lg-6">
                            <div className="card card-h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="header-title">Projections Vs Actuals</h4>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div dir="ltr">
                                        <div id="high-performing-product" className="apex-charts" data-colors="#727cf5,#e3eaef" />
                                    </div>
                                </div> {/* end card-body*/}
                            </div> {/* end card*/}
                        </div> {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="header-title">Revenue</h4>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chart-content-bg">
                                        <div className="row text-center">
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 mt-3">Current Week</p>
                                                <h2 className="fw-normal mb-3">
                                                    <small className="mdi mdi-checkbox-blank-circle text-primary align-middle me-1" />
                                                    <span>$58,254</span>
                                                </h2>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="text-muted mb-0 mt-3">Previous Week</p>
                                                <h2 className="fw-normal mb-3">
                                                    <small className="mdi mdi-checkbox-blank-circle text-success align-middle me-1" />
                                                    <span>$69,524</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dash-item-overlay d-none d-md-block" dir="ltr">
                                        <h5>Today's Earning: $2,562.30</h5>
                                        <p className="text-muted font-13 mb-3 mt-2">Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                            Etiam rhoncus...</p>
                                        <a href="javascript: void(0);" className="btn btn-outline-primary">View Statements
                                            <i className="mdi mdi-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div dir="ltr">
                                        <div id="revenue-chart" className="apex-charts mt-3" data-colors="#727cf5,#0acf97" />
                                    </div>
                                </div> {/* end card-body*/}
                            </div> {/* end card*/}
                        </div> {/* end col*/}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="header-title">Revenue By Location</h4>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-3">
                                        <div id="world-map-markers" style={{ height: 224 }} />
                                    </div>
                                    <h5 className="mb-1 mt-0 fw-normal">New York</h5>
                                    <div className="progress-w-percent">
                                        <span className="progress-value fw-bold">72k </span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
                                    <div className="progress-w-percent">
                                        <span className="progress-value fw-bold">39k </span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar" role="progressbar" style={{ width: '39%' }} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
                                    <div className="progress-w-percent">
                                        <span className="progress-value fw-bold">25k </span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar" role="progressbar" style={{ width: '39%' }} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
                                    <div className="progress-w-percent mb-0">
                                        <span className="progress-value fw-bold">61k </span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar" role="progressbar" style={{ width: '61%' }} aria-valuenow={61} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div> {/* end card-body*/}
                            </div> {/* end card*/}
                        </div> {/* end col*/}
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="header-title">Top Selling Products</h4>
                                        <a href="javascript:void(0);" className="btn btn-sm btn-link">Export <i className="mdi mdi-download ms-1" /></a>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-centered table-nowrap table-hover mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">ASOS Ridley High Waist</h5>
                                                        <span className="text-muted font-13">07 April 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$79.49</h5>
                                                        <span className="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">82</h5>
                                                        <span className="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$6,518.18</h5>
                                                        <span className="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">Marco Lightweight Shirt</h5>
                                                        <span className="text-muted font-13">25 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$128.50</h5>
                                                        <span className="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">37</h5>
                                                        <span className="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
                                                        <span className="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">Half Sleeve Shirt</h5>
                                                        <span className="text-muted font-13">17 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$39.99</h5>
                                                        <span className="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">64</h5>
                                                        <span className="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$2,559.36</h5>
                                                        <span className="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">Lightweight Jacket</h5>
                                                        <span className="text-muted font-13">12 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$20.00</h5>
                                                        <span className="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">184</h5>
                                                        <span className="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
                                                        <span className="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">Marco Shoes</h5>
                                                        <span className="text-muted font-13">05 March 2018</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                                                        <span className="text-muted font-13">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">69</h5>
                                                        <span className="text-muted font-13">Quantity</span>
                                                    </td>
                                                    <td>
                                                        <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                                                        <span className="text-muted font-13">Amount</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> {/* end table-responsive*/}
                                </div> {/* end card-body*/}
                            </div> {/* end card*/}
                        </div> {/* end col*/}
                        <div className="col-xl-3 col-lg-6 order-lg-1">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="header-title">Total Sales</h4>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="average-sales" className="apex-charts mb-4 mt-3" data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00" />
                                    <div className="chart-widget-list">
                                        <p>
                                            <i className="mdi mdi-square text-primary" /> Direct
                                            <span className="float-end">$300.56</span>
                                        </p>
                                        <p>
                                            <i className="mdi mdi-square text-danger" /> Affilliate
                                            <span className="float-end">$135.18</span>
                                        </p>
                                        <p>
                                            <i className="mdi mdi-square text-success" /> Sponsored
                                            <span className="float-end">$48.96</span>
                                        </p>
                                        <p className="mb-0">
                                            <i className="mdi mdi-square text-warning" /> E-mail
                                            <span className="float-end">$154.02</span>
                                        </p>
                                    </div>
                                </div> {/* end card-body*/}
                            </div> {/* end card*/}
                        </div> {/* end col*/}
                        <div className="col-xl-3 col-lg-6 order-lg-1">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h4 className="header-title">Recent Activity</h4>
                                        <div className="dropdown">
                                            <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="mdi mdi-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                                                {/* item*/}
                                                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body py-0" data-simplebar style={{ maxHeight: 405 }}>
                                    <div className="timeline-alt py-0">
                                        <div className="timeline-item">
                                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-info fw-bold mb-1 d-block">You sold an item</a>
                                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">5 minutes ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-primary fw-bold mb-1 d-block">Product on the Bootstrap Market</a>
                                                <small>Dave Gamache added
                                                    <span className="fw-bold">Admin Dashboard</span>
                                                </small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">30 minutes ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-info fw-bold mb-1 d-block">Robert Delaney</a>
                                                <small>Send you message
                                                    <span className="fw-bold">"Are you there?"</span>
                                                </small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">2 hours ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-primary fw-bold mb-1 d-block">Audrey Tobey</a>
                                                <small>Uploaded a photo
                                                    <span className="fw-bold">"Error.jpg"</span>
                                                </small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">14 hours ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-info fw-bold mb-1 d-block">You sold an item</a>
                                                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">16 hours ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-primary fw-bold mb-1 d-block">Product on the Bootstrap Market</a>
                                                <small>Dave Gamache added
                                                    <span className="fw-bold">Admin Dashboard</span>
                                                </small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">22 hours ago</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                                            <div className="timeline-item-info">
                                                <a href="javascript:void(0);" className="text-info fw-bold mb-1 d-block">Robert Delaney</a>
                                                <small>Send you message
                                                    <span className="fw-bold">"Are you there?"</span>
                                                </small>
                                                <p className="mb-0 pb-2">
                                                    <small className="text-muted">2 days ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end timeline */}
                                </div> {/* end slimscroll */}
                            </div>
                            {/* end card*/}
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
                {/* container */}
            </div>
            {/* content */}

        </>
    )
}

export default Home
