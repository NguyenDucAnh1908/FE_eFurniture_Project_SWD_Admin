import React from 'react'
import TopNavbar from '../components/TopNavbar/TopNavbar'
const Customer = () => {
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
                                    <li className="breadcrumb-item active">Customers</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Customers</h4>
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
                                        <a href="javascript:void(0);" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Customers</a>
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
                                    <table className="table table-centered table-striped dt-responsive nowrap w-100" id="products-datatable">
                                        <thead>
                                            <tr>
                                                <th style={{ width: 20 }}>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label" htmlFor="customCheck1">&nbsp;</label>
                                                    </div>
                                                </th>
                                                <th>Customer</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Location</th>
                                                <th>Create Date</th>
                                                <th>Status</th>
                                                <th style={{ width: 75 }}>Action</th>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-4.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Paul J. Friend</a>
                                                </td>
                                                <td>
                                                    937-330-1634
                                                </td>
                                                <td>
                                                    pauljfrnd@jourrapide.com
                                                </td>
                                                <td>
                                                    New York
                                                </td>
                                                <td>
                                                    07/07/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-3.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Bryan J. Luellen</a>
                                                </td>
                                                <td>
                                                    215-302-3376
                                                </td>
                                                <td>
                                                    bryuellen@dayrep.com
                                                </td>
                                                <td>
                                                    New York
                                                </td>
                                                <td>
                                                    09/12/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-3.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Kathryn S. Collier</a>
                                                </td>
                                                <td>
                                                    828-216-2190
                                                </td>
                                                <td>
                                                    collier@jourrapide.com
                                                </td>
                                                <td>
                                                    Canada
                                                </td>
                                                <td>
                                                    06/30/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger-lighten">Blocked</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-1.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Timothy Kauper</a>
                                                </td>
                                                <td>
                                                    (216) 75 612 706
                                                </td>
                                                <td>
                                                    thykauper@rhyta.com
                                                </td>
                                                <td>
                                                    Denmark
                                                </td>
                                                <td>
                                                    09/08/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger-lighten">Blocked</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-5.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Zara Raws</a>
                                                </td>
                                                <td>
                                                    (02) 75 150 655
                                                </td>
                                                <td>
                                                    austin@dayrep.com
                                                </td>
                                                <td>
                                                    Germany
                                                </td>
                                                <td>
                                                    07/15/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-6.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Annette P. Kelsch</a>
                                                </td>
                                                <td>
                                                    (+15) 73 483 758
                                                </td>
                                                <td>
                                                    annette@email.net
                                                </td>
                                                <td>
                                                    India
                                                </td>
                                                <td>
                                                    09/05/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-7.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Jenny C. Gero</a>
                                                </td>
                                                <td>
                                                    078 7173 9261
                                                </td>
                                                <td>
                                                    jennygero@teleworm.us
                                                </td>
                                                <td>
                                                    Lesotho
                                                </td>
                                                <td>
                                                    08/02/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger-lighten">Blocked</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-8.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Edward Roseby</a>
                                                </td>
                                                <td>
                                                    078 6013 3854
                                                </td>
                                                <td>
                                                    edwardR@armyspy.com
                                                </td>
                                                <td>
                                                    Monaco
                                                </td>
                                                <td>
                                                    08/23/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-9.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Anna Ciantar</a>
                                                </td>
                                                <td>
                                                    (216) 76 298 896
                                                </td>
                                                <td>
                                                    annac@hotmai.us
                                                </td>
                                                <td>
                                                    Philippines
                                                </td>
                                                <td>
                                                    05/06/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-10.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Dean Smithies</a>
                                                </td>
                                                <td>
                                                    077 6157 4248
                                                </td>
                                                <td>
                                                    deanes@dayrep.com
                                                </td>
                                                <td>
                                                    Singapore
                                                </td>
                                                <td>
                                                    04/09/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-1.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Labeeb Ghali</a>
                                                </td>
                                                <td>
                                                    050 414 8778
                                                </td>
                                                <td>
                                                    labebswad@teleworm.us
                                                </td>
                                                <td>
                                                    United Kingdom
                                                </td>
                                                <td>
                                                    06/19/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-success-lighten">Active</span>
                                                </td>
                                                <td>
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
                                                <td className="table-user">
                                                    <img src="assets/images/users/avatar-2.jpg" alt="table-user" className="me-2 rounded-circle" />
                                                    <a href="javascript:void(0);" className="text-body fw-semibold">Rory Seekamp</a>
                                                </td>
                                                <td>
                                                    078 5054 8877
                                                </td>
                                                <td>
                                                    roryamp@dayrep.com
                                                </td>
                                                <td>
                                                    United States
                                                </td>
                                                <td>
                                                    03/24/2018
                                                </td>
                                                <td>
                                                    <span className="badge badge-danger-lighten">Blocked</span>
                                                </td>
                                                <td>
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
            {/* content */}

        </div>
    )
}

export default Customer