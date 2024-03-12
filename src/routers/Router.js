import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Account/Login'
import Product from '../pages/Ecommerce/Product'
import OrderDetail from '../pages/Ecommerce/OrderDetail'
import Customers from '../pages/Ecommerce/Customers'
import Sellers from '../pages/Ecommerce/Sellers'
import ProductDetail from '../pages/Ecommerce/ProductDetail'
import Orderder from '../pages/Ecommerce/Order'
import Booking from '../pages/Booking/Booking'

import Chat from '../pages/Feedback/Chat'

import ChartTopProductSale from '../components/Chart/ChartTopProductSale'
import CreateProduct from '../pages/Ecommerce/FormEcommerce/CreateProduct'
import UpdateProduct from '../pages/Ecommerce/FormEcommerce/UpdateProduct'
import UpdateOrderStatus from '../pages/Ecommerce/FormEcommerce/UpdateOrderStatus'
import CreateDesign from '../pages/Design/CreateDesign'
import Designer from '../pages/Ecommerce/Designer'
import Deliver from '../pages/Ecommerce/Deliver'

function Router() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/customer' element={<Customers />} />
                <Route path='/order' element={<Orderder />} />
                <Route path='/seller' element={<Sellers />} />
                <Route path='/order-detail/:id' element={<OrderDetail />} />
                <Route path='/update-status-order/:id' element={<UpdateOrderStatus />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product-detail/:id' element={<ProductDetail />} />
                <Route path='/update-product/:id' element={<UpdateProduct />} />
                <Route path='/create-product' element={<CreateProduct />} />
                <Route path='/product-detail' element={<ProductDetail />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/booking' element={<Booking />} />

                <Route path='/chart' element={<ChartTopProductSale />} />
                <Route path='/create-design' element={<CreateDesign />} />
                <Route path='/designer' element={<Designer />} />
                <Route path='/deliver' element={<Deliver />} />
            </Routes>
        </>
    )
}

export default Router
