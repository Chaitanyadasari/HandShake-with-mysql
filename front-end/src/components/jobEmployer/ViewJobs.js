import React from 'react';
import Header from '../Header';
import axios from 'axios';
import JobItemEmployer from './JobItemEmployer';

class ViewJobs extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    const id = 2;
    axios
      .get(`http://localhost:3000/api/job/postings/${id}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ jobs: res.data.result }, () => {
            console.log(this.state.jobs);
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
        <div
          className='ui teal inverted segment'
          style={{ marginTop: '0px', paddingLeft: '40px' }}
        >
          <b>
            <h3>Job Postings</h3>
          </b>
        </div>
        
          {this.state.jobs.map(job => {
            return (
              
            <div className='ui raised segment' style={{marginLeft: '20px', width: '70%'}} >
                <JobItemEmployer key={job} job={job} />
              </div>
            );
          })}   
      </div>
    );
  }
}

export default ViewJobs;
