import React from "react";
import "./home.css";
const home = (props) => {
  return (
    <div className='yoman'>
      <p className='logo-name'>{props.name}</p>
    </div>
  );
};

export default home;
