import React from 'react'

const ChartRatingProduct = () => {
    return (
        <>
            <div className="chart-widget-list">
                <p>
                    <i className="mdi mdi-square text-primary" /> Direct
                    <span className="float-end">$300.56</span>
                </p>
                <p>
                    <i className="mdi mdi-square text-danger" /> Affilliate
                    <span className="float-end">$135.18</span>
                </p>
                <p>
                    <i className="mdi mdi-square text-success" /> Sponsored
                    <span className="float-end">$48.96</span>
                </p>
                <p className="mb-0">
                    <i className="mdi mdi-square text-warning" /> E-mail
                    <span className="float-end">$154.02</span>
                </p>
            </div>
        </>
    )
}

export default ChartRatingProduct
