import React from 'react';
import {Redirect} from 'react-router';
import alt from '../../images/alt.png';

class JobItemEmployer extends React.Component {
    constructor() {
        super();
        this.state ={redirect:''};
    }
  onClickHandler = () => {
  this.setState({redirect: <Redirect to={{pathname: '/company/job/applicants', state: {job: this.props.job }}} />})
  };

  render() {
    return (
        
            <div>
              
              {this.state.redirect}
              
                <div
                className='ui tiny image' style={{ float: 'left', marginRight: '3%', marginBottom: '50px' }}>
                <img src={alt} />
              </div>
              <div className='middle aligned content'>
                <div className='header'>

                      <button
                  className='ui right floated basic primary button'
                  onClick={this.onClickHandler}>
                  View Applicants
                </button>

                  <h4>{this.props.job.job_title}</h4>
                </div>
                <div className='meta'>
                  <div>
                    <span className='degree'>{this.props.job.job_description}</span>
                  </div>
                  <div>
                    <span className='passing_year'>{this.props.job.job_category}</span>
                  </div>
                  <div>
                    <span className='major'>{this.props.job.job_location}</span>
                  </div>
                  <div>
                    <span className='gpa'>Job Application Deadline: {this.props.job.job_application_deadline}</span>
                  </div>
                </div>
                <div className='description'></div>
              </div>
            </div>        
        
        
        // <div>
        //     {this.state.redirect}
        //   <div className='item'>
        //     <div className='ui tiny image'>
        //       <img src={alt} />
        //     </div>
        //     <button
        //       className='ui right floated basic primary button'
        //       onClick={this.onClickHandler}
        //     >
        //       View Applicants
        //     </button>
        //     <div className='middle aligned content'>
        //       <div className='header'>{this.props.job.job_title}</div>
        //       <div className='description'>
        //         <p></p>
        //       </div>
        //       <div className='extra'></div>
        //     </div>
        //   </div>
        // </div>
      );
  }
  
};

export default JobItemEmployer;
