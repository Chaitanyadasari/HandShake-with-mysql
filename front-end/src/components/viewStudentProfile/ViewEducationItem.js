import React from 'react';

const ViewEducationItem = props => {
    console.log(props);
  return (
    <div>
      <div className='item'>
        <div className='ui tiny image'>
          <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </div>
        <div className='content'>
          <div className='header'></div>
          <div className='meta'>
            <div>
              <span className='major'></span>
            </div>
            <div>
              <span className='gpa'>Cumulative GPA:</span>
            </div>
          </div>
          <div className='description'></div>
        </div>
      </div>
    </div>
  );
};

export default ViewEducationItem;
