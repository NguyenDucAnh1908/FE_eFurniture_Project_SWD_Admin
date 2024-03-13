import React, { useState, useEffect } from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProjectBooking = () => {
  const navigate = useNavigate;
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [size, setSize] = useState("");
  const [designStyle, setDesignStyle] = useState("");
  const [colorSchemes, setColorSchemes] = useState("");
  const [intendUse, setIntendUse] = useState("");
  const [occupantsNumber, setOccupantsNumber] = useState("");
  const [timeLine, setTimeLine] = useState("");
  const [projectPrice, setProjectPrice] = useState("");
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("");
  const [bookingId, setBookingId] = useState("");

  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const handleCreateProjectBooking = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/booking/register-project-booking",
        {
          projectName,
          projectType,
          size,
          designStyle,
          colorSchemes,
          intendUse,
          occupantsNumber,
          timeLine, // Correct the key name
          projectPrice,
          code,
          userId,
          bookingId,
        }
        

      );
      console.log("Create project booking response: ", response.data);
      // Redirect or navigate to another page
      // navigate('/view-project-booking'); // Example: Redirect to product page
      // Optionally show a success message
      // toast.success("Create project booking successfully")
    } catch (error) {
      console.error("Error creating project booking:", error);
      // Optionally show an error message
      // toast.error("Create project booking fail")
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
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Hyper</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Projects</a>
                  </li>
                  <li className="breadcrumb-item active">Create Project</li>
                </ol>
              </div>
              <h4 className="page-title">Create Project</h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="mb-3">
                      <label htmlFor="projectName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        className="form-control"
                        placeholder="Enter project name"
                        value={projectName}
                        onChange={(event) => setProjectName(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="projectType" className="form-label">
                        Type
                      </label>
                      <input
                        type="text"
                        id="projectType"
                        className="form-control"
                        placeholder="Enter project type"
                        value={projectType}
                        onChange={(event) => setProjectType(event.target.value)}
                      />
                    </div>
                    {/* Date View */}
                    {/* <div className="mb-3 position-relative" id="datepicker1">
                                    <label className="form-label">Start Date</label>
                                    <input type="text" className="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true" />
                                </div> */}
                    {/* <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Size
                      </label>
                      <input
                        type="text"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project size"
                        value={size}
                        onChange={(event) => setSize(event.target.value)}
                      />
                    </div> */}
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Design Style
                      </label>
                      <input
                        type="text"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project design style"
                        value={designStyle}
                        onChange={(event) => setDesignStyle(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Color Schemes
                      </label>
                      <input
                        type="text"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project color schemes"
                        value={colorSchemes}
                        onChange={(event) =>
                          setColorSchemes(event.target.value)
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Intended Use
                      </label>
                      <input
                        type="text"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project intended use"
                        value={intendUse}
                        onChange={(event) => setIntendUse(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Occupants Number
                      </label>
                      <input
                        type="number"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter number of occupants"
                        min="0"
                        value={occupantsNumber}
                        onChange={(event) => {
                          const value = event.target.value;
                          // Kiểm tra xem giá trị nhập vào có phải là số và không âm
                          if (!isNaN(value) && +value >= 0) {
                            setOccupantsNumber(value);
                          } else if (value === "") {
                            // Cho phép xóa giá trị
                            setOccupantsNumber("");
                          }
                          // Nếu không, không cập nhật giá trị (tức là khi nhập giá trị âm)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Timeline
                      </label>
                      <input
                        type="text"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project timeline"
                        value={timeLine}
                        onChange={(event) => setTimeLine(event.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-price" className="form-label">
                        Project Price
                      </label>
                      <input
                        type="text"
                        id="project-price"
                        className="form-control"
                        placeholder="Enter project price"
                        value={projectPrice}
                        onChange={(event) => {
                          const value = event.target.value;
                          // Kiểm tra xem giá trị nhập vào có phải là số và không âm
                          if (!isNaN(value) && +value >= 0) {
                            setProjectPrice(value);
                          } else if (value === "") {
                            // Cho phép xóa giá trị
                            setProjectPrice("");
                          }
                          // Nếu không, không cập nhật giá trị (tức là khi nhập giá trị âm)
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        UserId
                      </label>
                      <input
                        type="text"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project code"
                        value={userId}
                        onChange={(event) => setUserId(event.target.value)}
                      />
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        User ID
                      </label>
                      <input
                        type="number"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter user ID"
                        value={userId}
                        onChange={(event) => setUserId(event.target.value)}
                      />
                    </div> */}
                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Booking ID
                      </label>
                      <input
                        type="number"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter booking ID"
                        value={bookingId}
                        onChange={(event) => setBookingId(event.target.value)}
                      />
                    </div>
                  </div>{" "}
                  {/* end col*/}
                  <div className="col-xl-6">
                    <div className="mb-3 mt-3 mt-xl-0">
                      {/* <label htmlFor="projectname" className="mb-0">
                        Avatar
                      </label> */}
                      {/* <p className="text-muted font-14">
                        Recommended thumbnail size 800x400 (px).
                      </p> */}
                      {/* <div action="https://coderthemes.com/" method="post" className="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                        <div className="fallback">
                                            <input name="file" type="file" onChange={(event) => setImg(event.target.file[0])} />
                                            <button onClick={handleClick}>Upload</button>
                                        </div>
                                        <div className="dz-message needsclick">
                                            <i className="h3 text-muted dripicons-cloud-upload" />
                                            <h4>Drop files here or click to upload.</h4>
                                        </div>
                                    </div> */}
                      {/* <input
                        type="file"
                        onChange={handleImageChange}
                        multiple
                      />
                      <button onClick={handleCreateProjectBooking}>
                        Create Product
                      </button> */}
                      {/* Preview */}
                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      />
                      {/* file preview template */}
                      <div className="d-none" id="uploadPreviewTemplate">
                        <div className="card mt-1 mb-0 shadow-none border">
                          <div className="p-2">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <img
                                  data-dz-thumbnail
                                  src="#"
                                  className="avatar-sm rounded bg-light"
                                  alt
                                />
                              </div>
                              <div className="col ps-0">
                                <a
                                  href="javascript:void(0);"
                                  className="text-muted fw-bold"
                                  data-dz-name
                                />
                                <p className="mb-0" data-dz-size />
                              </div>
                              <div className="col-auto">
                                {/* Button */}
                                <a
                                  href="#"
                                  className="btn btn-link btn-lg text-muted"
                                  data-dz-remove
                                >
                                  <i className="dripicons-cross" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end file preview template */}
                    </div>
                    <div className="mb-0">
                      {/* <label htmlFor="project-overview" className="form-label">
                        Tags Product
                      </label> */}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Size
                      </label>
                      <input
                        type="number"
                        id="project-budget"
                        className="form-control"
                        placeholder="Enter project budget"
                        min="0"
                        value={size}
                        onChange={(event) => {
                          const value = event.target.value;
                          // Kiểm tra xem giá trị nhập vào có phải là số và không âm
                          if (!isNaN(value) && +value >= 0) {
                            setSize(value);
                          } else if (value === "") {
                            // Cho phép xóa giá trị
                            setSize("");
                          }
                          // Nếu không, không cập nhật giá trị (tức là khi nhập giá trị âm)
                        }}
                      />
                    </div>
                    {/* Date View */}
                  </div>{" "}
                  {/* end col*/}
                </div>

                {/* end row */}
              </div>{" "}
              {/* end card-body */}
              <div class="justify-content-end row">
                <div class="col-9">
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      fontSize: "18px",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    type="submit"
                    onClick={() => {
                      handleCreateProjectBooking();
                      window.history.back(); // Go back to the previous page
                    }}
                    class="btn btn-info"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col*/}
        </div>
        {/* end row*/}
      </div>{" "}
      {/* container */}
    </>
  );
};

export default CreateProjectBooking;
