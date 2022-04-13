import React from 'react';
import './Content01.css';

function Content01({ data }) {
  return (
    <div className='content01_container'>
        <div>
            <img src={data.image} alt='content' />
        </div>
        <div>
            <h1>{data.headContent}</h1>
            <ul>
                <li>{data.subContentHead01}</li>
                <li>{data.subContentHead02}</li>
                <li>{data.subContentHead03}</li>
                <li>{data.subContentHead04}</li>
                <li>{data.subContentHead05}</li>
            </ul>
        </div>
    </div>
  );
}

export default Content01;