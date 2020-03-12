import React from 'react';
import {Redirect} from 'react-router';
import alt from '../../images/alt.png';

class EventItemEmployer extends React.Component {
    constructor() {
        super();
        this.state ={redirect:''};
    }
  onClickHandler = () => {
  this.setState({redirect: <Redirect to={{pathname: '/company/myevent', state: {post: this.props.event }}} />})
  };

  render() {
    return (
        <div>
            {this.state.redirect}
          <div className='item'>
            <div className='ui tiny image'>
              <img src={alt} />
            </div>
            <button
              className='ui right floated basic primary button'
              onClick={this.onClickHandler}
            >
              View Event
            </button>
            <div className='middle aligned content'>
              <div className='header'>{this.props.event.event_name}</div>
              <div className='description'>
                <p></p>
              </div>
              <div className='extra'></div>
            </div>
          </div>
        </div>
      );
  }
  
};

export default EventItemEmployer;
