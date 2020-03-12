import React from 'react';

const SkillCard = props => {
    const list = props.skills.map((skill) => {
        return (
            <div role='listitem' className='item'>
          <div className='content'>
            <a className='ui label'>
              {skill}
              <i aria-hidden='true' className='delete icon'></i>
            </a>
          </div>
        </div>
        )
    })
  return (
    <div className='ui card'>
      <div role='list' className='ui mini divided horizontal list'>
        {list}
      </div>
      <br />
    </div>
  );
};

export default SkillCard;
