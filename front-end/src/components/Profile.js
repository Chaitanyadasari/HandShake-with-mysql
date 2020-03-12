import React from 'react';
import Header from './Header';
import SideList from './SideList';
import MainList from './MainList';
import EducationList from './EducationList';

class Profile extends React.Component {
  state = {
    bio: {
      name: 'Chaitanya',
      lastName: 'Dasari',
      university: 'San Jose State University',
      degree: 'Masters',
      course: 'Software Engineering',
      description:
        'Software engineer living in San Jose who enjoys playing cricket and hanging with his friend.',
      gpa: '3.65'
    },
    skills: ['C++', 'Java', 'Python', 'Algorithms', 'Data Mining'],
    education: [
      {
        university: 'San Jose State University',
        degree: 'Software Engineering',
        gpa: '3.65'
      },
      {
        university: 'VIT University',
        degree: 'Electronics and Communications',
        gpa: '3.50'
      }
    ],
    onEdit: [false, false],
    work: ['Oracle']
  };

  onEditHandler = (id, formDetail) => {
    let newList = [...this.state.onEdit];
    if (formDetail != undefined) {
      let educationList = [...this.state.education];
      educationList[id].university = formDetail.school;
      educationList[id].degree = formDetail.major;
      educationList[id].gpa = formDetail.gpa;
      newList[id] = !this.state.onEdit[id];
      this.setState({ education: educationList, onEdit: newList });
    } else {
      newList[id] = !this.state.onEdit[id];
      this.setState({ onEdit: newList });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='container'>
          <div
            className='col-md-4'
            style={{ float: 'left', marginLeft: '50px', marginTop: '50px', width:"25%" }}
          >
            <SideList bio={this.state.bio} skills={this.state.skills} />
          </div>

          <div
            className='col-md-8'
            style={{ float: 'left', marginLeft: '70px', marginTop: '50px', width: '60%' }}
          >
            <MainList
              education={this.state.education}
              onEdit={this.state.onEdit}
              onEditHandler={this.onEditHandler}
              work={this.state.work}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
