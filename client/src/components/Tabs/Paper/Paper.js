import React, { useEffect, useState } from "react";
import gif from "../Projects/Bean.gif";
import axios from "axios";
import "./Paper.css";

const Paper = () => {
  const [paper, setpaper] = useState([]);
  const [load, setload] = useState(null);
  useEffect(() => {
    setload(true);
    axios.get("/paper").then((res) => {
      // console.log(res.data);
      setpaper(res.data);
      setload(false);
    });
  }, []);
  return (
    <div data-aos='fade' className='card3'>
      <p className='mobile-title' style={{ fontSize: "55px" }}>
        Certificates
      </p>
      {load && (
        <div className='loader'>
          <img src={gif} alt='loader' />
          <p>Fetching Data</p>
        </div>
      )}
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
