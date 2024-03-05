import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'

const Product = () => {
    return (
        <div>
        <TopNavbar/>
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
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                        <label className="form-check-label" htmlFor="customCheck2">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="assets/images/products/product-1.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Amazing Modern Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Aeron Chairs
                                                </td>
                                                <td>
                                                    09/12/2018
                                                </td>
                                                <td>
                                                    $148.66
                                                </td>
                                                <td>
                                                    254
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-4.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Biblio Plastic Armchair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Wooden Chairs
                                                </td>
                                                <td>
                                                    09/08/2018
                                                </td>
                                                <td>
                                                    $8.99
                                                </td>
                                                <td>
                                                    1,874
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-3.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Branded Wooden Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-outline" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Dining Chairs
                                                </td>
                                                <td>
                                                    09/05/2018
                                                </td>
                                                <td>
                                                    $68.32
                                                </td>
                                                <td>
                                                    2,541
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-4.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Designer Awesome Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                        <span className="text-warning mdi mdi-star-outline" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Baby Chairs
                                                </td>
                                                <td>
                                                    08/23/2018
                                                </td>
                                                <td>
                                                    $112.00
                                                </td>
                                                <td>
                                                    3,540
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-5.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Cardan Armchair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Plastic Armchair
                                                </td>
                                                <td>
                                                    08/02/2018
                                                </td>
                                                <td>
                                                    $59.69
                                                </td>
                                                <td>
                                                    26
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-3.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Bootecos Plastic Armchair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Wing Chairs
                                                </td>
                                                <td>
                                                    07/15/2018
                                                </td>
                                                <td>
                                                    $148.66
                                                </td>
                                                <td>
                                                    485
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger">Deactive</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-6.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Adirondack Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Aeron Chairs
                                                </td>
                                                <td>
                                                    07/07/2018
                                                </td>
                                                <td>
                                                    $65.94
                                                </td>
                                                <td>
                                                    652
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-2.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Bean Bag Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Wooden Chairs
                                                </td>
                                                <td>
                                                    06/30/2018
                                                </td>
                                                <td>
                                                    $99
                                                </td>
                                                <td>
                                                    1,021
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger">Deactive</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-3.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">The butterfly chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Dining Chairs
                                                </td>
                                                <td>
                                                    06/19/2018
                                                </td>
                                                <td>
                                                    $58
                                                </td>
                                                <td>
                                                    874
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
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
                                                <td>
                                                    <img src="assets/images/products/product-4.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Eames Lounge Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Baby Chairs
                                                </td>
                                                <td>
                                                    05/06/2018
                                                </td>
                                                <td>
                                                    $39.5
                                                </td>
                                                <td>
                                                    1,254
                                                </td>
                                                <td>
                                                    <span className="badge bg-success">Active</span>
                                                </td>
                                                <td className="table-action">
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck12" />
                                                        <label className="form-check-label" htmlFor="customCheck12">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="assets/images/products/product-5.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Farthingale Chair</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Plastic Armchair
                                                </td>
                                                <td>
                                                    04/09/2018
                                                </td>
                                                <td>
                                                    $78.66
                                                </td>
                                                <td>
                                                    524
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger">Deactive</span>
                                                </td>
                                                <td className="table-action">
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-square-edit-outline" /></a>
                                                    <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck13" />
                                                        <label className="form-check-label" htmlFor="customCheck13">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="assets/images/products/product-6.jpg" alt="contact-img" title="contact-img" className="rounded me-3" height={48} />
                                                    <p className="m-0 d-inline-block align-middle font-16">
                                                        <a href="apps-ecommerce-products-details.html" className="text-body">Unpowered aircraft</a>
                                                        <br />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star" />
                                                        <span className="text-warning mdi mdi-star-half" />
                                                    </p>
                                                </td>
                                                <td>
                                                    Wing Chairs
                                                </td>
                                                <td>
                                                    03/24/2018
                                                </td>
                                                <td>
                                                    $49
                                                </td>
                                                <td>
                                                    204
                                                </td>
                                                <td>
                                                    <span className="badge bg-danger">Deactive</span>
                                                </td>
                                                <td className="table-action">
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

export default Product