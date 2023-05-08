import React from "react";
import "./header.css";
import { BsBell } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";
import { GrLogout, GrLogin } from "react-icons/gr";
import { UserAuth } from "../../Context/AuthContext";

const Header = () => {
  const { user, logout } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="header">
        <b className="dashboard2">Dashboard</b>
        <div className="search-bar">
          <div className="white">
            <div className="button" />
          </div>
          <div className="search">Search...</div>
          <div className="search-icon">
            <RxMagnifyingGlass />
          </div>
        </div>
        {user?.displayName ? (
          <button className="logout" alt="logout" onClick={handleSignOut}>
            <GrLogout size={20} />
          </button>
        ) : (
          <button className="signin__button">
            <GrLogin size={20} />
          </button>
        )}
        <div className="vector-icon6">
          <BsBell size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
