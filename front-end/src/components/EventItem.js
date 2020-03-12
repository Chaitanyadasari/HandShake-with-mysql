import React from 'react';
import {Link} from 'react-router-dom';
import alt from '../images/alt.png';

const EventItem = props => {
  return (
      // <div class='item'>
      //   <div class='ui tiny image' >
      //     <img src={alt} />
      //   </div>
      //   <Link to={{pathname: '/student/event', state: {event : props.event}}}>
      //   <button class='ui right floated basic primary button' >View Event</button>
      //   </Link>
      //   <div class='middle aligned content'>
      //     <div class='header'>Content B</div>
      //     <div class='description'>
      //       <p></p>
      //     </div>
      //     <div class='extra'></div>
      //   </div>
      // </div>

          // <div className='item'>
          //   <div className='ui tiny image'>
          //     <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          //   </div>
          //   <div className='content'>
          //     <div className='header'>{props.event.event_name}
          //     </div>
          //     <button class="ui icon right floated button">
          //       <i class="edit icon"></i>
          //   </button>
          //     {/* <Link to={{pathname: '/student/event', state: {event : props.event}}}>
          //     <button class='ui right floated basic primary button' >View Event</button>
          //     </Link> */}
          //         <div className='meta'>
          //           <div>
          //             <span className='major'>{props.event.event_description}</span>
          //           </div>
          //           <div>
          //             <span className='gpa'>Cumulative GPA: {props.event.event_timing}</span>
          //           </div>
          //         </div>
          //         <div className='description'></div>
          //       </div>
          //     </div>
          <div className='item container'>
          {/* {this.state.redirect} */}
          <div
            className='ui tiny image'
            style={{ float: 'left', marginRight: '3%' }}>
            <img src={alt}/>
          </div>
          <div className='content'>
              <Link to={{pathname: '/student/event', state: {event : props.event}}}>
            <button class='ui right floated basic primary button' >View Event</button>
            </Link>
            <a className='header'><h4>{props.event.event_name}</h4></a>
            <div className='meta'>
              {/* <i className="university icon"></i> */}
              <span className='cinema'>{props.event.event_description}</span>
            </div>
            <div className='meta'>
            {/* <i class="graduation cap icon"></i> */}
              <span className='cinema'>{props.event.event_timing}</span>
            </div>
            <div className='description'>
            </div>
            <div className='extra'>
              
            </div>
          </div>
        </div>

  );
};

export default EventItem;
