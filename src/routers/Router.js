import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Account/Login'
import Product from '../pages/Ecommerce/Product'

import ChartTopProductSale from '../components/Chart/ChartTopProductSale'

function Router() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product' element={<Product />} />
                <Route path='/chart' element={<ChartTopProductSale />} />
            </Routes>
        </>
    )
}

export default Router
