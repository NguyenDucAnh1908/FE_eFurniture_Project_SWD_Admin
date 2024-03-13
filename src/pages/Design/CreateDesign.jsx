import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext'
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import { useParams } from 'react-router-dom';

const CreateDesign = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [staffName, setStaffName] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState('Processing'); 
    const [imageUrls, setImageUrls] = useState(null);
    const [fileData, setFileData] = useState(null);
    const staff_name = user.account.user.fullName;
    useEffect(() => {
        setStaffName(staff_name);
    });
    console.log("Check staff name: " + staff_name);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('staffName', staffName);
        formData.append('note', note);
        formData.append('status', status);
        formData.append('imageUrls', imageUrls);
        formData.append('fileData', fileData);
        formData.append('projectBookingId', id);

        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/designs/create-design',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            console.log('Design created:', response.data);
            // Handle success (e.g., redirect to another page, show a success message)
        } catch (error) {
            console.error('Error creating design:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <>
            <TopNavbar />
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                                    <li className="breadcrumb-item active">Create Design</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Create Design</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {/* <div className="mb-3">
                                                <label htmlFor="projectname" className="form-label">Staff Name</label>
                                                <input type="text"
                                                    value={staffName} onChange={(e) => setStaffName(e.target.value)} className="form-control"
                                                    placeholder="Enter staff name" />
                                            </div> */}

                                            <div className="mb-3">
                                                <label htmlFor="project-overview" className="form-label">Note</label>
                                                <textarea className="form-control" value={note}
                                                    onChange={(e) => setNote(e.target.value)} rows={5} placeholder="Enter some note..."
                                                />
                                            </div>



                                            <div className="mb-0">
                                                <label htmlFor="project-overview" className="form-label">Status</label>


                                                <select className="form-control select2" data-toggle="select2"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                >
                                                    <option value="Processing">Processing</option>
                                                    <option value="Failed">Failed</option>
                                                </select>
                                            </div>
                                        </div> {/* end col*/}
                                        <div className="col-xl-6">
                                            <div className="mb-3 mt-3 mt-xl-0">
                                                <label htmlFor="projectname" className="mb-0">Avatar Staff Design</label>
                                                <p className="text-muted font-14">Recommended image size 90x100 (px).</p>

                                                <div className="fallback">
                                                    <input type="file"
                                                        onChange={(e) => setImageUrls(e.target.files[0])} />
                                                    {/* <button >Upload</button> */}
                                                </div>



                                                {/* Preview */}
                                                <div className="dropzone-previews mt-3" id="file-previews" />
                                                {/* file preview template */}
                                                <div className="d-none" id="uploadPreviewTemplate">
                                                    <div className="card mt-1 mb-0 shadow-none border">
                                                        <div className="p-2">
                                                            <div className="row align-items-center">
                                                                <div className="col-auto">
                                                                    <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt />
                                                                </div>
                                                                <div className="col ps-0">
                                                                    <a href="javascript:void(0);" className="text-muted fw-bold" data-dz-name />
                                                                    <p className="mb-0" data-dz-size />
                                                                </div>
                                                                <div className="col-auto">
                                                                    {/* Button */}
                                                                    <a href="#" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                        <i className="dripicons-cross" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end file preview template */}
                                            </div>



                                            <div className="col-xl-6">
                                                <div className="mb-3 mt-3 mt-xl-0">
                                                    <label htmlFor="projectname" className="mb-0">Upload File</label>
                                                    <p className="text-muted font-14">Recommended file size less than 10MB.</p>


                                                    <input type="file"
                                                        onChange={(e) => setFileData(e.target.files[0])} />





                                                    {/* Preview */}
                                                    <div className="dropzone-previews mt-3" id="file-previews" />
                                                    {/* file preview template */}
                                                    <div className="d-none" id="uploadPreviewTemplate">
                                                        <div className="card mt-1 mb-0 shadow-none border">
                                                            <div className="p-2">
                                                                <div className="row align-items-center">
                                                                    <div className="col-auto">
                                                                        <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt />
                                                                    </div>
                                                                    <div className="col ps-0">
                                                                        <a href="javascript:void(0);" className="text-muted fw-bold" data-dz-name />
                                                                        <p className="mb-0" data-dz-size />
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        {/* Button */}
                                                                        <a href="#" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                            <i className="dripicons-cross" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* end file preview template */}
                                                </div>

                                            </div> {/* end col*/}


                                        </div> {/* end col*/}
                                    </div>

                                    {/* end row */}
                                </div> {/* end card-body */}
                                <div class="justify-content-end row">
                                    <div class="col-9">
                                        <button type="submit" class="btn btn-info">Create</button>
                                    </div>
                                </div>
                            </div> {/* end card*/}

                        </form>
                    </div> {/* end col*/}
                </div>
                {/* end row*/}
            </div> {/* container */}


        </>
    )
}

export default CreateDesign
