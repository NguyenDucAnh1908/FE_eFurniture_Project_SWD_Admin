import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chat = () => {

    return (
        <div>
            {/* Start Content*/}
            <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                                    <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
                                    <li className="breadcrumb-item active">Chat</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Chat</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    {/* start chat users*/}
                    <div className="col-xxl-3 col-xl-6 order-xl-1">
                        <div className="card">
                            <div className="card-body p-0">
                                <ul className="nav nav-tabs nav-bordered">
                                    <li className="nav-item">
                                        <a href="#allUsers" data-bs-toggle="tab" aria-expanded="false" className="nav-link active py-2">
                                            All
                                        </a>
                                    </li>
                                </ul> {/* end nav*/}
                                <div className="tab-content">
                                    <div className="tab-pane show active card-body pb-0" id="newpost">
                                        {/* start search box */}
                                        <div className="app-search">
                                            <form>
                                                <div className="mb-2 position-relative">
                                                    <input type="text" className="form-control" placeholder="People, groups & messages..." />
                                                    <span className="mdi mdi-magnify search-icon" />
                                                </div>
                                            </form>
                                        </div>
                                        {/* end search box */}
                                    </div>
                                    {/* users */}
                                    <div className="row">
                                        <div className="col">
                                            {/* <div className="card-body py-0" data-simplebar style={{ maxHeight: 562 }}>
                                                <a href="javascript:void(0);" className="text-body" key={feedback.id}>
                                                    <div className="d-flex align-items-start mt-1 p-2">
                                                        <img src={feedback.id} className="me-2 rounded-circle" height={48} alt={feedback.userFullName} />
                                                        <div className="w-100 overflow-hidden">
                                                            <h5 className="mt-0 mb-0 font-14">
                                                                <span className="float-end text-muted font-12">{feedback.update_at}</span>
                                                                {feedback.userFullName}
                                                            </h5>
                                                            <p className="mt-1 mb-0 text-muted font-14">
                                                                <span className="w-25 float-end text-end">
                                                                    <span className="badge badge-danger-lighten">{feedback.replies.length}</span>
                                                                </span>
                                                                <span className="w-75">{feedback.comment.length > 10 ? `${feedback.comment.substring(0, 10)}...` : feedback.comment}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>

                                                <div>
                                                </div>
                                            </div>  */}
                                        </div> {/* End col */}
                                    </div> {/* end users */}
                                </div> {/* end card-body */}
                            </div> {/* end card */}
                        </div>
                    </div>
                    {/* end chat users */}
                    {/* chat area */}
                    <div className="col-xxl-6 col-xl-12 order-xl-2">
                        <div className="card">
                            <div className="card-body px-0 pb-0">
                                <ul className="conversation-list px-3" data-simplebar style={{ maxHeight: 538 }}>
                                    <li className="clearfix">
                                        <div className="chat-avatar">
                                            <img src="assets/images/users/avatar-5.jpg" className="rounded" alt="Shreyu N" />
                                            <i>10:00</i>
                                        </div>
                                        <div className="conversation-text">
                                            <div className="ctext-wrap">
                                                <i>Shreyu N</i>
                                                <p>
                                                    Hello!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="conversation-actions dropdown">
                                            <button className="btn btn-sm btn-link" data-bs-toggle="dropdown" aria-expanded="false"><i className="uil uil-ellipsis-v" /></button>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">Copy Message</a>
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="clearfix odd">
                                        <div className="chat-avatar">
                                            <img src="assets/images/users/avatar-1.jpg" className="rounded" alt="dominic" />
                                            <i>10:01</i>
                                        </div>
                                        <div className="conversation-text">
                                            <div className="ctext-wrap">
                                                <i>Dominic</i>
                                                <p>
                                                    Hi, How are you? What about our next meeting?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="conversation-actions dropdown">
                                            <button className="btn btn-sm btn-link" data-bs-toggle="dropdown" aria-expanded="false"><i className="uil uil-ellipsis-v" /></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Copy Message</a>
                                                <a className="dropdown-item" href="#">Edit</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                                <div className="row px-3 pb-3">
                                    <div className="col">
                                        <div className="mt-2 bg-light p-3 rounded">
                                            <form className="needs-validation" noValidate name="chat-form" id="chat-form">
                                                <div className="row">
                                                    <div className="col mb-2 mb-sm-0">
                                                        <input type="text" className="form-control border-0" placeholder="Enter your text" required />
                                                        <div className="invalid-feedback">
                                                            Please enter your messsage
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-auto">
                                                        <div className="btn-group">
                                                            <a href="#" className="btn btn-light"><i className="uil uil-paperclip" /></a>
                                                            <a href="#" className="btn btn-light"> <i className="uil uil-smile" /> </a>
                                                            <div className="d-grid">
                                                                <button type="submit" className="btn btn-success chat-send"><i className="uil uil-message" /></button>
                                                            </div>
                                                        </div>
                                                    </div> {/* end col */}
                                                </div> {/* end row*/}
                                            </form>
                                        </div>
                                    </div> {/* end col*/}
                                </div>
                                {/* end row */}
                            </div> {/* end card-body */}
                        </div> {/* end card */}
                    </div>
                    {/* end chat area*/}
                    {/* start user detail */}
                    <div className="col-xxl-3 col-xl-6 order-xl-1 order-xxl-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="dropdown float-end">
                                    <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="mdi mdi-dots-horizontal" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item">View full</a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item">Edit Contact Info</a>
                                        {/* item*/}
                                        <a href="javascript:void(0);" className="dropdown-item">Remove</a>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <img src="assets/images/users/avatar-5.jpg" alt="shreyu" className="img-thumbnail avatar-lg rounded-circle" />
                                    <h4>Shreyu N</h4>
                                    <button className="btn btn-primary btn-sm mt-1"><i className="uil uil-envelope-add me-1" />Send Email</button>
                                    <p className="text-muted mt-2 font-14">Last Interacted: <strong>Few hours back</strong></p>
                                </div>
                                <div className="mt-3">
                                    <hr className />
                                    <p className="mt-4 mb-1"><strong><i className="uil uil-at" /> Email:</strong></p>
                                    <p>support@coderthemes.com</p>
                                    <p className="mt-3 mb-1"><strong><i className="uil uil-phone" /> Phone Number:</strong></p>
                                    <p>+1 456 9595 9594</p>
                                    <p className="mt-3 mb-1"><strong><i className="uil uil-location" /> Location:</strong></p>
                                    <p>California, USA</p>
                                    <p className="mt-3 mb-1"><strong><i className="uil uil-globe" /> Languages:</strong></p>
                                    <p>English, German, Spanish</p>
                                    <p className="mt-3 mb-2"><strong><i className="uil uil-users-alt" /> Groups:</strong></p>
                                    <p>
                                        <span className="badge badge-success-lighten p-1 font-14">Work</span>
                                        <span className="badge badge-primary-lighten p-1 font-14">Friends</span>
                                    </p>
                                </div>
                            </div> {/* end card-body */}
                        </div> {/* end card*/}
                    </div> {/* end col */}
                    {/* end user detail */}
                </div> {/* end row*/}
            </div> {/* container */}

        </div>
    )
}

export default Chat