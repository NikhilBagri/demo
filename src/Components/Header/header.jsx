import React from 'react'
import './header.css'
import {BsBell} from 'react-icons/bs'
import {RxMagnifyingGlass} from 'react-icons/rx'

const Header = () => {
  return (
    <div>
      <div className="header">
        <b className="dashboard2">Dashboard</b>
        <div className="search-bar">
          <div className="white">
            <div className="button" />
          </div>
          <div className="search">Search...</div>
          <div className="search-icon"><RxMagnifyingGlass/></div>
        </div>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="vector-icon6"><BsBell/></div>
      </div>
    </div>
  )
}

export default Header
