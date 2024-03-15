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

import CreateBlog from '../pages/Blog/CreateBlog'
import ListBlog from '../pages/Blog/ListBlog'

import Designer from '../pages/Ecommerce/Designer'
import Deliver from '../pages/Ecommerce/Deliver'

import ProjectBooking from '../pages/ProjectBookings/ProjectBooking'
import CreateProjectBooking from '../pages/ProjectBookings/CreateProjectBooking'
import UpdateProjectBooking from '../pages/ProjectBookings/UpdateProjectBooking'
import MyProfile from '../pages/Account/MyProfile'
import PrivateRounter from './PrivateRount/PrivateRounter'
import PrivateRountAdmin from './PrivateRountAdmin/PrivateRountAdmin'
import PrivateRountDesign from './PrivateRountDesign/PrivateRountDesign'
import PrivateRountStaff from './PrivateRountStaff/PrivateRountStaff'
import PrivateRountDelivery from './PrivateRountDelivery/PrivateRountDelivery'

function Router() {

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />

                <Route element={<PrivateRounter />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/my-profile' element={<MyProfile />} />
                </Route>

                <Route element={<PrivateRountAdmin />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/customer' element={<Customers />} />
                    <Route path='/seller' element={<Sellers />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/chart' element={<ChartTopProductSale />} />
                    {/* <Route path='/my-profile' element={<MyProfile />} /> */}
                </Route>

                {/* <Route element={<PrivateRountDelivery />}>

                    <Route path='/deliver' element={<Deliver />} />
                    <Route path='/my-profile' element={<MyProfile />} />
                    <Route path='/order' element={<Orderder />} />
                    <Route path='/order-detail/:id' element={<OrderDetail />} />
                </Route> */}
                <Route element={<PrivateRountStaff />}>
                    {/* <Route path='/' element={<Home />} /> */}
                    <Route path='/order' element={<Orderder />} />
                    <Route path='/order-detail/:id' element={<OrderDetail />} />
                    <Route path='/update-status-order/:id' element={<UpdateOrderStatus />} />
                    <Route path='/product-detail/:id' element={<ProductDetail />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/update-product/:id' element={<UpdateProduct />} />
                    <Route path='/create-product' element={<CreateProduct />} />
                    <Route path='/product-detail' element={<ProductDetail />} />
                    <Route path='/create-blog' element={<CreateBlog />} />
                    <Route path='/list-blog' element={<ListBlog />} />
                    {/* <Route path='/my-profile' element={<MyProfile />} /> */}
                </Route>
                <Route element={<PrivateRountDesign />}>
                    <Route path='/create-design/:id' element={<CreateDesign />} />
                    <Route path='/designer' element={<Designer />} />
                    <Route path='/view-project-booking/:bookingId' element={<ProjectBooking />} />
                    <Route path='/create-project-booking' element={<CreateProjectBooking />} />
                    <Route path='/update-project-booking/:id' element={<UpdateProjectBooking />} />
                    <Route path='/booking' element={<Booking />} />
                    {/* <Route path='/my-profile' element={<MyProfile />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default Router
