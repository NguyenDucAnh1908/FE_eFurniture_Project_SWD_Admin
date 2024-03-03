import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Router from '../routers/Router'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const LayOut = () => {
    return (
        <>
            <div class="wrapper">
                <Header />
                <div class="content-page">
                    <div >
                        <Router />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default LayOut
