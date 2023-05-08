import React from "react";
import "./activity.css";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample chart data
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Activity = () => {
  let API =
    "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history?timePeriod=7d";
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'coinranking11509cab5cd35991f22cf0f745fec0dc4bc07ec3cc70a476',
      },
    };
  const fetchApiData = async (url) => {
    try {
      // const res = await fetch(url);
      // const data = await res.json();
      // console.log(data.rates);
      fetch(url, options)
        .then((response) => response.json())
        .then((result) => console.log(result));
      // pdata[0]["student"] = 50;
    } catch (error) {
      console.log(error);
    }
  };
  // bitcoin uuid Qwsogvtv82FCd
  useEffect(() => {
    fetchApiData(API);
  }, []);
  return (
    <>
      <div className="activities-card">
        <div className="name">Activities</div>
        {/* <div className="linechart">
          <LineChart />
        </div> */}
        <div className="chart">
          <LineChart
            width={1000}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </>
  );
};

export default Activity;
