import React from 'react';

class Form extends React.Component {
  state = { school: '', education: '', major: '', gpa: '', yop: ''};
  onSubmitHandler = e => {
    const formDetails = this.state;
    //console.log(formDetails);
    this.props.onEditHandler(this.props.id, formDetails);
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCancelHandler = e => {
    console.log('cancel');
  };


  render() {
    return (
      <div style={{marginBottom:'20px'}}>
        <form className='ui form'>
          <div className='field'>
            <label>School Name</label>
            <input
              type='text'
              name='school'
              placeholder='School Name'
              value={this.state.school}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className='field'>
            <label>Education level</label>
            <input
              type='text'
              name='education'
              placeholder='Education level'
              value={this.state.education}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className='field'>
            <label>Major</label>
            <input
              type='text'
              name='major'
              placeholder='Major'
              value={this.state.major}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className='field'>
            <label>Year of Passing</label>
            <input
              type='text'
              name='yop'
              placeholder='year of passing'
              value={this.state.yop}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className='field'>
            <label>GPA</label>
            <input
              type='text'
              name='gpa'
              placeholder='GPA'
              value={this.state.gpa}
              onChange={this.onChangeHandler}
            />
          </div>
          <button className='ui button' style={{float: 'left'}} onClick={this.onCancelHandler}>
            Cancel
          </button>
          <button className='ui button' style={{float: 'right'}} onClick={this.onSubmitHandler}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
