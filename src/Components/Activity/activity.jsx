
import "./activity.css";
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Activity = () => {
  let API =
    "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history?timePeriod=7d";
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'coinranking11509cab5cd35991f22cf0f745fec0dc4bc07ec3cc70a476',
      },
    };
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(API, options)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          const history = data.data.history.slice(-7); // Get the last 7 weeks of data
          const chartData = history.map(item => ({
            name: new Date(item.timestamp * 1000).toLocaleString(),
            pv: parseFloat(item.price),
          }));
          setChartData(chartData);
        }
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <div className="activities-card">
        <div className="name">Activities</div>
        <div className="chart">
        <LineChart
      width={990}
      height={200}
      data={chartData}
      margin={{
        top: 9,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
        </div>
      </div>
    </>
  );
};

export default Activity;
