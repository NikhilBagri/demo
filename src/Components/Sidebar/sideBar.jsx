import React from "react";
import "./sideBar.css";
import {AiOutlinePieChart} from 'react-icons/ai'
import {CiSettings} from 'react-icons/ci'
import {CgProfile} from 'react-icons/cg'
import {TfiCalendar} from 'react-icons/tfi'
import {BsTags} from 'react-icons/bs'


const Sidebar = () => {
  return (
    <nav className="navigation">
      <div className="left-side" />
      <div className="help">Help</div>
      <div className="contact-us">Contact Us</div>
      <div className="settings"><CiSettings/>&nbsp;&nbsp;Settings</div>
      <div className="users"><CgProfile/>&nbsp;&nbsp;Users</div>
      <div className="schedules"><TfiCalendar/>&nbsp;&nbsp;Schedules</div>
      <div className="transactions"><BsTags/>&nbsp;&nbsp;Transactions</div>
      <b className="dashboard1"><AiOutlinePieChart/>&nbsp;&nbsp;Dashboard</b>
      <b className="board">Board.</b>
    </nav>
  );
};

export default Sidebar;
