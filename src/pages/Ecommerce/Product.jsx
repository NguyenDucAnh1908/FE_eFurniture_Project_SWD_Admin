import React, { useState, useEffect } from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [keyword, setKeyword] = useState('');
    const limit = 2;

    useEffect(() => {
        fetchProducts();
    }, [currentPage, keyword]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/products`, {
                params: {
                    keyword: keyword,
                    page: currentPage - 1, // trang hiện tại
                    limit: limit // số lượng mục trên mỗi trang
                }
            });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages); // tính tổng số trang
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSearch = (e) => {
        setKeyword(e.target.value);
        setCurrentPage(1); // reset về trang đầu tiên khi tìm kiếm
    };

    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };
    return (
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
                                    <li className="breadcrumb-item active">Products</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Products</h4>
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
                                        <a href="javascript:void(0);" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Products</a>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-sm-end">
                                            <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog-outline" /></button>
                                            <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                                            <button type="button" className="btn btn-light mb-2">Export</button>
                                        </div>
                                    </div>{/* end col*/}
                                </div>
                                <div class="input-group">
                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" value={keyword} onChange={handleSearch} />
                                    <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
                                </div>
                                <div className="table-responsive">

                                    <table className="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                                        <thead className="table-light">
                                            <tr>
                                                <th className="all" style={{ width: 20 }}>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                    </div>
                                                </th>
                                                <th className="all">Product</th>
                                                <th>Category</th>
                                                <th>Added Date</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                                <th style={{ width: 85 }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products && products.length > 0 &&
                                                products.map((productsItem, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                                    <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <img src="assets/images/products/product-1.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                                <p className="m-0 d-inline-block align-middle font-16">
                                                                    <a href="apps-ecommerce-products-details.html" className="text-body">{productsItem.name}</a>
                                                                    <br />
                                                                    <span className="text-warning mdi mdi-star" />
                                                                </p>
                                                            </td>
                                                            <td>
                                                                {productsItem.category_id.name}
                                                            </td>
                                                            <td>
                                                                {productsItem.created_at}
                                                            </td>
                                                            <td>
                                                                {productsItem.price}
                                                            </td>
                                                            <td>
                                                                ${productsItem.quantity}
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-success">{productsItem.status}</span>
                                                            </td>
                                                            <td className="table-action">
                                                                <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
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
            {/* content */}

        </>
    )
}

export default Product
