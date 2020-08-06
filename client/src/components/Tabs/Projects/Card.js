import React from "react";

const Card = ({ title, body, pic }) => {
  return (
    <React.Fragment>
      <div className='card'>
        {/* <div className='flexing'> */}
        <img src={pic} alt='test_img' className='flexing' />
        {/* </div> */}
        <div className='card-divider-ver'></div>
        <div className='discription'>
          <div className='title'>{title}</div>
          <div className='content'>{body}</div>
        </div>
      </div>
      {/* <div className='card-divider-hor'></div> */}
    </React.Fragment>
  );
};

export default Card;
