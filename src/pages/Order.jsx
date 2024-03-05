import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'

const Order = () => {
    return (
        <div>
         <TopNavbar />
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
                                    <li className="breadcrumb-item active">Orders</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Orders</h4>
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
                                    <div className="col-xl-4">
                                        <div className="text-xl-end mt-xl-0 mt-2">
                                            <button type="button" className="btn btn-danger mb-2 me-2"><i className="mdi mdi-basket me-1" /> Add New Order</button>
                                            <button type="button" className="btn btn-light mb-2">Export</button>
                                        </div>
                                    </div>{/* end col*/}
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
                                                <th>Order ID</th>
                                                <th>Date</th>
                                                <th>Payment Status</th>
                                                <th>Total</th>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck3" />
                                                        <label className="form-check-label" htmlFor="customCheck3">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9707</a> </td>
                                                <td>August 04 2018 <small className="text-muted">08:18 AM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-warning-lighten"><i className="mdi mdi-timer-sand" /> Awaiting Authorization</span></h5>
                                                </td>
                                                <td>
                                                    $1,458.65
                                                </td>
                                                <td>
                                                    Visa
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-warning-lighten">Processing</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck4" />
                                                        <label className="form-check-label" htmlFor="customCheck4">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9706</a> </td>
                                                <td>August 04 2018 <small className="text-muted">10:29 PM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> Paid</span></h5>
                                                </td>
                                                <td>
                                                    $801.99
                                                </td>
                                                <td>
                                                    Credit Card
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-warning-lighten">Processing</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck5" />
                                                        <label className="form-check-label" htmlFor="customCheck5">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9705</a> </td>
                                                <td>August 03 2018 <small className="text-muted">07:56 AM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> Paid</span></h5>
                                                </td>
                                                <td>
                                                    $215.35
                                                </td>
                                                <td>
                                                    Mastercard
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten">Delivered</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck6" />
                                                        <label className="form-check-label" htmlFor="customCheck6">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9704</a> </td>
                                                <td>May 22 2018 <small className="text-muted">07:22 PM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-danger-lighten"><i className="mdi mdi-cancel" /> Payment Failed</span></h5>
                                                </td>
                                                <td>
                                                    $2,514.36
                                                </td>
                                                <td>
                                                    Paypal
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-danger-lighten">Cancelled</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck7" />
                                                        <label className="form-check-label" htmlFor="customCheck7">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9703</a> </td>
                                                <td>April 02 2018 <small className="text-muted">03:02 AM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> Paid</span></h5>
                                                </td>
                                                <td>
                                                    $183.20
                                                </td>
                                                <td>
                                                    Payoneer
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck8" />
                                                        <label className="form-check-label" htmlFor="customCheck8">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9702</a> </td>
                                                <td>March 18 2018 <small className="text-muted">11:19 PM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-warning-lighten"><i className="mdi mdi-timer-sand" /> Awaiting Authorization</span></h5>
                                                </td>
                                                <td>
                                                    $1,768.41
                                                </td>
                                                <td>
                                                    Visa
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-warning-lighten">Processing</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck9" />
                                                        <label className="form-check-label" htmlFor="customCheck9">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9701</a> </td>
                                                <td>February 01 2018 <small className="text-muted">07:22 AM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-info-lighten"><i className="mdi mdi-cash" /> Unpaid</span></h5>
                                                </td>
                                                <td>
                                                    $3,582.99
                                                </td>
                                                <td>
                                                    Paypal
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck10" />
                                                        <label className="form-check-label" htmlFor="customCheck10">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9700</a> </td>
                                                <td>January 22 2018 <small className="text-muted">08:09 PM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> Paid</span></h5>
                                                </td>
                                                <td>
                                                    $923.95
                                                </td>
                                                <td>
                                                    Credit Card
                                                </td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten">Delivered</span></h5>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck11" />
                                                        <label className="form-check-label" htmlFor="customCheck11">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#BM9699</a> </td>
                                                <td>January 17 2018 <small className="text-muted">02:30 PM</small></td>
                                                <td>
                                                    <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> Paid</span></h5>
                                                </td>
                                                <td>
                                                    $5,177.68
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

export default Order