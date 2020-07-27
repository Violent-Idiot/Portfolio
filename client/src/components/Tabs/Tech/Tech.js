import React from "react";
import "./Tech.css";
const Projects = () => {
  return (
    <div className='card2'>
      <div className='item'>
        <i className='fab fa-react icon'></i>
        <div className='div-icon'></div>
        <p className='icon-name'>React Js</p>
      </div>
      <div className='item'>
        <i className='fab fa-node-js icon'></i>
        <div className='div-icon'></div>
        <p className='icon-name'>Node Js</p>
      </div>
      <div className='item'>
        <i className='fab fa-html5 icon'></i>
        <div className='div-icon'></div>
        <p className='icon-name'>HTML</p>
      </div>
      <div className='item'>
        <i className='fab fa-css3-alt icon'></i>
        <div className='div-icon'></div>
        <p className='icon-name'>CSS</p>
      </div>
      <div className='item'>
        <i className='fab fa-sass icon'></i>
        <div className='div-icon'></div>
        <p className='icon-name'>SCSS</p>
      </div>
    </div>
  );
};

export default Projects;
