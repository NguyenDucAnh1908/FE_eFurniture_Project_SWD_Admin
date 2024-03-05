import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'

const ProductDetail = () => {
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
                                    <li className="breadcrumb-item active">Product Details</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Product Details</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-5">
                                        {/* Product image */}
                                        <a href="javascript: void(0);" className="text-center d-block mb-4">
                                            <img src="assets/images/products/product-5.jpg" className="img-fluid" style={{ maxWidth: 280 }} alt="Product-img" />
                                        </a>
                                        <div className="d-lg-flex d-none justify-content-center">
                                            <a href="javascript: void(0);">
                                                <img src="assets/images/products/product-1.jpg" className="img-fluid img-thumbnail p-2" style={{ maxWidth: 75 }} alt="Product-img" />
                                            </a>
                                            <a href="javascript: void(0);" className="ms-2">
                                                <img src="assets/images/products/product-6.jpg" className="img-fluid img-thumbnail p-2" style={{ maxWidth: 75 }} alt="Product-img" />
                                            </a>
                                            <a href="javascript: void(0);" className="ms-2">
                                                <img src="assets/images/products/product-3.jpg" className="img-fluid img-thumbnail p-2" style={{ maxWidth: 75 }} alt="Product-img" />
                                            </a>
                                        </div>
                                    </div> {/* end col */}
                                    <div className="col-lg-7">
                                        <form className="ps-lg-4">
                                            {/* Product title */}
                                            <h3 className="mt-0">Amazing Modern Chair (Orange) <a href="javascript: void(0);" className="text-muted"><i className="mdi mdi-square-edit-outline ms-2" /></a> </h3>
                                            <p className="mb-1">Added Date: 09/12/2018</p>
                                            <p className="font-16">
                                                <span className="text-warning mdi mdi-star" />
                                                <span className="text-warning mdi mdi-star" />
                                                <span className="text-warning mdi mdi-star" />
                                                <span className="text-warning mdi mdi-star" />
                                                <span className="text-warning mdi mdi-star" />
                                            </p>
                                            {/* Product stock */}
                                            <div className="mt-3">
                                                <h4><span className="badge badge-success-lighten">Instock</span></h4>
                                            </div>
                                            {/* Product description */}
                                            <div className="mt-4">
                                                <h6 className="font-14">Retail Price:</h6>
                                                <h3> $139.58</h3>
                                            </div>
                                            {/* Quantity */}
                                            <div className="mt-4">
                                                <h6 className="font-14">Quantity</h6>
                                                <div className="d-flex">
                                                    <input type="number" min={1} defaultValue={1} className="form-control" placeholder="Qty" style={{ width: 90 }} />
                                                    <button type="button" className="btn btn-danger ms-2"><i className="mdi mdi-cart me-1" /> Add to cart</button>
                                                </div>
                                            </div>
                                            {/* Product description */}
                                            <div className="mt-4">
                                                <h6 className="font-14">Description:</h6>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                            </div>
                                            {/* Product information */}
                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h6 className="font-14">Available Stock:</h6>
                                                        <p className="text-sm lh-150">1784</p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h6 className="font-14">Number of Orders:</h6>
                                                        <p className="text-sm lh-150">5,458</p>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h6 className="font-14">Revenue:</h6>
                                                        <p className="text-sm lh-150">$8,57,014</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div> {/* end col */}
                                </div> {/* end row*/}
                                <div className="table-responsive mt-4">
                                    <table className="table table-bordered table-centered mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Outlets</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Revenue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ASOS Ridley Outlet - NYC</td>
                                                <td>$139.58</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">478 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '56%' }} aria-valuenow={56} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$1,89,547</td>
                                            </tr>
                                            <tr>
                                                <td>Marco Outlet - SRT</td>
                                                <td>$149.99</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">73 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '16%' }} aria-valuenow={16} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$87,245</td>
                                            </tr>
                                            <tr>
                                                <td>Chairtest Outlet - HY</td>
                                                <td>$135.87</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">781 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$5,87,478</td>
                                            </tr>
                                            <tr>
                                                <td>Nworld Group - India</td>
                                                <td>$159.89</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">815 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$55,781</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> {/* end table-responsive*/}
                            </div> {/* end card-body*/}
                        </div> {/* end card*/}
                    </div> {/* end col*/}
                </div>
                {/* end row*/}
            </div> {/* container */}
            {/* content */}

        </div>
    )
}

export default ProductDetail