import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Projects.css";
import Card from "./Card";

const Projects = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
    axios.get("/project").then((res) => {
      setBody(res.data);
    });
  }, []);

  return (
    <div data-aos='fade-up' className='card1'>
      <p className='mobile-title'>Projects</p>
      {body.map((item) => (
        <React.Fragment key={item._id}>
          <Card title={item.title} body={item.body} />
        </React.Fragment>
      ))}
      {/* <div className='card-divider-hor'></div> */}
    </div>
  );
};

export default Projects;
