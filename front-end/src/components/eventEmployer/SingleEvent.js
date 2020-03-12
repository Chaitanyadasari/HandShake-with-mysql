import React from 'react';
import axios from 'axios';
import Header from '../Header';

class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = { registeredStudents: [] };
  }
  componentDidMount() {
    const id = 2;
    axios
      .get(`http://localhost:3000/api/event/company/${id}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ registeredStudents: res.data.result }, () => {
            console.log(this.state.registeredStudents);
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
      </div>
    );
  }
}

export default SingleEvent;
