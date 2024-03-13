import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify'


const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedDates, setSelectedDates] = useState({});
    const [bookingsPage, setBookingsPage] = useState({
        totalPages: 0,
        totalElements: 0,
        currentPage: 0
    });

    const fetchBookings = async (page) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/booking/all?page=${page}&size=10`);
            setBookingsPage({
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
                currentPage: response.data.number
            });
            setBookings(response.data.content);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    }
    useEffect(() => {
        fetchBookings();
    }, []);

    const handleReceiveAndConfirm = async (bookingId) => {
        try {
            // Check if a schedule has been selected
            if (!selectedDates[bookingId]) {
                toast.warning("Please select a schedule before confirming.");

                return;
            }
    
            const response = await axios.put(`http://localhost:8080/api/v1/booking/receive-booking-request/${bookingId}`, {
                schedule: selectedDates[bookingId],
                designerId: 1
            });
    
            const updatedBookings = bookings.map(booking =>
                booking.id === bookingId ? { ...booking, schedule: selectedDates[bookingId] } : booking
            );
            toast.success("Apply booking successful.");

            setBookings(updatedBookings);
            fetchBookings();
            console.log(response.data);
        } catch (error) {
            console.error('Error confirming booking:', error);
        }
    }
    

    const handlePageChange = (pageNumber) => {
        fetchBookings(pageNumber);
    }


    const handleCancelBooking = async (bookingId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/booking/cancel-booking/${bookingId}`);
            console.log(response.data);
            toast.success("Cancel booking successful.");
            fetchBookings();
        } catch (error) {
            console.error('Error canceling booking:', error);
        }
    }

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
                                    <li className="breadcrumb-item active">Booking</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Booking</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-centered table-nowrap mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>ID</th>
                                                <th>Date</th>
                                                <th>Full Name</th>
                                                <th>Address</th>
                                                <th>Status</th>
                                                <th>Schedule</th>
                                                <th style={{ width: 125 }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map(booking => (
                                                <tr key={booking.id}>

                                                    <td><a href={`apps-ecommerce-orders-details.html`} className="text-body fw-bold">#{booking.id}</a></td>
                                                    <td>{booking.created_at}</td>
                                                    <td>{booking.firstName} {booking.lastName}</td>
                                                    <td>{booking.streetAddress}, {booking.wardName}, {booking.districtName}, {booking.provinceName}</td>
                                                    <td>
                                                        <h5>
                                                            <span className={`badge ${booking.status === 'Confirmed' ? 'badge-success-lighten' : booking.status === 'Cancel' ? 'badge-danger-lighten' : 'badge-info-lighten'}`}>
                                                                {booking.status === 'Paid' ? <i className="mdi mdi-bitcoin" /> : null}
                                                                {booking.status}
                                                            </span>
                                                        </h5>

                                                    </td>
                                                    <td>
                                                        <DatePicker
                                                            selected={selectedDates[booking.id] || (booking.schedule ? new Date(booking.schedule) : null)}
                                                            onChange={(date) => {
                                                                setSelectedDates((prevState) => ({
                                                                    ...prevState,
                                                                    [booking.id]: date,
                                                                }));
                                                            }}
                                                            showTimeSelect
                                                            timeFormat="HH:mm"
                                                            timeIntervals={15}
                                                            dateFormat="yyyy-MM-dd HH:mm"
                                                            placeholderText={booking.schedule ? booking.schedule.toString() : 'Select date and time'}
                                                            disabled={booking.status === 'Confirmed' || booking.status === 'Cancel'}
                                                        />

                                                    </td>
                                                    <td>
                                                        <a href="/view-project-booking" className="action-icon"> <i className="mdi mdi-eye" /></a>
                                                        <a className="action-icon" onClick={() => handleReceiveAndConfirm(booking.id)}>
                                                            <i className="mdi mdi-check" />
                                                        </a>
                                                        <a className="action-icon" onClick={() => handleCancelBooking(booking.id)}>
                                                            <i className="mdi mdi-delete" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <br />
                                    <div className="pagination justify-content-end pr-3">
                                        <button className="btn btn-secondary" onClick={() => handlePageChange(bookingsPage.currentPage - 1)} disabled={bookingsPage.currentPage === 0}>Previous</button>
                                        <span className="align-self-center mr-2">&nbsp;&nbsp;Page {bookingsPage.currentPage + 1} of {bookingsPage.totalPages}&nbsp;&nbsp;</span>
                                        <button className="btn btn-secondary" onClick={() => handlePageChange(bookingsPage.currentPage + 1)} disabled={bookingsPage.currentPage === bookingsPage.totalPages - 1}>Next</button>
                                    </div>
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

export default Booking
