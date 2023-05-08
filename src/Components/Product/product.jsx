import "./product.css";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Product = () => {
  let API =
    "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/history?timePeriod=7d";
  const options = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token":
        "coinranking11509cab5cd35991f22cf0f745fec0dc4bc07ec3cc70a476",
    },
  };
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(API, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const history = data.data.history.slice(-7); // Get the last 7 weeks of data
          const chartData = history.map((item) => ({
            name: new Date(item.timestamp * 1000).toLocaleString(),
            value: parseFloat(item.price),
          }));
          setChartData(chartData);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="top-products-card">
        <div className="top">Top Products</div>
        <div className="chart2">
          <PieChart width={400} height={150}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="data__pie">
          <div>
            Basic Tees<p className="new_p">55%</p>
          </div>
          <div>
            Custom Short Pants<p className="new_p">55%</p>
          </div>
          <div>
            Super Hoodies<p className="new_p">55%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
