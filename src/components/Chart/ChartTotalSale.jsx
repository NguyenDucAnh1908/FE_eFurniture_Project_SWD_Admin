import React, { Component, useState, useEffect, PureComponent } from 'react'
import { DataTotalSale } from '../../services/ChartApi/ChartApi'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const ChartTotalSale = () => {
    const [dataTotalSaleChart, setDataTotalSaleChart] = useState([]);

    useEffect(() => {
        getDataTotalSaleChart();
    }, []);

    const getDataTotalSaleChart = async () => {
        try {
            let res = await DataTotalSale();
            setDataTotalSaleChart(res.data);
            //console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart
                    width={500}
                    height={200}
                    data={dataTotalSaleChart}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line connectNulls type="monotone" dataKey="totalMoney" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartTotalSale
