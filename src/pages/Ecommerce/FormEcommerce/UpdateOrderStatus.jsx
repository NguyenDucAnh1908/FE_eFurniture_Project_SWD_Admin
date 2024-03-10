import React, { useEffect, useState, useContext } from 'react'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { dataOrderpaymentStatus, dataStatusOrder } from '../../../services/OrderApi/OrderApi'
import { UserContext } from '../../../context/UserContext'
import './Ecommerce.css'

const UpdateOrderStatus = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const [orderDetail, setOrderDetail] = useState(null);
    const [statusOrder, setStatusOrder] = useState([]);
    const [StatusPaymentOrder, setStatusPaymentOrder] = useState([]);
    const [selectedOrderStatus, setSelectedOrderStatus] = useState({
        id: '',
        name: ''
    });
    const [selectedPaymentStatus, setSelectedPaymentStatus] = useState({
        id: '',
        name: ''
    });
    const user_id = user.account.user.id;
    const [values, setValues] = useState({
        id: parseInt(id),
        user_id: '',
        active: '',
        address: '',
        phone_number: '',
        email: '',
        fullName: '',
        discounts: '',
        notes: '',
        orderStatus: '',
        paymentStatus: '',
        shipping_date: '',
        shipping_method: '',
        province: '',
        district: '',
        ward: '',
        payment_method: '',
        coupon_id: '',
        total_amount: '',
        sub_total: '',
        cart_items: [],
    });
    const [paymentValues, setPaymentValues] = useState({
        paymentStatus: '',
    });

    useEffect(() => {
        fetchOrderStatus();
        fetchOrderPaymentStatus();
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/orders/' + id)
            .then(res => {
                setValues({
                    ...values,
                    user_id: res.data.user_id,
                    address: res.data.address,
                    phone_number: res.data.phone_number,
                    email: res.data.email,
                    fullName: res.data.fullName,
                    active: res.data.active,
                    discounts: res.data.discounts,
                    notes: res.data.notes,
                    orderStatus: res.data.orderStatus.id,
                    paymentStatus: res.data.paymentStatus.id,
                    shipping_date: res.data.shipping_date,
                    shipping_method: res.data.shipping_method,
                    province: res.data.province,
                    district: res.data.district,
                    ward: res.data.ward,
                    payment_method: res.data.payment_method,
                    coupon_id: res.data.couponId,
                    total_amount: res.data.total_amount,
                    sub_total: res.data.sub_total,
                    order_details: res.data.order_details,
                    paymentStatus: res.data.paymentStatus,
                });
                setSelectedOrderStatus({
                    id: res.data.orderStatus.id,
                    name: res.data.orderStatus.name
                });
                setSelectedPaymentStatus({
                    id: res.data.paymentStatus.id,
                    name: res.data.paymentStatus.name
                });
            })
            .catch(err => console.log(err));
    }, [])

    const fetchOrderStatus = async () => {
        try {
            const res = await dataStatusOrder();
            setStatusOrder(res.data);

        } catch (error) {
            console.error('Error fetching order status:', error);
        }
    }
    const fetchOrderPaymentStatus = async () => {
        try {
            const res = await dataOrderpaymentStatus();
            setStatusPaymentOrder(res.data);

        } catch (error) {
            console.error('Error fetching order payment status:', error);
        }
    }

    const handleStatusOrderChange = (event) => {
        const statusOrderId = event.target.value;
        setSelectedOrderStatus({
            id: statusOrderId,
            name: event.target.options[event.target.selectedIndex].text
        });
        setValues({ ...values, orderStatus: parseInt(statusOrderId) });
    };

    const handlePaymentStatusChange = (event) => {
        const paymentStatus = event.target.value;
        setSelectedPaymentStatus({
            id: paymentStatus,
            name: event.target.options[event.target.selectedIndex].text
        });
        setValues({ ...values, paymentStatus: parseInt(paymentStatus) });
    };

    const handleUpdateProduct = async (event) => {
        //event.prevenDefault();
        axios.put('http://localhost:8080/api/v1/orders/' + id, values)
            .then(res => {
                navigate('/update-status-order/' + id);
            })
            .catch(err => console.log(err));
    }

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
                            <div className="card-body">
                                <h4 className="header-title mb-3">Items from Order #{values.fullName}</h4>
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
                                            {/* {values.order_details && values.order_details.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.product.name}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>${item.product.price}</td>
                                                        <td>${item.quantity * item.product.price}</td>
                                                    </tr>
                                                ))} */}
                                            {values.order_details && values.order_details.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.product.name}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${item.product.price}</td>
                                                    <td>${item.quantity * item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* end table-responsive */}
                            </div>
                        </div>
                    </div> {/* end col */}
                    <div className="col-lg-4">
                        <div className="card">
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
                                                <td>${values.sub_total}</td>
                                            </tr>
                                            {/* <tr>
                                            <td>Shipping Charge :</td>
                                            <td>$23</td>
                                        </tr> */}
                                            <tr>
                                                <td>Discount : </td>
                                                <td>- ${values.discounts}</td>
                                            </tr>
                                            <tr>
                                                <th>Total :</th>
                                                <th>${values.total_amount}</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* end table-responsive */}
                            </div>
                        </div>
                    </div> {/* end col */}
                </div>
                {/* end row */}
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Shipping Information</h4>
                                <h5>{values.fullName}</h5>
                                <address className="mb-0 font-14 address-lg">
                                    {values.province}, {values.district}<br />
                                    {values.ward}, {values.address}<br />
                                    <abbr title="Phone">Phone:</abbr> {values.phone_number} <br />
                                    {/* <abbr title="Mobile">M:</abbr> (+01) 12345 67890 */}
                                </address>
                            </div>
                        </div>
                    </div> {/* end col */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">

                                <h4 className="header-title mb-3">Billing Information</h4>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p className="mb-2"><span className="fw-bold me-2">Payment Type:</span> {values.payment_method}</p>
                                        <p className="mb-2"><span className="fw-bold me-2">Shipping method:</span> {values.shipping_method}</p>
                                        <p className="mb-2"><span className="fw-bold me-2">Shipping Date:</span> {values.shipping_date}</p>
                                        <p className="mb-0"><span className="fw-bold me-2">Payment status:</span> {values.paymentStatus.name}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* end col */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title mb-3">Delivery Info</h4>
                                {/* <div className="text-center">
                                    <i className="mdi mdi-truck-fast h2 text-muted" />
                                    <h5><b>UPS Delivery</b></h5>
                                    <p className="mb-1"><b>Order ID :</b> xxxx235</p>
                                    <p className="mb-0"><b>Payment Mode :</b> COD</p>
                                </div> */}
                                <select className="select-box" value={selectedOrderStatus.id} onChange={handleStatusOrderChange}>
                                    <option selected>Open this select menu</option>
                                    {statusOrder && statusOrder.length > 0 &&
                                        statusOrder.map((statusOrderItem, index) => {
                                            return (
                                                <option
                                                    key={statusOrderItem.id}
                                                    value={statusOrderItem.id}>
                                                    {statusOrderItem.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <select className="select-box" value={selectedPaymentStatus.id} onChange={handlePaymentStatusChange} >
                                    <option selected>Open this select menu</option>
                                    {StatusPaymentOrder && StatusPaymentOrder.length > 0 &&
                                        StatusPaymentOrder.map((StatusPaymentOrderItem, index) => {
                                            return (
                                                <option
                                                    key={StatusPaymentOrderItem.id}
                                                    value={StatusPaymentOrderItem.id}>
                                                    {StatusPaymentOrderItem.name}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <button className="button" type="submit" onClick={() => handleUpdateProduct()}>Update</button>
                        </div>
                    </div> {/* end col */}
                </div>
                {/* end row */}
            </div> {/* container */}

        </div>
    )
}

export default UpdateOrderStatus
