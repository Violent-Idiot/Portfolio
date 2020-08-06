import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <React.Fragment>
      <div className='profile'>
        <img src='./assets/profile-img.jpeg' alt='' className='picture' />
        {/* <div className='picture'></div> */}
        <div className='about'>
          <h1 style={heading}>Aryan</h1>
          <p style={sizing}>
            Me live in Ahmedabad. This no final Content. Me do afterward. This
            beta testing.
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
