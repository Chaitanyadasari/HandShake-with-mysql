import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class EventPost extends React.Component {
  constructor() {
    super();
    this.state = {
      event_name: '',
      event_description: '',
      event_timing: '',
      event_from_date: '',
      event_to_date: '',
      event_location: '',
      event_eligibility_criteria: '',
      event_major: '',
      company_id: ''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/event', {
        event_name: this.state.event_name,
        event_description: this.state.event_description,
        event_timing: this.state.event_timing,
        event_from_date: this.state.event_from_date,
        event_to_date: this.state.event_to_date,
        event_location: this.state.event_location,
        event_eligibility_criteria: this.state.event_eligibility_criteria,
        event_major: this.state.event_major,
        company_id: 2
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/company/post' /> });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.redirect}
          <div style={{ float: 'left', width: '40%', marginTop: '20px' }}>
            <p>Handshake</p>
          </div>
          <div style={{ float: 'left', width: '40%', marginTop: '20px' }}>
            <form className='ui form' onSubmit={this.onSubmitHandler}>
              <div className='field'>
                <label>Event Name</label>
                <input
                  type='text'
                  name='event_name'
                  value={this.state.event_name}
                  placeholder='Event Name'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                  type='text'
                  name='event_description'
                  value={this.state.event_description}
                  placeholder='Description'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Timing</label>
                <input
                  type='text'
                  name='event_timing'
                  value={this.state.event_timing}
                  placeholder='Timing'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>From Date</label>
                <input
                  type='text'
                  name='event_from_date'
                  value={this.state.event_from_date}
                  placeholder='From Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>To Date</label>
                <input
                  type='text'
                  name='event_to_date'
                  value={this.state.event_to_date}
                  placeholder='To Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Event Location</label>
                <input
                  type='text'
                  name='event_location'
                  value={this.state.event_location}
                  placeholder='Event Loaction'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Eligibility Criteria</label>
                <input
                  type='text'
                  name='event_eligibility_criteria'
                  value={this.state.event_eligibility_criteria}
                  placeholder='Eligibility'
                  onChange={this.onChangeHandler}
                  
                />
              </div>
              <div className='field'>
                <label>Event Major</label>
                <input
                  type='text'
                  name='event_major'
                  value={this.state.event_major}
                  placeholder='Event Major'
                  onChange={this.onChangeHandler}
                  
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                {this.state.error && (
                  <div className='ui red message'>{this.state.error}</div>
                )}
              </div>
              <button className='ui button basic primary' type='submit'>
                Create Event
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventPost;
