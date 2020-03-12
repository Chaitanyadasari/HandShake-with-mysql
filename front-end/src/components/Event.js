import React from 'react';
import axios from 'axios';
import Header from './Header';
import ButtonMenu from './ButtonMenu';
import EventItem from './EventItem';
import EventSideList from './EventSideList';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/event`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ upcomingEvents: res.data.result });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div>
            <ButtonMenu />
          </div>
          <div className='ui items' style={{float: 'left', width: '60%'}}>
            {this.state.upcomingEvents.map(event => {
              return (
                <div
                  className='ui segment'
                  style={{
                    marginTop: '40px',
                    marginLeft: '40px',
                    marginBottom: '20px',
                    marginRight: '20px'
                  }}
                >
                  <EventItem key={event.event_id} event={event} />
                </div>
              );
            })}
          </div>
          <div
            style={{
              float: 'left',
              marginTop: '60px',
              marginLeft: '30px',
              marginRight: '40px'
            }}
          >
            <EventSideList />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
