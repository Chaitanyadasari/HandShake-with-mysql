import React from 'react';
import Header from '../Header';
import Bio from './Bio';
import axios from 'axios';
import Education from './Education';
import Experience from './Experience';
import AddForm from './AddForm';
import Skills from './Skills';
import {Form, TextArea} from 'semantic-ui-react';


class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      basicDetail: [],
      educationDetails: [],
      experienceDetails: [],
      showAddForm: false,
      showTextFrom: false,
      tempCareerObjective: ''
    };
  }
  componentDidMount() {
    //const id = this.props.location.state.id;
    const id = 1;
    axios.get(`http://localhost:3002/api/student/${id}`).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({ basicDetail: res.data.result });
      }
    });

    axios.get(`http://localhost:3002/api/student/education/${id}`).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({ educationDetails: res.data.result });
      }
    });

    axios
      .get(`http://localhost:3002/api/student/experience/${id}`)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          this.setState({ experienceDetails: res.data.result });
        }
      });
  }

  onAddSchoolClick = () => {
    this.setState({showAddForm: !this.state.showAddForm});
  }

  onAddSchool = (school) => {
    console.log('new', school);
    const list = [...this.state.educationDetails, school];
    console.log(list);
    this.setState({educationDetails: list});
    this.setState({showAddForm: !this.state.showAddForm});
  }

  onAddJourney = () => {
      this.setState({showTextFrom: !this.state.showTextFrom});
  }

  onCancelTextArea = () => {
    this.setState({showTextFrom: !this.state.showTextFrom});
  }
  
  onSaveTextArea = () => {
    const data = [...this.state.basicDetail];
    data[0].career_objective = this.state.tempCareerObjective;
    console.log('new', data);
    axios
      .post('http://localhost:3000/api/student/basic/1', data[0], {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          this.setState({basicDetail: data})
          
        } else {
            console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });  
    this.setState({showTextFrom: !this.state.showTextFrom});
  }

  onChangeCareerObjective = (e) => {
    this.setState({tempCareerObjective: e.target.value})
  }

  onUpdateEducation = (education) => {
    console.log(education)
    const data = this.state.educationDetails.map((item) => {
      if(item.education_id === education.education_id) {
        return education
      }
      return item;
    })
    this.setState({educationDetails: data});
  }

  renderTextForm = () => {
      return (
          <div>
              <Form>
                  <div style={{marginBottom: '10px'}}>
                    <p><text style={{color: 'blue'}}>What are you passionate about? What are you looking for on Handshake? What are your experiences or skills?</text></p>
                    <TextArea rows={2} placeholder='' value={this.state.tempCareerObjective} onChange={this.onChangeCareerObjective} />
                  </div>
                <div>
                    <button class='ui button' onClick={this.onCancelTextArea}>Cancel</button>
                    <button class='ui positive button' onClick={this.onSaveTextArea}>Save</button>
                </div>
            </Form>
          </div>
      )
  }
  render() {
    return (
      <div style={{backgroundColor: ''}}>
        <div>
          <Header/>
        </div>
        <div style={{display:'flex'}}>
        <div class="col-md-6" style={{marginTop: '20px'}}>
            <div style={{marginBottom: '20px'}}>
            {this.state.basicDetail.map(bio => {
            return <Bio bio={bio} />;
          })}
            </div>
            <div>
              {this.state.basicDetail.map(skill => {
                return <Skills skill={skill} />
              })}
            </div>
        </div>

        <div class="col-md-6" style={{ marginTop: '20px'}} >
            <div style={{marginBottom: '20px'}}>
                <div className='ui raised segment'>
                <b>My Journey</b>
                <i className='pencil alternate icon' style={{ float: 'right' }} onClick={this.onAddJourney}></i>
                <div style={{ marginTop: '10px' }}>
                    {!this.state.showTextFrom && this.state.basicDetail.map(item => {
                     return ( <p style={{ fontSize: '20px' }}>{item.career_objective}</p>);
                    })}
                    {this.state.showTextFrom && this.renderTextForm()}
                </div>
                </div>
            </div>
          <div style={{marginBottom: '20px'}}>
            <div className='ui raised segment'>
                <b>Education</b>
                <div className='ui items'>
                {this.state.educationDetails.map(education => {
                  return <Education key={education} onUpdateEducation={this.onUpdateEducation} education={education} />;
                })}
                </div>
                <div>
                    {!this.state.showAddForm && <button style={{background:'#1569e0', color:'white' }} class="fluid ui button" onClick={this.onAddSchoolClick}>Add School</button>}
                    {this.state.showAddForm && <AddForm onAddSchool={this.onAddSchool} toggle={this.onAddSchoolClick} />}
                </div>
            </div>
          </div>
          <div style={{marginBottom: '20px'}}>
            <div className='ui raised segment'>
                <b>Work & Volunteer Experience</b>
              <div className='ui items'>
              {this.state.experienceDetails.map(experience => {
                return <Experience key={experience} experience={experience} />;
              })}
              </div>
              <div>
              <button style={{background:'#1569e0', color:'white' }} class="fluid ui button">Add Work Experience</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default StudentProfile;
