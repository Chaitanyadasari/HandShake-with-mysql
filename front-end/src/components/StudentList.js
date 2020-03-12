import React from 'react';
import StudentItem from './StudentItem';
import axios from 'axios';

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedStudent: '', students: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3002/api/student').then((res)=> {
            if(res.status === 200) {
                console.log(res.data.result);
                this.setState({students: res.data.result})
            }
        }).catch(err => {
            console.log(err);
        })

        axios.get('http://localhost:3002/api/student').then((res)=> {
            if(res.status === 200) {
                console.log(res.data.result);
                this.setState({students: res.data.result})
            }
        }).catch(err => {
            console.log(err);
        })
    }
        // props.studentList.map((student) => {
        //     return  (
        //         <div className='ui raised segment' style={{width: '900px', height: '110px'}} >
        //             <StudentItem student={student} />
        //         </div>
                
        //     )
        // })
    render() {
        return (
            <div>
            {this.state.students.map((student) => {
                return ( 
                    <div className='ui segment' style={{ height: '110px'}} >
                        <StudentItem key={student.student_id} student={student} />
                    </div>
                )
            })}
            </div>
        );
    }
    
}

export default StudentList;