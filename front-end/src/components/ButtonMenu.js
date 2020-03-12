import React from 'react';

const ButtonMenu = props => {


  return (
    <div>
      <div className='ui menu' style={{marginTop: '15px', width: '740px', marginLeft: '40px'}}>
        <div className='item'>
          <button className='ui primary basic button'>Search Events </button>
        </div>
        <div className='item'>
          <button className='ui primary basic button'>Find Career Fairs</button>
        </div>
        <div className='item'>
          <button className='ui primary basic button'>Request Appointments</button>
        </div>
        <div className='item'>
          <button className='ui primary basic button'>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default ButtonMenu;
