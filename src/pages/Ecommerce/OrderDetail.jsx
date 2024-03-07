import React, { useEffect, useState } from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const OrderDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [orderDetail, setOrderDetail] = useState(null);

    useEffect(() => {
        fetchProductDetail();
    }, []);

    const fetchProductDetail = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/orders/${id}`);
            setOrderDetail(res.data);
            //console.log("Check product detail: ", res.data);
        } catch (error) {
            console.error('Error fetching order detail:', error);
        }
    };
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
                                    <li className="breadcrumb-item active">Order Details</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Order Details</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-11">
                        <div className="horizontal-steps mt-4 mb-4 pb-5" id="tooltip-container">
                            <div className="horizontal-steps-content">
                                <div className="step-item">
                                    <span data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="bottom" title="20/08/2018 07:24 PM">Order Placed</span>
                                </div>
                                <div className="step-item current">
                                    <span data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="bottom" title="21/08/2018 11:32 AM">Packed</span>
                                </div>
                                <div className="step-item">
                                    <span>Shipped</span>
                                </div>
                                <div className="step-item">
                                    <span>Delivered</span>
                                </div>
                            </div>
                            <div className="process-line" style={{ width: '33%' }} />
                        </div>
                    </div>
                </div>
                {/* end row */}
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            {orderDetail && (
                                <div className="card-body">
                                    <h4 className="header-title mb-3">Items from Order #{orderDetail.fullName}</h4>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderDetail.order_details.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>The Military Duffle Bag</td>
                                                        <td>{item.quantity}</td>
                                                        <td>${item.price}</td>
                                                        <td>$384</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* end table-responsive */}
                                </div>
                            )}
                        </div>
                    </div> {/* end col */}
                    <div className="col-lg-4">
                        <div className="card">
                            {orderDetail && (
                                <div className="card-body">
                                    <h4 className="header-title mb-3">Order Summary</h4>
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Grand Total :</td>
                                                    <td>$1641</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge :</td>
                                                    <td>$23</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td>$19.22</td>
                                                </tr>
                                                <tr>
                                                    <th>Total :</th>
                                                    <th>$1683.22</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* end table-responsive */}
                                </div>
                            )}
                        </div>
                    </div> {/* end col */}
                </div>
                {/* end row */}
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            {orderDetail && (
                                <div className="card-body">
                                    <h4 className="header-title mb-3">Shipping Information</h4>
                                    <h5>{orderDetail.fullName}</h5>
                                    <address className="mb-0 font-14 address-lg">
                                        {orderDetail.province}, {orderDetail.district}<br />
                                        {orderDetail.ward}, {orderDetail.address}<br />
                                        <abbr title="Phone">Phone:</abbr> {orderDetail.phone_number} <br />
                                        {/* <abbr title="Mobile">M:</abbr> (+01) 12345 67890 */}
                                    </address>
                                </div>
                            )}
                        </div>
                    </div> {/* end col */}
                    <div className="col-lg-4">
                        <div className="card">
                            {orderDetail && (
                                <div className="card-body">

                                    <h4 className="header-title mb-3">Billing Information</h4>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <p className="mb-2"><span className="fw-bold me-2">Payment Type:</span> {orderDetail.payment_method}</p>
                                            <p className="mb-2"><span className="fw-bold me-2">Shipping method:</span> {orderDetail.shipping_method}</p>
                                            <p className="mb-2"><span className="fw-bold me-2">Valid Date:</span> 02/2020</p>
                                            <p className="mb-0"><span className="fw-bold me-2">CVV:</span> xxx</p>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div> {/* end col */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Delivery Info</h4>
                                <div className="text-center">
                                    <i className="mdi mdi-truck-fast h2 text-muted" />
                                    <h5><b>UPS Delivery</b></h5>
                                    <p className="mb-1"><b>Order ID :</b> xxxx235</p>
                                    <p className="mb-0"><b>Payment Mode :</b> COD</p>
                                </div>
                            </div>
                        </div>
                    </div> {/* end col */}
                </div>
                {/* end row */}
            </div> {/* container */}

        </div>
    )
}

export default OrderDetail