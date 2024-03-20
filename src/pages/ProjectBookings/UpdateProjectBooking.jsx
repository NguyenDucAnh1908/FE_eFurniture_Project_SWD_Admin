import React, { useState, useEffect, useContext } from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext'


const UpdateProjectBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
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
       // Kiểm tra xem tất cả các trường đã được nhập đầy đủ hay chưa
    if (
      !projectName ||
      !projectType ||
      !size ||
      !designStyle ||
      !colorSchemes ||
      !intendUse ||
      !occupantsNumber ||
      !timeLine ||
      !projectPrice ||
      !code ||
      !userId
    ) {
      // Nếu có trường nào không được nhập đầy đủ, hiển thị thông báo lỗi
      alert("Please fill in all fields.");
      return;
    }
    const userId = user.account.user.id;
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
  const validateInputs = () => {
    return (
      projectName &&
      projectType &&
      size &&
      designStyle &&
      colorSchemes &&
      intendUse &&
      occupantsNumber &&
      timeLine &&
      projectPrice &&
      code &&
      userId
    );
  };

  return (
    <>
      <TopNavbar />
      {/* Start Content*/}
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
                  <div className="mb-3">
                    <label htmlFor="project-budget" className="form-label">
                      Size
                    </label>
                    <input
                      type="number"
                      id="project-budget"
                      className="form-control"
                      placeholder="Enter project size"
                      value={size}
                      onChange={(event) => {
                        const value = event.target.value;
                        if (!isNaN(value) && +value >= 0) {
                          setSize(value);
                        } else if (value === "") {
                          setSize("");
                        }
                      }}
                    />
                  </div>
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
                      onChange={(event) => setColorSchemes(event.target.value)}
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
                        if (!isNaN(value) && +value >= 0) {
                          setOccupantsNumber(value);
                        } else if (value === "") {
                          setOccupantsNumber("");
                        }
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
                        if (!isNaN(value) && +value >= 0) {
                          setProjectPrice(value);
                        } else if (value === "") {
                          setProjectPrice("");
                        }
                      }}
                    />
                  </div>
               
                  {/* <div className="mb-3">
                    <label htmlFor="project-budget" className="form-label">
                      UserId
                    </label>
                    <input
                      type="text"
                      id="project-budget"
                      className="form-control"
                      placeholder="Enter user ID"
                      value={userId}
                      onChange={(event) => setUserId(event.target.value)}
                    />
                  </div> */}
                </div>
              </div>
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
      if (!validateInputs()) {
        // Nếu không đủ thông tin, hiển thị thông báo lỗi và không chuyển hướng
        alert("Please fill in all fields.");
      } else {
        // Nếu đủ thông tin, thực hiện cập nhật và chuyển hướng
        handleUpdateProjectBooking();
        window.history.back();
      }
    }
  }}
  class="btn btn-info"
>
  Update
</button>;
                </div>
              </div>
            </div>{" "}
            {/* end card-body */}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
      </div>{" "}
      {/* container */}
    </>
  );
};

export default UpdateProjectBooking;
