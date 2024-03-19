import React from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'

const Sellers = () => {
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
                    {/* <a href="javascript:void(0);" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Sellers</a> */}
                  </div>
                  <div className="col-sm-7">
                    <div className="text-sm-end">
                      <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog" /></button>
                      {/* <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                      <button type="button" className="btn btn-light mb-2">Export</button> */}
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
                        <th>User</th>
                        <th>Email</th>
                        <th>Phone Number </th>
                        <th>Message</th>
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
                          abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                         abc
                        </td>
                        <td>
                          07/07/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]" /> Processing 
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          09/12/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 41, 45, 63, 25, 66, 12, 45, 9, 54]" /> Processing 
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          06/30/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 41, 34, 63, 25, 34, 12, 434, 9, 54]" /> Confirmed
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          09/08/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 41, 34, 33, 25, 34, 50, 65, 9, 54]" /> Cancelled
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          07/15/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 45, 34, 33, 34, 34, 50, 55, 9, 54]" />Cancelled
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          09/05/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 30, 67, 33, 25, 34, 56, 65, 9, 54]" /> Confirmed
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          08/02/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 66, 30, 45, 33, 25, 44, 56, 33, 9, 33]" /> Confirmed
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          08/23/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 43, 30, 67, 34, 25, 34, 56, 43, 9, 56]" />Processing
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                        abc@gmail.com
                        </td>
                        <td>
                          <span className="fw-semibold">1234567890</span>
                        </td>
                        <td>
                        abc
                        </td>
                        <td>
                          05/06/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 23, 30, 67, 34, 56, 34, 56, 85, 9, 56]" />Processing
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-eye" /></a>
                          <a href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></a>
                          <a href="javascript:void(0);" class="action-icon" > <i class="mdi mdi-checkbox-marked-outline"></i></a>
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
                          Circumous
                        </td>
                        <td>
                          <span className="fw-semibold">506</span>
                        </td>
                        <td>
                          $68,143
                        </td>
                        <td>
                          04/09/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 82, 30, 67, 65, 25, 34, 56, 44, 9, 22]" />
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
                          Laudent
                        </td>
                        <td>
                          <span className="fw-semibold">121</span>
                        </td>
                        <td>
                          $17,514
                        </td>
                        <td>
                          06/19/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 54, 30, 44, 65, 25, 34, 33, 44, 9, 23]" />
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
                          Centinte
                        </td>
                        <td>
                          <span className="fw-semibold">89</span>
                        </td>
                        <td>
                          $14,384
                        </td>
                        <td>
                          03/24/2018
                        </td>
                        <td>
                          <div className="spark-chart" data-dataset="[25, 82, 23, 67, 65, 67, 65, 56, 32, 19, 22]" />
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

    </div>
  )
}

export default Sellers