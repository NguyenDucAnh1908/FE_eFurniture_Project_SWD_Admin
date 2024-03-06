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
import ChartTopProductSale from '../components/Chart/ChartTopProductSale'
import CreateProduct from '../pages/Ecommerce/FormEcommerce/CreateProduct'

function Router() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/customer' element={<Customers />} />
                <Route path='/order' element={<Orderder />} />
                <Route path='/seller' element={<Sellers />} />
                <Route path='/order-detail' element={<OrderDetail />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product-detail' element={<ProductDetail />} />
                <Route path='/create-product' element={<CreateProduct />} />
                <Route path='/chart' element={<ChartTopProductSale />} />
            </Routes>
        </>
    )
}

export default Router
