import React, { PureComponent, useState, useEffect, useCallback } from 'react'
import { DataRating } from '../../services/ChartApi/ChartApi'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import FontAwesome from 'react-fontawesome'

const ChartRatingProduct = () => {
    const [dataRating, setDataRating] = useState([]);
    useEffect(() => {
        getDataRating();
    }, []);

    const getDataRating = async () => {
        try {
            let res = await DataRating();
            setDataRating(res.data);
            //console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, count } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.rating} ⭐️
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`User ${count}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
    return (
        <>
            <PieChart width={500} height={400}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={dataRating}
                    cx={250}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>

            {/* <div className="chart-widget-list">
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
            </div> */}
        </>
    )
}

export default ChartRatingProduct
