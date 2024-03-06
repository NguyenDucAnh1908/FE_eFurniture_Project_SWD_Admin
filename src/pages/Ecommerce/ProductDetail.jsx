import React, { useState, useEffect } from 'react'
import TopNavbar from '../../components/TopNavbar/TopNavbar'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [productDetail, setProductDetail] = useState(null);
    const [countOrder, setCountOrder] = useState(null);
    const [revenueProduct, setRevenueProduct] = useState(null);

    useEffect(() => {
        fetchProductDetail();
        fetchCountOrder();
        fetchRevenueProduct();
    }, [id])

    const fetchProductDetail = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
            setProductDetail(res.data);
            //console.log("Check product detail: ", res.data);
        } catch (error) {
            console.error('Error fetching product detail:', error);
        }
    };

    const fetchCountOrder = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/orders/count/${id}`);
            setCountOrder(res.data);
            //console.log("Check : ", res.data);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    };

    const fetchRevenueProduct = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/orders/revenue/${id}`);
            setRevenueProduct(res.data);
            console.log("Check fetchRevenueProduct: ", res.data);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    };
    return (
        <div>
            <TopNavbar />
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
                                    <li className="breadcrumb-item active">Product Details</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Product Details</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                {productDetail && (
                                    <div className="row">
                                        <div className="col-lg-5">
                                            {/* Product image */}
                                            <a href="javascript: void(0);" className="text-center d-block mb-4">
                                                <img src={productDetail.thumbnail} className="img-fluid" style={{ maxWidth: 280 }} alt="Product-img" />
                                            </a>
                                            <div className="d-lg-flex d-none justify-content-center">
                                                {/* Loop through product images */}
                                                {productDetail.productImages.map((image, index) => (
                                                    <a key={index} href="javascript: void(0);">
                                                        <img src={image.imageUrl} className="img-fluid img-thumbnail p-2" style={{ maxWidth: 75 }} alt={`Product-img-${index}`} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div> {/* end col */}
                                        <div className="col-lg-7">
                                            <form className="ps-lg-4">
                                                {/* Product title */}
                                                <h3 className="mt-0">{productDetail.name} <Link to={`/update-product/${productDetail.id}`} className="text-muted"><i className="mdi mdi-square-edit-outline ms-2" /></Link> </h3>
                                                <p className="mb-1">Added Date: {productDetail.createdAt}</p>
                                                <p className="font-16">
                                                    <span className="text-warning mdi mdi-star" />
                                                </p>
                                                {/* Product stock */}
                                                <div className="mt-3">
                                                    <h4><span className="badge badge-success-lighten">{productDetail.status}</span></h4>
                                                </div>
                                                {/* Product description */}
                                                <div className="mt-4">
                                                    <h6 className="font-14">Retail Price:</h6>
                                                    <h3> ${productDetail.price}</h3>
                                                </div>
                                                {/* Quantity */}
                                                {/* <div className="mt-4">
                                                    <h6 className="font-14">Quantity</h6>
                                                    <div className="d-flex">
                                                        <input type="number" min={1} defaultValue={1} className="form-control" placeholder="Qty" style={{ width: 90 }} />
                                                        <button type="button" className="btn btn-danger ms-2"><i className="mdi mdi-cart me-1" /> Add to cart</button>
                                                    </div>
                                                </div> */}
                                                {/* Product description */}
                                                <div className="mt-4">
                                                    <h6 className="font-14">Description:</h6>
                                                    <p>{productDetail.description}</p>
                                                </div>
                                                {/* Product information */}
                                                <div className="mt-4">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <h6 className="font-14">Available Stock:</h6>
                                                            <p className="text-sm lh-150">{productDetail.quantity}</p>
                                                        </div>
                                                        {countOrder && (
                                                            <div className="col-md-4">
                                                                <h6 className="font-14">Number of Orders:</h6>
                                                                <p className="text-sm lh-150">{countOrder.orderCount}</p>
                                                            </div>
                                                        )}
                                                        {revenueProduct && (
                                                            <div className="col-md-4">
                                                                <h6 className="font-14">Revenue:</h6>
                                                                <p className="text-sm lh-150">${revenueProduct.totalRevenue}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </form>
                                        </div> {/* end col */}
                                    </div>
                                )}
                                <div className="table-responsive mt-4">
                                    <table className="table table-bordered table-centered mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Outlets</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Revenue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>ASOS Ridley Outlet - NYC</td>
                                                <td>$139.58</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">478 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '56%' }} aria-valuenow={56} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$1,89,547</td>
                                            </tr>
                                            <tr>
                                                <td>Marco Outlet - SRT</td>
                                                <td>$149.99</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">73 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '16%' }} aria-valuenow={16} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$87,245</td>
                                            </tr>
                                            <tr>
                                                <td>Chairtest Outlet - HY</td>
                                                <td>$135.87</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">781 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$5,87,478</td>
                                            </tr>
                                            <tr>
                                                <td>Nworld Group - India</td>
                                                <td>$159.89</td>
                                                <td>
                                                    <div className="progress-w-percent mb-0">
                                                        <span className="progress-value">815 </span>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>$55,781</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* end table-responsive*/}
                            </div> {/* end card-body*/}
                        </div> {/* end card*/}
                    </div> {/* end col*/}
                </div>
                {/* end row*/}
            </div> {/* container */}
            {/* content */}

        </div>
    )
}

export default ProductDetail