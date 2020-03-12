import React from 'react';
import axios from 'axios';
import Header from './Header';

const EventPageStudent = (props) => {
    console.log(props);

    const onClickHandler = () => {
        const id = 16
        axios
      .post(`http://localhost:3000/api/event/registered/${id}`, {
        event_id: props.location.state.event.event_id,
        company_id: props.location.state.event.company_id
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
            console.log(res.data.result);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='ui container segment' style={{height:'200px'}} >
            
            <button className='ui basic primary button' style={{float: 'right'}} onClick={onClickHandler}>Register</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default EventPageStudent;