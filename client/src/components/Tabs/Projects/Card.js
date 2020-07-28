import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className='card'>
      <div className='flexing'>
        {/* <img src={"./test_img.png"} alt='test_img' /> */}
      </div>
      <div className='discription'>
        <div className='title'>{title}</div>
        <div className='content'>{body}</div>
      </div>
    </div>
  );
};

export default Card;
