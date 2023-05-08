import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <>
      <div className="schedules-card">
        <div className="card10">
          <div className="card9" />
        </div>
        <b className="todays-schedule">Today’s schedule</b>
        <div className="meeting-with-suppliers-from-ku-parent">
          <b className="meeting-with-suppliers">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="div12">14.00-15.00</div>
          <div className="at-sunset-road">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="group-child" />
        </div>
        <div className="see-all">See All</div>
        <img className="vector-icon5" alt="" src="/vector4.svg" />
        <div className="check-operation-at-giga-factor-parent">
          <b className="meeting-with-suppliers">
            Check operation at Giga Factory 1
          </b>
          <div className="div12">18.00-20.00</div>
          <div className="at-sunset-road">{`at Central Jakarta `}</div>
          <div className="group-item" />
        </div>
      </div>
    </>
  );
};

export default Schedule;
