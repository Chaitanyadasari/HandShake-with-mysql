import React from 'react';
import EducationItem from './EducationItem';

const EducationList = ({ education, onEdit, onEditHandler }) => {
//   const educationlist = education.map(educationItem => {
//     return <EducationItem item={educationItem} />;
//   });
  const educationList = [];
  for(let i = 0; i < education.length; i++) {
      educationList.push(<EducationItem item={education[i]} flag={onEdit[i]} id={i} onEditHandler={onEditHandler}/>)
  }
  return (
    <div>
      <div className='ui divided items'>
        <div className='container'>
          <div className='header'>
            <h2>Education</h2>
          </div>
        </div>
        {educationList}
      </div>
    </div>
  );
};

export default EducationList;
