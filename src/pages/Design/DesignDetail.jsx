import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TopNavbar from '../../components/TopNavbar/TopNavbar';


const DesignDetail = () => {
    const [designDetail, setDesignDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/designs/get-by-id/${id}`)
            .then(response => {
                setDesignDetail(response.data);
            })
            .catch(error => {
                console.error('Error fetching design detail:', error);
            });
    }, [id]);



    const handleDownload = () => {
        window.location.href = `http://localhost:8080/api/v1/designs/download-file/${id}`;
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
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Project Booking</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Design List</a></li>
                                    <li className="breadcrumb-item active">Design Detail</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Design Detail</h4>
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
                                        {/* <a href={`/create-design/${id}`} className="btn btn-danger mb-2"><i className="mdi mdi-plus-circle me-2" /> Add Design</a> */}
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

                                    <div className="col-lg-9 col-md-12">
                                        <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">

                                            <div className="dash__pad-2">
                                                {designDetail && (
                                                    <h1 className="dash__h1 u-s-m-b-14">{designDetail.codeDesign}</h1>
                                                )}

                                                {designDetail && (


                                                    <div className="m-order__list">

                                                        <div className="m-order__get">






                                                              <div className="manage-o__description">
                                                                <div className="description__container">
                                                                    <div className="description__img-wrap">
                                                                        <img className="u-img-fluid" src={designDetail.imageUrls} alt="" width="100" height="100" />
                                                                    </div>

                                                                    <div className="description-title" >{designDetail.staffName}</div>
                                                                </div>
                                                                <div className="description__info-wrap">
                                                                    <div>
                                                                        <span className="manage-o__badge badge--delivered">{designDetail.status}</span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="manage-o__text-2 u-c-silver">Note: {designDetail.note} <span className="manage-o__text-2 u-c-secondary"></span></span>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="manage-o__header u-s-m-b-30">
                                                                <div className="dash-l-r">
                                                                    <div>

                                                                    </div>
                                                                    <div >
                                                                        <div className="manage-o__text u-c-silver" >   {designDetail.createdAt}   </div>
                                                                        <div className="dash__link dash__link--brand">
                                                                            <button onClick={handleDownload}>Download</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>




                                                        </div>


                                                     

                                                            <embed src={`data:application/pdf;base64,${designDetail.fileData}`} type="application/pdf" width="1200px" height="1500pxpx" />
                                                       

                                                    </div>

                                                )}

                                            </div>



                                        </div>
                                    </div>

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

export default DesignDetail
