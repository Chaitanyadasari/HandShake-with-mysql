import React from 'react';
import Event from './Event';
import Students from './Students'
import Jobs from './Jobs';
import Login from './studentLoginPage/Login';
import Register from './studentLoginPage/Register';
import LoginC from './companyLoginPage/Login';
import RegisterC  from './companyLoginPage/Register';
import EventPost from './eventEmployer/EventPost';
import ViewEventEmployer from './eventEmployer/ViewEventEmployer';
import ViewStudentProfile from './viewStudentProfile/ViewStudentProfile';
import SingleEvent from './eventEmployer/SingleEvent';
import EventPageStudent from './EventPageStudent';
import JobPost from './jobEmployer/JobPost';
import ViewJobs from './jobEmployer/ViewJobs';
import JobApplicants from './jobEmployer/JobApplicants';
import Application from './Application';
import StudentProfile from './editStudentProfile/StudentProfile';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      </div>
      
      
      <div>
        
        <Route path='/student/login' component={Login} />
        <Route path='/student/register' component={Register} />
        <Route path='/company/login' component={LoginC} />
        <Route path='/company/register' component={RegisterC} />
        <Route path='/student/event' component={EventPageStudent} />
        <Route path='/company/event' component={EventPost} />
        <Route path='/company/job/post' component={JobPost} />
        <Route path='/company/job/view' component={ViewJobs} />
        <Route path='/company/job/applicants' component={JobApplicants} />
        <Route path='/applications' component={Application} />
        <Route path='/company/myevent' component={SingleEvent} />
        <Route path='/company/post' component={ViewEventEmployer} />  
        <Route path='/student/profile' component={ViewStudentProfile} />
        <Route path='/event' component={Event} />
        <Route path='/students' component={Students} />
        <Route path='/profile' component={StudentProfile} />
        <Route path='/jobs' component={Jobs} />
      </div>
    </Router>
  )
}

export default App;
