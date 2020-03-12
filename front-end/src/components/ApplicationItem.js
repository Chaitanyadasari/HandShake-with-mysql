import React from 'react';
import alt from '../images/alt.png';

class ApplicationItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
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
            Withdraw
          </button>
          <div className='middle aligned content'>
            <div className='header'>{this.props.application.job_id}</div>
            <div className='description'>
              <p></p>
            </div>
            <div className='extra'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApplicationItem;
