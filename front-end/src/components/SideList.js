import React from 'react';
import BioCard from './BioCard';
import SkillCard from './SkillCard';

const SideList = (props) => {
    return (
        <div>
            <BioCard bio={props.bio} />
            <SkillCard skills={props.skills} />
        </div>
    );
}

export default SideList;