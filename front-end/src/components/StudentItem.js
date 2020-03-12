import React from 'react';
import alt from '../images/alt.png';
import {Redirect} from 'react-router';

class StudentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirect: ''};
  }

  onClickHandler = () => {
    console.log(this.props.student.student_id);
    this.setState({redirect: <Redirect to={{pathname: '/student/profile', state: {id: this.props.student.student_id}}} />})
    
  }
  render() {
    return (
      <div className='item container' onClick={this.onClickHandler}>
        {this.state.redirect}
        <div
          className='ui tiny image'
          style={{ float: 'left', marginRight: '3%' }}>
          <img src={alt}/>
        </div>
        <div className='content'>
          <button className='ui right floated basic primary button'>
          <i class="comment icon"></i>
            Message
          </button>
          <a className='header'><h4>{this.props.student.student_name}</h4></a>
          <div className='meta'>
            <i className="university icon"></i>
            <span className='cinema'>{this.props.student.student_college_name}</span>
          </div>
          <div className='meta'>
          <i class="graduation cap icon"></i>
            <span className='cinema'>{this.props.student.major}</span>
          </div>
          <div className='description'>
          </div>
          <div className='extra'>
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default StudentItem;
