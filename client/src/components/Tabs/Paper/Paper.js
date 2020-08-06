import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Paper.css";

const Paper = () => {
  const [paper, setpaper] = useState([]);
  useEffect(() => {
    axios.get("/paper").then((res) => {
      // console.log(res.data);
      setpaper(res.data);
    });
  }, []);
  return (
    <div data-aos='fade' className='card3'>
      <p className='mobile-title' style={{ fontSize: "55px" }}>
        Certificates
      </p>
      {paper.map((paper) => (
        <div key={paper._id} className='paper-content'>
          {/* <div className='paper-img'></div> */}
          <img className='paper-img' src={paper.path} alt='papers' />
          <div className='paper-divider'></div>
          <h1 className='paper-title'>{paper.title}</h1>
          <h2 className='paper-date'>{paper.date}</h2>
        </div>
      ))}
    </div>
  );
};

export default Paper;
