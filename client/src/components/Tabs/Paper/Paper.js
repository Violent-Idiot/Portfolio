import React from "react";
import "./Paper.css";

const Paper = () => {
  return (
    <div data-aos='fade' className='card3'>
      <p className='mobile-title' style={{ fontSize: "55px" }}>
        Certificates
      </p>

      <div className='paper-content'>
        <div className='paper-img'></div>
        <div className='paper-divider'></div>
        <h1 className='paper-title'>THE CERTIFICATE</h1>
        <h2 className='paper-date'>29th June 3012</h2>
      </div>
    </div>
  );
};

export default Paper;
