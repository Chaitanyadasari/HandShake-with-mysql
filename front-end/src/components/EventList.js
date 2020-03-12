import React from 'react';
import EventItem from './EventItem';

const EventList = ({ eventList }) => {
  const list = eventList.map(event => {
    return (
      <div
        className='ui raised segment '
        style={{
          marginTop: '40px',
          marginLeft: '40px',
          marginBottom: '20px',
          marginRight: '20px',
          paddingTop: '10px'
        }}
      >
        <EventItem event={event} />
      </div>
    );
  });
  return (
    <div className='ui items' style={{ width: '800px' }}>
      {list}
    </div>
  );
};

export default EventList;
