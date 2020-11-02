import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Tech.css";
const Projects = () => {
  const [tech, setTech] = useState([]);
  useEffect(() => {
    Axios.get("/tech")
      .then((res) => {
        setTech(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div data-aos='fade-up' className='card2'>
      <p className='mobile-title' style={{ fontSize: "50px" }}>
        Technology
      </p>
      {tech.map((item) => (
        <div key={item._id} className='item'>
          {/* <i className='fab fa-react icon'></i> */}
          <img className='img' src={item.path} alt='tech_stack' />
          <div className='div-icon'></div>
          <p className='icon-name'>{item.title}</p>
        </div>
      ))}
      {/* <div className='item'>
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
      <div className='item'>
        <i className='fab fa-sass icon'></i>
        <img
          className='img'
          src='https://res.cloudinary.com/mercesletifer/image/upload/v1604301588/c-plus-plus-programming-language_fstu1g.svg'
          alt=''
        />
        <div className='div-icon'></div>
        <p className='icon-name'>C++</p>
      </div> */}
    </div>
  );
};

export default Projects;
