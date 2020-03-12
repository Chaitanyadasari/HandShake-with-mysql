import React from 'react';
import img from '../../images/sjsu2.png';
import EditForm from './EditForm';

class Education extends React.Component {
    constructor() {
        super();
        this.state = {showAddForm: false}
    }
    onClickHandler = () => {
        this.setState({showAddForm: !this.state.showAddForm});
    }

    renderForm = () => {
        return (
            <div>
                <div
                className='ui mini spaced image' style={{ float: 'left', marginRight: '10px', marginBottom: '50px' }}
              >
                <img src={img} />
              </div>
              <div className='middle alligned content'>
                <div className='header'>
                <i className='pencil alternate icon' onClick={this.onClickHandler} style={{ float: 'right' }}></i>
                  <h4>{this.props.education.institution_name}</h4>
                </div>
                <div className='meta'>
                  <div>
                    <span className='degree'>{this.props.education.degree}</span>
                  </div>
                  <div>
                    <span className='passing_year'>{this.props.education.passing_year}</span>
                  </div>
                  <div>
                    <span className='major'>Major in {this.props.education.major}</span>
                  </div>
                  <div>
                    <span className='gpa'>Cumulative GPA: {this.props.education.cgpa}</span>
                  </div>
                </div>
                <div className='description'></div>
              </div>
            </div>
            
        )
    }
    render() {
    return (
        <div>
          <div>
            <div className='item'>
              {!this.state.showAddForm && this.renderForm()}
              {this.state.showAddForm && <EditForm data={this.props.education} toggle={this.onClickHandler} onUpdateEducation={this.props.onUpdateEducation}/>}
            </div>
          </div>
        </div>
      );
  }
  
};

export default Education;
