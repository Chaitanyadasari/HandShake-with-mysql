import React from 'react';

const Experience = props => {
  console.log(props);
  return (
    <div>
      <div>
        <div className='item'>
          <div
            className='ui mini spaced image'
            style={{ float: 'left', marginRight: '10px', marginBottom: '20px' }}
          >
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </div>
          <div className='middle alligned content'>
            <div className='header'>
            <i className='pencil alternate icon' style={{ float: 'right' }}></i>
                <h4>{props.experience.company_name}</h4>
            </div>
            <div className='meta'>
              <div>
                <span className='designation'>{props.experience.designation}</span>
              </div>
              <div>
                <span className='date'>{props.experience.starting_date} - {props.experience.ending_date} | {props.experience.company_location}</span>
              </div>
            </div>
            <div className='description'>Work Summary: {props.experience.work_summary}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
