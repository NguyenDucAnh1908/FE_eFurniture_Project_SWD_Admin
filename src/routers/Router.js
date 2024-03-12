import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Account/Login'

import Order from '../pages/Order'
import OrderDetail from '../pages/OrderDetail'
import ProductDetail from '../pages/ProductDetail'
import Sellers from '../pages/Sellers'
import Customers from '../pages/Customers'

import Product from '../pages/Ecommerce/Product'
import Booking from '../pages/Booking/Booking'

import Chat from '../pages/Feedback/Chat'

import ChartTopProductSale from '../components/Chart/ChartTopProductSale'

function Router() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/customer' element={<Customers />} />
                <Route path='/order' element={<Order />} />
                <Route path='/seller' element={<Sellers />} />
                <Route path='/order-detail' element={<OrderDetail />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product-detail' element={<ProductDetail />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/booking' element={<Booking />} />

                <Route path='/chart' element={<ChartTopProductSale />} />
            </Routes>
        </>
    )
}

export default Router
