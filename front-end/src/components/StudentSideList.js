import React from 'react';

const StudentSideList = () => {
  return (
    <div className='ui vertical menu' style={{ width: '250px' }}>
      <div className='item'>
        <div className='header'>Filters</div>
      </div>
      <div className='item'>
        <div className='header'>Name</div>
        <div class='ui search'>
          <div class='ui icon input' style={{ marginTop: '10px' }}>
            <input class='prompt' type='text' placeholder='Enter a name...' />
            <i class='search icon'></i>
          </div>
          <div class='results'></div>
        </div>
      </div>
      <div className='item'>
        <div className='header'>Schools</div>
        <div class='ui checkbox' style={{marginBottom: '10px'}} >
          <input type='checkbox' name='example' />
          <label style={{fontSize: '13px'}} >San Jose State University Only</label>
        </div>
      </div>
      <div className='item'>
      <div className='header'>Alumni</div>
        <div class='ui checkbox' style={{marginBottom: '10px'}} >
          <input type='checkbox' name='example' />
          <label style={{fontSize: '13px'}} >Alumni Only</label>
        </div>
      </div>
      <div className='item'>
        <div className='header'>Support</div>
        <div className='menu'>
          <a className='item'>E-mail Support</a>
          <a className='item'>FAQs</a>
        </div>
      </div>
      <div className='item'>
        <div className='header'>Schools</div>
      </div>
      <div className='item'>
        <div className='header'>Support</div>
        <div className='menu'>
          <a className='item'>E-mail Support</a>
          <a className='item'>FAQs</a>
        </div>
      </div>
    </div>
  );
};

export default StudentSideList;
