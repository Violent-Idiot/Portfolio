import Axios from "axios";
import React, { useEffect, useState } from "react";
import gif from "../Projects/Bean.gif";
import "./Tech.css";

const Projects = () => {
  const [tech, setTech] = useState([]);
  const [load, setload] = useState(null);
  useEffect(() => {
    setload(true);
    Axios.get("/tech")
      .then((res) => {
        setTech(res.data);
        setload(false);

        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div data-aos='fade-up' className='card2'>
      <p className='mobile-title' style={{ fontSize: "50px" }}>
        Technology
      </p>
      {load && (
        <div className='loader'>
          <img src={gif} alt='loader' />
          <p>Fetching Data</p>
        </div>
      )}
      {tech.map((item) => (
        <div key={item._id} className='item'>
          {/* <i className='fab fa-react icon'></i> */}
          <img className='img' src={item.path} alt='tech_stack' />
          <div className='div-icon'></div>
          <p className='icon-name'>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
