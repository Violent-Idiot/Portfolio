import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Projects.css";
import Card from "./Card";

const Projects = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      setBody(res.data);
    });
  }, []);

  return (
    <div className='card1'>
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
