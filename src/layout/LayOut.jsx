import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from '../routers/Router'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
import 'react-toastify/dist/ReactToastify.css';
const LayOut = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <div class="wrapper">
                {user && user.isAuthenticated === true && <Header />}
                {/* <Header /> */}
                <div class="content-page">
                    <div >
                        <Router />
                    </div>
                    <Footer />
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default LayOut
