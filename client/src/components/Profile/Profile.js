import React from "react";
import "./Profile.css";
import Timeline from "./Timeline";
const Profile = () => {
  return (
    <React.Fragment>
      <div className='profile'>
        <img
          src='https://res.cloudinary.com/mercesletifer/image/upload/v1604303400/portfolio/profile-img_eiqgne.jpg'
          alt=''
          className='picture'
        />
        {/* <div className='picture'></div> */}
        <div className='about'>
          <h1 style={heading}>Aryan N</h1>
          <p style={sizing}>
            I come from a small business town of Gujarat "AHMEDABAD" where it is
            believed that there is an entrepreneur hidden in each person, but am
            actually from GOD's own country "KERALA".
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
        {/* <div className='timeline'>
          <div className='timeline-img'></div>
          <p>fjnnrfiuu</p>
        </div> */}
      </div>
      <Timeline />
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Let's see what <br /> happens next
      </p>
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
