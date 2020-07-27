import React, { useState, useEffect } from "react";
import axios from "axios";
// import name from "./test_img.png";
import "./Projects.css";
const Projects = () => {
  // const [state, setstate] = useState("http://localhost:5000/");
  const [body, setBody] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      console.log(res.data);
      setBody(res.data);
      // console.log(body);
    });
  }, []);

  return (
    <div className='card1'>
      <div className='card'>
        <div className='flexing'>
          {/* <img src={"./test_img.png"} alt='test_img' /> */}
        </div>
        <div className='discription'>
          <div className='title'>THE TITLE</div>
          <div className='content'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            laboriosam eos soluta aspernatur, corrupti voluptatum modi suscipit
            architecto mollitia, dolor dolore pariatur tempora neque, veritatis
            itaque illum quod repellendus quasi.
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='flexing'></div>
        <div className='discription'>
          <div className='title'>THE TITLE2</div>
          <div className='content'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            laboriosam eos soluta aspernatur, corrupti voluptatum modi suscipit
            architecto mollitia, dolor dolore pariatur tempora neque, veritatis
            itaque illum quod repellendus quasi.
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='flexing'></div>
        <div className='discription'>
          <div className='title'>THE TITLE2</div>
          <div className='content'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            laboriosam eos soluta aspernatur, corrupti voluptatum modi suscipit
            architecto mollitia, dolor dolore pariatur tempora neque, veritatis
            itaque illum quod repellendus quasi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
