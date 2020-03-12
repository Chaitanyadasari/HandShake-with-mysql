import React from 'react';
import axios from 'axios';
import Header from '../Header';
import JobItemApplicant from './JobItemApplicant';

class JobApplicants extends React.Component {
  constructor() {
    super();
    this.state = { applications: [] };
  }
  componentDidMount() {
    const id = this.props.location.state.job.job_id;
    axios
      .get(`http://localhost:3000/api/application/job/${id}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ applications: res.data.result }, () => {
            console.log(this.state.applications);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
        {this.state.applications.map(application => {
            return (
            <div className='ui raised segment' style={{marginLeft: '20px', width: '70%'}} >
                <JobItemApplicant key={application.application_id} application={application} />
              </div>
            );
          })}  
        </div>
      </div>
    );
  }
}

export default JobApplicants;
