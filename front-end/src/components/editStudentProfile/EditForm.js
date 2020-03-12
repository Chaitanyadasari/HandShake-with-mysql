import React from 'react';
import axios from 'axios';
import {Dropdown} from 'semantic-ui-react';

const university = [{text: 'San Jose State University', value: 'San Jose State University'}, {text: 'University of Southern California', value: 'University of Southern California'}, {text: 'Mumbai University', value: 'Mumbai University'}]
const degree = [{text: 'Masters', value: 'masters'}, {text: 'Bachelors', value: 'bachelors'}, {text: 'BE', value: 'BE'}]
const major = [{text: 'computer science', value: 'computer science'}, {text: 'Computer Engineering', value: 'Computer Engineering'}, {text: 'Software engineering', value: 'Software engineering'}]
const year = [{text: '2021', value: '2021'}, {text: '2020', value: '2020'}, {text: '2016', value: '2016'}]

class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {institution_name: '', degree: '', major: '', passing_year: '', cgpa: ''};
  }
  
  onCancel = () => {
    this.props.toggle();
  };

  onSave = (e) => {
    e.preventDefault();
    const data = {
                  institution_name: this.state.institution_name == ''?this.props.data.institution_name: this.state.institution_name,
                  degree: this.state.degree == ''?this.props.data.degree: this.state.degree,
                  major: this.state.major == ''?this.props.data.major: this.state.major,
                  passing_year: this.state.passing_year == ''? this.props.data.passing_year: this.state.passing_year,
                  cgpa: this.state.cgpa === ''? this.props.data.cgpa: this.state.cgpa}
    console.log(data);
    const id = this.props.data.education_id;
    axios
      .put(`http://localhost:3000/api/student/education/${id}`, data, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          this.props.onUpdateEducation({...data, education_id: id})
          console.log(res.data.result);
          
        } else {
            console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });   
    this.props.toggle();
  };

  onChangeHandlerCollege = (e, {value}) => {
    this.setState({institution_name: value}, () => {
      console.log("Dropdown", this.state.institution_name);
    })
  }

  onChangeHandlerDegree = (e, {value}) => {
    this.setState({degree: value}, () => {
      console.log("Dropdown", this.state.degree);
    })
  }

  onChangeHandlerMajor = (e, {value}) => {
    this.setState({major: value}, () => {
      console.log("Dropdown", this.state.major);
    })
  }
  
  onChangeHandlerYear = (e, {value}) => {
    this.setState({passing_year: value}, () => {
      console.log("Dropdown", this.state.passing_year);
    })
  }

  onChangeHandlerGPA = (e) => {
    this.setState({cgpa: e.target.value}, () => {
      console.log("input", this.state.cgpa);
    })
  }

  render() {
    return (
      <div>
        <div>
          <form className='ui equal width form'>
            <div class='field'>
                <label>School Name</label>
              <Dropdown 
              placeholder='School'
              fluid
              search
              selection
              value={this.state.institution_name == ''?this.props.data.institution_name: this.state.institution_name}
              options={university}
              onChange={this.onChangeHandlerCollege} />
            </div>
            <div class='field'>
                <label>Degree</label>
              <Dropdown 
              placeholder='Degree'
              fluid
              search
              selection
              value={this.state.degree == ''?this.props.data.degree: this.state.degree}
              options={degree}
              onChange={this.onChangeHandlerDegree} />
            </div>
            <div class='field'>
                <label>major</label>
              <Dropdown 
              placeholder='Major'
              fluid
              search
              selection
              value={this.state.major == ''?this.props.data.major: this.state.major}
              options={major}
              onChange={this.onChangeHandlerMajor} />
            </div>
            <div class='fields'>
                <div class='field'>
                    <label>Passing Year</label>
                    <Dropdown 
                    placeholder='Passing Year'
                    fluid
                    search
                    selection
                    value={this.state.passing_year == ''? this.props.data.passing_year: this.state.passing_year}
                    options={year}
                    onChange={this.onChangeHandlerYear} />
                </div>
                <div class='field'>
                <label>GPA</label>
                <input type="text" value={ this.state.cgpa === ''? this.props.data.cgpa: this.state.cgpa } placeholder="GPA" onChange={this.onChangeHandlerGPA} />
                </div>
            </div>
            <div>
                <button class='ui button' onClick={this.onCancel}>Cancel</button>
                <button class='ui positive button' onClick={this.onSave}>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditForm;
