import React, {useContext} from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from '../routers/Router'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { UserContext } from '../context/UserContext';
const LayOut = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <div class="wrapper">
            {user && user.isAuthenticated ===true && <Header />}
                {/* <Header /> */}
                <div class="content-page">
                    <div >
                        <Router />
                    </div>
                    <Footer />
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </div>
        </>
    )
}

export default LayOut
