import React from 'react';
import "./Content02.css";

function Content02({ data }) {
  return (
    <div className='content02_container'>
        <div>
            <img src={data.image} alt='content' />
        </div>
        <div>
            <h1>{data.headContent}</h1>
            <p>{data.subContentHead01}</p>
            <p>{data.subContentHead02}</p>
        </div>
    </div>
  );
}

export default Content02;