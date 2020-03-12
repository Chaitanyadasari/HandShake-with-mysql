import React from 'react';

const EventSideList = props => {
  return (
    <div className='ui segment' style={{width: '400px'}} >
      <div className='ui divided list'>
        <div className='item' style={{marginTop: '5px'}} >
          <div className='content'>
            <div className='header'>Your Upcoming Events</div>
            <div>
                <br></br>
            You have no upcoming events.
            </div>
            <div>
            <i aria-hidden="true" className="search icon"></i>
                <a >Find some events</a>
            </div>
          </div>
        </div>
        <div className='item' style={{marginTop: '10px'}}>
          <div className='content'>
            <div className='header'>Your Upcoming Appointments</div>
            <div>
                <br></br>
            Request an appointment.
            </div>
            <div>
            <i aria-hidden="true" className="search icon"></i>
                <a >Find some events</a>
            </div>
          </div>
        </div>
        <div className='item' style={{marginTop: '10px'}}>
          <div className='content'>
            <div className='header'>Your Upcoming Career Fairs</div>
            <div>
                <br></br>
            Find some career fairs.
            </div>
            <div>
            <i aria-hidden="true" className="search icon"></i>
                <a >Find some events</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSideList;