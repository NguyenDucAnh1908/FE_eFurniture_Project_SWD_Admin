import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar';

const ProjectBooking = () => {
    const [projectBookings, setProjectBookings] = useState([]);
   
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [keyword, setKeyword] = useState('');
    const limit = 2;

  

    const handlePaginationClick = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        fetchProjectBookings();
    }, [currentPage, keyword]);

    const fetchProjectBookings = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/booking/getAllProjectBooking", {
                params: {
                    keyword: keyword,
                    page: currentPage - 1,
                    limit: limit
                }
            });
            setProjectBookings(response.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            setError(error.response.data);
        }
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
                                    <li className="breadcrumb-item active">Project Booking</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Project Booking</h4>
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
                                        <a href="/create-project-booking" className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add ProjectBooking</a>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="text-sm-end">
                                            <button type="button" className="btn btn-success mb-2 me-1"><i className="mdi mdi-cog-outline" /></button>
                                            {/* <button type="button" className="btn btn-light mb-2 me-1">Import</button>
                                            <button type="button" className="btn btn-light mb-2">Export</button> */}
                                        </div>
                                    </div>{/* end col*/}
                                </div>
                                
                                <div className="table-responsive">

                                    <table className="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Project Type</th>
                                                <th>Size</th>
                                                <th>Design Style</th>
                                                <th>Color Schemes</th>
                                                <th>Intend Use</th>
                                                <th>Occupants Number</th>
                                                <th>Time Line</th>
                                                <th>Project Price</th>
                                                <th>Code</th>
                                                <th>User ID</th>
                                                <th>Booking ID</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {projectBookings.map((projectBooking, index) => (
                                                <tr key={index}>
                                                    <td>{projectBooking.projectName}</td>
                                                    <td>{projectBooking.projectType}</td>
                                                    <td>{projectBooking.size}</td>
                                                    <td>{projectBooking.designStyle}</td>
                                                    <td>{projectBooking.colorSchemes}</td>
                                                    <td>{projectBooking.intendUse}</td>
                                                    <td>{projectBooking.occupantsNumber}</td>
                                                    <td>{projectBooking.timeLine}</td>
                                                    <td>{projectBooking.projectPrice}</td>
                                                    <td>{projectBooking.code}</td>
                                                    <td>{projectBooking.userId}</td>
                                                    <td>{projectBooking.bookingId}</td>
                                                    <td className="table-action">
                                                        <Link to={`/update-project-booking/${projectBooking.id}`} className="action-icon">
                                                            <i className="mdi mdi-square-edit-outline" />
                                                        </Link>
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

export default ProjectBooking