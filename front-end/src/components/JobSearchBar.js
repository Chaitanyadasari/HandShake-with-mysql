import React from 'react';

const JobSearchBar = () => {
  return (
    <div
      className='ui raised segment'
      style={{
        marginLeft: '40px',
        marginRight: '40px',
        marginTop: '20px',
        height: '24%'
      }}
    >
      <div>
        <div style={{ width: '48%', float: 'left' }}>
          <div className='ui icon input' style={{ width: '100%' }}>
            <input
              type='text'
              placeholder='Job titles, employers, or keywords'
            />
            <i className='search icon'></i>
          </div>
        </div>
        <div
          style={{
            width: '48%',
            float: 'right',
            marginLeft: '20px'
          }}
        >
          <div className='ui icon input' style={{ width: '100%' }}>
            <input
              type='text'
              placeholder='City, State, Zip Code, or Address'
            />
            <i className='search icon'></i>
          </div>
        </div>
      </div>
      <div>
        <div
          role='list'
          className='ui bulleted horizontal link list'
          style={{ marginTop: '10px' }}
        >
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            software
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            computer science
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            developer
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            information technology
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            data science
          </a>
          <a role='listitem' className='item' style={{ color: '#1E90FF' }}>
            machine learning
          </a>
        </div>
      </div>
      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        <button className='ui blue basic button' style={{borderRadius: '25px'}}>Full-Time Job</button>
        <button className='ui blue basic button' style={{marginLeft: '10px', borderRadius: '25px'}}>Part-Time</button>
        <button className='ui blue basic button' style={{marginLeft: '10px', borderRadius: '25px'}}>Internship</button>
        <button className='ui blue basic button' style={{marginLeft: '10px', borderRadius: '25px'}}>On-Campus</button>
        <button className='ui blue basic button' style={{marginLeft: '10px', borderRadius: '25px'}}>
            <i class="filter icon"></i>
                Filters
        </button>
        <button className='ui blue right floated basic button' style={{marginLeft: '10px', borderRadius: '25px'}}>My Favorite Jobs</button>
      </div>
    </div>
  );
};

export default JobSearchBar;
