import React from 'react';
import EducationList from './EducationList';

const MainList = (props) => {
    return (
        <div>
            <div className='ui segment conpact' style={{paddingLeft: '20px', paddingTop: '20px', paddingRight: '20px'}}>
                <EducationList education={props.education} onEdit={props.onEdit} onEditHandler={props.onEditHandler} /> 
            </div>
        </div>
        
    );
}

export default MainList;