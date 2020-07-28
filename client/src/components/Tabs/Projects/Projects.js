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
        <Card key={item._id} title={item.title} body={item.body} />
      ))}
    </div>
  );
};

export default Projects;
