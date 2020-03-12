import React from 'react';
import img from '../images/DSC_0050.jpg';   

const BioCard = props => {
  return (
    <div>
      <div className='ui card'>
        <div className='image'>
          <img src={img}/>
        </div>
        <div className='content'>
          <div className='header'>
            {props.bio.name} {props.bio.lastName}
          </div>
          <div className='meta'>
            {props.bio.university}
            <br></br>
            {props.bio.course}
          </div>
          <div className='description'>{props.bio.description}</div>
        </div>
        <div className='extra content'>
          <a>GPA: {props.bio.gpa}</a>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
