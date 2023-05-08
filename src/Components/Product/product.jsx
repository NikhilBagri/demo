import React from "react";
import "./product.css";
import { PieChart, Pie } from "recharts";

const Product = () => {
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  return (
    <div>
      <div className="top-products-card">
        <div className="top">Top Products</div>
        <div className="chart2">
          <PieChart width={150} height={150}>
            <Pie data={data} dataKey="students" outerRadius={60} fill="green" />
          </PieChart>
        </div>
        <div className="may">May - June 2021</div>
        <div className="tees"> Basic Tees<p className="55">55%</p></div>
      </div>
    </div>
  );
};

export default Product;
