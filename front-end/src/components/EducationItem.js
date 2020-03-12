import React from 'react';
import Form from './Form';

const EducationItem = props => {
    console.log(props);    
  const onClickHandler = () => {
    props.onEditHandler(props.id, undefined);
  }

  if (props.flag == true) {
      return (
          <Form id={props.id} onEditHandler={props.onEditHandler} flag={props.flag} />
      );
  } else {
    return (
        <div className='item'>
          <div className='ui tiny image'>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </div>
          <div className='content'>
            <div className='header'>{props.item.university}</div>
            <button onClick={onClickHandler} class="ui icon right floated button">
                <i class="edit icon"></i>
            </button>
            <div className='meta'>
              <div>
                <span className='major'>{props.item.degree}</span>
              </div>
              <div>
                <span className='gpa'>Cumulative GPA: {props.item.gpa}</span>
              </div>
            </div>
            <div className='description'></div>
          </div>
        </div>
      );
  }
  
};

export default EducationItem;
