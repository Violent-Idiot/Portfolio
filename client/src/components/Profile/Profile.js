import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <React.Fragment>
      <div className='profile'>
        <div className='picture'></div>
        <div className='about'>
          <h1 style={heading}>YELO</h1>
          <p style={sizing}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            placeat praesentium accusantium repellendus voluptatibus. Quisquam
            quis, voluptatum vero provident enim laborum velit quibusdam
            inventore, aliquid quidem, impedit accusamus minima. Itaque.
          </p>
        </div>
      </div>
      <div className='scroll'>
        <p style={scroll}>Scroll Down</p>
        <div className='burger'>
          <i className='fas fa-chevron-down'></i>
          <i className='fas fa-chevron-down'></i>
          <i className='fas fa-chevron-down'></i>
        </div>
      </div>
    </React.Fragment>
  );
};

const scroll = {
  color: "white",
  fontSize: "30px",
};

const sizing = {
  fontSize: "20px",
  color: "white",
  marginTop: "20px",
};

const heading = {
  color: "white",
  fontSize: "50px",
};

export default Profile;
