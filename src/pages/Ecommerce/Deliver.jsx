import React, { useState, useEffect, CSSProperties } from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";
const Deliver = () => {
    const [delivers, setDelivers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 6;
    const [loading, setLoading] = useState(false);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "blue",
    };
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        fetchDelivers();
    }, [currentPage]);

    const fetchDelivers = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/get-all-staff-delivery`, {
                params: {
                    page: currentPage - 1, // trang hiện tại
                    limit: limit // số lượng mục trên mỗi trang
                }
            });
            setDelivers(response.data.userResponses);
            setTotalPages(response.data.totalPages); // tính tổng số trang
            console.log("Check user: ", response)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            {
                loading ? <ClockLoader
                    color={'#36d7b7'}
                    loading={loading}
                    cssOverride={override}
                    size={70}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> :
                    <>
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
                                                <li className="breadcrumb-item active">Sellers</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Sellers</h4>
                                    </div>
                                </div>
                            </div>
                            {/* end page title */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col-sm-5">
                                                    <a href="javascript:void(0);" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Sellers</a>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="text-sm-end">
                                                        <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog" /></button>
                                                        <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                                                        <button type="button" className="btn btn-light mb-2">Export</button>
                                                    </div>
                                                </div>{/* end col*/}
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-centered table-borderless table-hover w-100 dt-responsive nowrap" id="products-datatable">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th style={{ width: 20 }}>
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                                    <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                                </div>
                                                            </th>
                                                            <th>Seller</th>
                                                            <th>Store Name</th>
                                                            <th>Products</th>
                                                            <th>Wallet Balance</th>
                                                            <th>Create Date</th>
                                                            <th>Revenue</th>
                                                            <th style={{ width: 75 }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {delivers && delivers.length > 0 &&
                                                            delivers.map((deliversItem, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            <div className="form-check">
                                                                                <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                                                <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                                            </div>
                                                                        </td>
                                                                        <td className="table-user">
                                                                            <img src="assets/images/users/avatar-4.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                                            <a href="javascript:void(0);" className="text-body fw-semibold">Paul J. Friend</a>
                                                                        </td>
                                                                        <td>
                                                                            Homovee
                                                                        </td>
                                                                        <td>
                                                                            <span className="fw-semibold">128</span>
                                                                        </td>
                                                                        <td>
                                                                            $128,250
                                                                        </td>
                                                                        <td>
                                                                            07/07/2018
                                                                        </td>
                                                                        <td>
                                                                            <div className="spark-chart" data-dataset="[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]" />
                                                                        </td>
                                                                        <td>
                                                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                                            <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })}
                                                    </tbody>
                                                </table>
                                            </div>
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
                    </>}
        </div>
    )
}

export default Deliver
