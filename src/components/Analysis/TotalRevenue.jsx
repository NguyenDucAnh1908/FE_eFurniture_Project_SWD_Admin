import React, { useState, useEffect } from 'react'
import { DataTotalRevenue } from '../../services/AnalysisApi/AnalysisApi'

const TotalRevenue = () => {
    const [dataTotalRevenue, setDataTotalRevenue] = useState([]);
    useEffect(() => {
        getDataTotalRevenue();
    }, []);

    const getDataTotalRevenue = async () => {
        try {
            let res = await DataTotalRevenue();
            setDataTotalRevenue(res.data);
            //console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <div className="card-body">
                <div className="float-end">
                    <i className="mdi mdi-currency-usd widget-icon" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Average Revenue">Revenue</h5>
                <h3 className="mt-3 mb-3">${dataTotalRevenue.currentMonthRevenue}</h3>
                <p className="mb-0 text-muted">
                    <span className={dataTotalRevenue.revenueChangePercentage >= 0 ? "text-success me-2" : "text-danger me-2"}>
                        <i className={dataTotalRevenue.revenueChangePercentage >= 0 ? "mdi mdi-arrow-up-bold" : "mdi mdi-arrow-down-bold"} /> {Math.abs(dataTotalRevenue.revenueChangePercentage)}%
                    </span>
                    <span className="text-nowrap">Since last month</span>
                </p>
            </div>
        </>
    )
}

export default TotalRevenue
