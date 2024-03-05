import React, { useState, useEffect } from 'react'
import { DataTotalUser } from '../../services/AnalysisApi/AnalysisApi'

const TotalCustomersThisMonth = () => {
    const [dataTotalUser, setDataTotalUser] = useState([]);
    useEffect(() => {
        getDataTotalUser();
    }, []);

    const getDataTotalUser = async () => {
        try {
            let res = await DataTotalUser();
            setDataTotalUser(res.data);
            //console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            <div className="card-body">
                <div className="float-end">
                    <i className="mdi mdi-account-multiple widget-icon" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Customers</h5>
                <h3 className="mt-3 mb-3">{dataTotalUser.usersThisMonth}</h3>
                <p className="mb-0 text-muted">
                    {/* <span className="text-success me-2"><i className="mdi mdi-arrow-up-bold" /> {dataTotalUser.percentageChange}%</span>
                    <span className="text-danger me-2"><i className="mdi mdi-arrow-down-bold" /> {dataTotalUser.percentageChange}%</span> */}
                    <span className={dataTotalUser.percentageChange >= 0 ? "text-success me-2" : "text-danger me-2"}>
                        <i className={dataTotalUser.percentageChange >= 0 ? "mdi mdi-arrow-up-bold" : "mdi mdi-arrow-down-bold"} /> {Math.abs(dataTotalUser.percentageChange)}%
                    </span>

                    <span className="text-nowrap">Since last month</span>
                </p>
            </div>
        </>
    )
}

export default TotalCustomersThisMonth
