import React from 'react';
import Header from './Header';
import StudentSideList from './StudentSideList';
import StudentList from './StudentList';

class Students extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <div
          className='ui teal inverted segment'
          style={{ marginTop: '0px', paddingLeft: '40px' ,background:'#1569e0'}}
        >
          <b>
            <h3>Find Students</h3>
          </b>
        </div>
        <div
          className='container'
          style={{ marginLeft: '40px', marginTop: '30px' }}>
          <div style={{ float: 'left', width:'25%', marginLeft: '30px' }}>
            <StudentSideList />
          </div>
            <div style={{ float: 'left', marginLeft: '15px', width: '65%' }}>
              <StudentList />
            </div>
        </div>
      </div>
    );
  }
}

export default Students;
