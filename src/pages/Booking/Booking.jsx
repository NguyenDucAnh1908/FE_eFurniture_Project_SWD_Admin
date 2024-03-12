import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch bookings from the backend when the component mounts
        axios.get('/api/bookings/all')
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                console.error('Error fetching bookings:', error);
            });
    }, []);

    const fetchBookings(async = ()=>{
        
    })

    return (
        <div>
            {/* Start Content*/}
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">eCommerce</a></li>
                                    <li className="breadcrumb-item active">Booking</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Booking</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-xl-8">
                                        <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                            <div className="col-auto">
                                                <label htmlFor="inputPassword2" className="visually-hidden">Search</label>
                                                <input type="search" className="form-control" id="inputPassword2" placeholder="Search..." />
                                            </div>
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center">
                                                    <label htmlFor="status-select" className="me-2">Status</label>
                                                    <select className="form-select" id="status-select">
                                                        <option selected>Choose...</option>
                                                        <option value={1}>Paid</option>
                                                        <option value={2}>Awaiting Authorization</option>
                                                        <option value={3}>Payment failed</option>
                                                        <option value={4}>Cash On Delivery</option>
                                                        <option value={5}>Fulfilled</option>
                                                        <option value={6}>Unfulfilled</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-centered table-nowrap mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th style={{ width: 20 }}>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                    </div>
                                                </th>
                                                <th>Booking ID</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Username</th>
                                                <th>Payment Method</th>
                                                <th>Order Status</th>
                                                <th style={{ width: 125 }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                        <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9708</a> </td>
                                                <td>
                                                    August 05 2018 <small className="text-muted">10:29 PM</small>
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> Paid</span></h5>
                                                </td>
                                                <td>
                                                    $176.41
                                                </td>
                                                <td>
                                                    Mastercard
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-info-lighten">Shipped</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div> {/* end card-body*/}
                        </div> {/* end card*/}
                    </div> {/* end col */}
                </div>
                {/* end row */}
            </div> {/* container */}

        </div>
    )
}

export default Booking
