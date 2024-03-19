import React, { useState, useEffect } from 'react'
import { DataTotalOrders } from '../../services/AnalysisApi/AnalysisApi'

const TotalOrders = () => {
    const [dataTotalOrder, setDataTotalOder] = useState([]);
    useEffect(() => {
        getDataTotalOrder();
    }, []);

    const getDataTotalOrder = async () => {
        try {
            let res = await DataTotalOrders();
            setDataTotalOder(res.data);
            //console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <div className="card-body">
                <div className="float-end">
                    <i className="mdi mdi-cart-plus widget-icon" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Quantites Of Product</h5>
                <h3 className="mt-3 mb-3">{dataTotalOrder.totalOrders}</h3>
                <p className="mb-0 text-muted">
                    {/* <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> {dataTotalOrder.orderChangePercentage}%</span> */}
                    <span className={dataTotalOrder.orderChangePercentage >= 0 ? "text-success me-2" : "text-danger me-2"}>
                        <i className={dataTotalOrder.orderChangePercentage >= 0 ? "mdi mdi-arrow-up-bold" : "mdi mdi-arrow-down-bold"} /> {Math.abs(dataTotalOrder.orderChangePercentage)}%
                    </span>

                    <span className="text-nowrap">Since last month</span>
                </p>
            </div>
        </>
    )
}

export default TotalOrders
