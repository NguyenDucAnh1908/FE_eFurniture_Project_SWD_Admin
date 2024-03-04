import React, { PureComponent, useState, useEffect } from 'react'
import { DataTopProductSale } from '../../services/ChartApi/ChartApi'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartTopProductSale = () => {

  const [dataTopProductSale, setDataTopProductSale] = useState([]);

  useEffect(() => {
    getDataTopProductSale();
  }, []);

  const getDataTopProductSale = async () => {
    try {
      let res = await DataTopProductSale();
      setDataTopProductSale(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <>

      <div style={{ width: '100%' }}>
        <h4>Top Product sale</h4>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            width={500}
            height={200}
            data={dataTopProductSale}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product.name" />
            <YAxis />
            <Tooltip formatter={(value, name, props) => [value, props.payload.date]} />
            <Area type="monotone" dataKey="totalSold" stroke="#CD69C9" fill="#CD69C9" />
            {/* <Area type="monotone" dataKey="date" stroke="#8884d8" fill="#8884d8" /> */}
          </AreaChart>
        </ResponsiveContainer>
        {/* <p>Maybe some other content</p> */}

        {/* <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer> */}
      </div>
    </>
  )
}

export default ChartTopProductSale
