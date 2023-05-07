import React from "react";
import "./dashBoard.css";
import { BiLike } from "react-icons/bi";
import { SlPeople } from "react-icons/sl";
import { BsTags } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
const Dashboard = () => {
  return (
    <>
      <div className="total-transactions">
        <div className="card">
          <div className="card1" />
        </div>
        <div className="total-transactions1">Total Transactions</div>
        <b className="b">1,520</b>
        <div className="vector-icon1">
          <BsTags />
        </div>
      </div>
      <div className="total-revenues">
        <div className="card">
          <div className="card3" />
        </div>
        <div className="total-revenues1">Total Revenues</div>
        <b className="b1">$2,129,430</b>
        <div className="vector-icon1">
          {" "}
          <TfiWallet />
        </div>
      </div>
      <div className="total-likes">
        <div className="card">
          <div className="card5" />
        </div>
        <div className="total-likes1">Total Likes</div>
        <b className="b2">9,721</b>
        <div className="vector-icon1">
          {" "}
          <BiLike />
        </div>
      </div>
      <div className="total-users">
        <div className="card">
          <div className="card7" />
        </div>
        <div className="vector-icon1">
          {" "}
          <SlPeople />
        </div>
        <div className="total-users1">Total Users</div>
        <b className="b3">892</b>
      </div>
    </>
  );
};

export default Dashboard;
