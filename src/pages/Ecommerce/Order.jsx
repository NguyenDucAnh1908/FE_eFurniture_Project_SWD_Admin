import React, { useState, useEffect } from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import { dataOrderpaymentStatus } from '../../services/OrderApi/OrderApi'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Order = () => {
    const [orders, setOrders] = useState([]);
    const [dataPaymentStatus, setDataPaymentStatus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [categoryIds, setCategoryIds] = useState('');

    useEffect(() => {
        getPaymentStatus();
    }, []);

    useEffect(() => {
        fetchOrders();
    }, [currentPage, searchKeyword, categoryIds]);

    const getPaymentStatus = async () => {
        let res = await dataOrderpaymentStatus();
        if (res && res.data) {
            setDataPaymentStatus(res.data);
        }
    };

    const fetchOrders = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/orders', {
                params: {
                    keyword: '',
                    page: currentPage - 1,
                    limit: 6,
                    categoryIds: categoryIds
                },
            })
            setOrders(res.data.orders);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const handlePaginationClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearch = (event) => {
        setSearchKeyword(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategoryIds(event.target.value);
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
                                        <div className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                            <div className="col-auto">
                                                <label htmlFor="inputPassword2" className="visually-hidden">Search</label>
                                                <input type="search" className="form-control" id="inputPassword2" placeholder="Search..."
                                                    value={searchKeyword} onChange={handleSearch}
                                                />
                                            </div>
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center">
                                                    <label htmlFor="status-select" className="me-2">Status</label>
                                                    <select className="form-select" id="status-select" onChange={handleCategoryChange}>
                                                        <option selected>Choose...</option>
                                                        {dataPaymentStatus.map((dataPaymentStatusItem) => (
                                                            <option key={dataPaymentStatusItem.id}
                                                                value={dataPaymentStatusItem.id}>
                                                                {dataPaymentStatusItem.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
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
                                            {orders.map(order => (
                                                <tr key={order.id}>
                                                    <td>
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                            <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#{order.fullName}</a> </td>
                                                    <td>
                                                        August 05 2018 <small className="text-muted">10:29 PM</small>
                                                    </td>
                                                    <td>
                                                        <h5><span className="badge badge-success-lighten"><i className="mdi mdi-bitcoin" /> {order.paymentStatus.name}</span></h5>
                                                    </td>
                                                    <td>
                                                        ${order.total_amount}
                                                    </td>
                                                    <td>
                                                        {order.payment_method}
                                                    </td>
                                                    <td>
                                                        <h5><span className="badge badge-info-lighten">{order.orderStatus.name}</span></h5>
                                                    </td>
                                                    <td>
                                                        <Link to={`/order-detail/${order.id}`} className="action-icon"> <i className="mdi mdi-eye" /></Link>
                                                        <Link to={`/update-status-order/${order.id}`} className="action-icon"> <i className="mdi mdi-square-edit-outline" /></Link>
                                                        <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination */}
                                <nav aria-label="...">
                                    <ul className="pagination pagination-circle">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => handlePaginationClick(currentPage - 1)}>Previous</button>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                                            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => handlePaginationClick(page)}>{page}</button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => handlePaginationClick(currentPage + 1)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>
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