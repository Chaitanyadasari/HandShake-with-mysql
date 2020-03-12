import React from 'react';
import axios from 'axios';
import Header from './Header';
import ApplicationItem from './ApplicationItem';
import StudentSideList from './StudentSideList'

class Application extends React.Component {
  constructor() {
    super();
    this.state = {applications: []};
  }
  componentDidMount() {
      const id = 1;
    axios
      .get(`http://localhost:3000/api/application/apply/${id}`)
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
        <div style={{ float: 'left', width:'25%', marginLeft: '6%' , marginTop: '2%'}}>
            <StudentSideList /> 
          </div>
        <div style={{ float: 'left', width:'65%', marginTop: '2%'}}>
        {this.state.applications.map(application => {
            return (
              <div
                className='ui segment'
                style={{ marginLeft: '20px', width: '70%' }}
              >
                <ApplicationItem key={application.application_id} application={application} />
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default Application;