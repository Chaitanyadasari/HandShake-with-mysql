import React from 'react';
import alt from '../../images/alt.png';

const JobItemApplicant = props => {
  return (
    <div>
      <div className='item'>
        <div className='ui tiny image'>
          <img src={alt} />
        </div>
        <button className='ui right floated basic primary button'>
          Update Status
        </button>
        <div className='middle aligned content'>
          <div className='header'>{props.application.application_id}</div>
          <div className='description'>
            <p></p>
          </div>
          <div className='extra'></div>
        </div>
      </div>
    </div>
  );
};

export default JobItemApplicant;
