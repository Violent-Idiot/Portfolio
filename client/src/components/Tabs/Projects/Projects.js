import React, { useState, useEffect } from "react";
import axios from "axios";

import gif from "./Bean.gif";

import "./Projects.css";
import Card from "./Card";

const Projects = () => {
  const [body, setBody] = useState([]);
  const [load, setload] = useState(null);
  useEffect(() => {
    setload("true");
    axios.get("/project").then((res) => {
      setBody(res.data);
      setload(false);
    });
  }, []);

  return (
    <div data-aos='fade-up' className='card1'>
      {load && (
        <div className='loader'>
          <img src={gif} alt='loader' />
          <p>Fetching Data</p>
        </div>
      )}
      <p className='mobile-title'>Projects</p>
      {body.map((item) => (
        <React.Fragment key={item._id}>
          <Card title={item.title} pic={item.path} body={item.body} />
        </React.Fragment>
      ))}
      {/* <div className='card-divider-hor'></div> */}
    </div>
  );
};

export default Projects;
