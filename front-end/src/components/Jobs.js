import React from 'react';
import axios from 'axios';
import Header from './Header';
import JobMenu from './JobMenu';
import JobSearchBar from './JobSearchBar';
import JobItemStudent from './JobItemStudent';

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = { jobs: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3002/jobs`)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          console.log('got the response');
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
        <Header />
        <JobMenu />
        <div>
          <JobSearchBar />
        </div>
        <div style={{marginTop: '20px', marginLeft: '20px'}} >
          {this.state.jobs.map(job => {
            return (
              <div
                className='ui segment'
                style={{ marginLeft: '20px', width: '50%' }}>
                <JobItemStudent key={job} job={job} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Jobs;
