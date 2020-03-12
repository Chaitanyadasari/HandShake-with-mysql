import React from 'react'; 
import Header from '../Header'
import ViewBio from './ViewBio';
import axios from 'axios';
import ViewEducationItem from './ViewEducationItem';
import ViewExperienceItem from './ViewExperienceItem';

class ViewStudentProfile extends React.Component {
    constructor() {
        super();
        this.state = {basicDetail: [], educationDetails: [], experienceDetails: []};
    }
    componentDidMount() {
        //const id = this.props.location.state.id;
        const id = 17;
        axios.get(`http://localhost:3000/api/student/${id}`).then((res) => {  
            if(res.status === 200) {
                console.log(res.data);
                this.setState({basicDetail: res.data.result})
            }
        })

        axios.get(`http://localhost:3000/api/student/education/${id}`).then((res) => {  
            if(res.status === 200) {
                console.log(res.data);
                this.setState({educationDetails: res.data.result})
            }
        })

        axios.get(`http://localhost:3000/api/student/experience/${id}`).then((res) => {  
            if(res.status === 200) {
                console.log(res.data);
                this.setState({experienceDetails: res.data.result})
            }
        })


    }
    render() {
        return (
            <div>
                <div>
                <Header />
                </div>
                <div style={{float: 'left', width: '30%', marginTop:'20px', marginLeft: '20px'}}>
                    <ViewBio bio={this.state.basicDetail} />
                </div>
                <div style={{float: 'left', width: '60%', marginLeft: '20px', marginTop: '20px'}}>
                    <div className="ui segment">
                        Career Objective
                        <div>
                            {this.state.basicDetail.length !==0 && this.state.basicDetail[0].career_objective}
                        </div>
                    </div>
                    <div className="ui segment">
                        Education
                        {this.state.educationDetails.map((education) => {
                            return <ViewEducationItem key={education} education={education} />
                        })}
                    </div>
                    <div className="ui segment">
                        Work Experience
                        {this.state.experienceDetails.map((experience) => {
                            return <ViewExperienceItem key={experience} experience={experience} />
                        })}
                    </div>
                </div>
                
            </div>
        );
    }
    
}

export default ViewStudentProfile;