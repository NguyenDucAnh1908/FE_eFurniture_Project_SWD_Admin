import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar'

const ListDesign = () => {

    const { id } = useParams();

    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/designs/get-designs-by-project/${id}`)
            .then(response => {
                setDesigns(response.data);
            })
            .catch(error => {
                console.error('Error fetching designs:', error);
            });
    }, [id]);



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
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Booking</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Project Booking</a></li>
                                    <li className="breadcrumb-item active">Design List</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Design List</h4>
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
                                    <a href={`/create-design/${id}`} className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Design</a>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-sm-end">
                                            {/* <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog-outline" /></button> */}
                                            {/* <button type="button" className="btn btn-light mb-2 me-1">Import</button> */}
                                            {/* <button type="button" className="btn btn-light mb-2">Export</button> */}
                                        </div>
                                    </div>{/* end col*/}
                                </div>
                                <div class="input-group">
                                    {/* <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" value={keyword} onChange={handleSearch} /> */}
                                    {/* <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button> */}
                                </div>
                                <div className="table-responsive">

                                    <table className="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                                        <thead className="table-light">
                                            <tr>

                                                <th>Code</th>
                                                <th>Status</th>

                                                <th>Created</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {designs.map(design => (
                                                <tr key={design.id}>

                                                    <td>{design.codeDesign}</td>
                                                    <td>{design.status}</td>


                                                    <td>{design.createdAt}</td>
                                                    <td>
                                                        <a href={`/design-detail/${design.id}`} style={{ color: 'blue' }}>Read more</a>
                                                    </td>

                                                </tr>
                                            ))}
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

        </>
    )
}

export default ListDesign
