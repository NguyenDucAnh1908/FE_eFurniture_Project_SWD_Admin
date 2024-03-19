import React, { useState, useEffect } from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProjectBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [projectBookings, setProjectBookings] = useState("");
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

  useEffect(() => {
    // Fetch the existing project booking data using the provided ID
    const fetchProjectBooking = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/booking/getProjectBookingbyId/${id}`
        );
        const projectBookingData = response.data;
        // Set the state with the fetched data
        setProjectName(projectBookingData.projectName);
        setProjectType(projectBookingData.projectType);
        setSize(projectBookingData.size);
        setDesignStyle(projectBookingData.designStyle);
        setColorSchemes(projectBookingData.colorSchemes);
        setIntendUse(projectBookingData.intendUse);
        setOccupantsNumber(projectBookingData.occupantsNumber);
        setTimeLine(projectBookingData.timeLine);
        setProjectPrice(projectBookingData.projectPrice);
        setCode(projectBookingData.code);
        setUserId(projectBookingData.userId);
        setBookingId(projectBookingData.bookingId);
        // setProjectBookings(response.data);
        console.log("Update project booking response: ", response.data);
        // Redirect or navigate to another page
        // navigate('/view-project-booking'); // Example: Redirect to product page
      } catch (error) {
        console.error("Error fetching project booking:", error);
      }
    };

    fetchProjectBooking();
  }, [id]);

  const handleUpdateProjectBooking = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/booking/updateProjectBooking/${id}`,
        {
          projectName,
          projectType,
          size,
          designStyle,
          colorSchemes,
          intendUse,
          occupantsNumber,
          timeLine,
          projectPrice,
          code,
          userId,
          bookingId,
        }
      );
      console.log("Update project booking response: ", response.data);
      // Redirect or navigate to another page
      // navigate(`/view-project-booking`); // Example: Redirect to view project booking page
      // Optionally show a success message
      // toast.success("Update project booking successfully")
    } catch (error) {
      console.error("Error updating project booking:", error);
      // Optionally show an error message
      // toast.error("Update project booking fail")
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
                  <li className="breadcrumb-item active">Update User</li>
                </ol>
              </div>
              <h4 className="page-title">Update User</h4>
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
                        Phone Number
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

                    <div className="mb-3">
                      <label htmlFor="project-budget" className="form-label">
                        Email
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
                        Create Date
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
                      const confirmed = window.confirm(
                        "Are you sure you want to update?"
                      );
                      if (confirmed) {
                        handleUpdateProjectBooking();
                        window.history.back(); // Go back to the previous page
                      }
                    }}
                    class="btn btn-info"
                  >
                    Update
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

export default UpdateProjectBooking;
