import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Navbar from '../navbar';
import "../../CSS/styles.css"
import { Link, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { company_email_id: '', company_password: '', redirect: '', error: undefined };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3002/company/login', {
        company_email_id: this.state.company_email_id,
        company_password: this.state.company_password
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
       
          this.setState({ redirect: <Redirect to='company/job/view'/> });
          
        } else {
            console.log(res);
          this.setState({ error : "Invalid Credentials" });
        }
        
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.redirect}
        <Navbar/>
        <div class="display_inline" style={{height: '-webkit-fill-available'}}>
        <div class="col-md-6 coloring" style={{background:'#1569e0' }}>
        <div style={{marginTop:'5%'}}>
          <h1>Get the job done</h1>
          <p><strong>Employers</strong></p>
          <p>Hire the next generation of talent.</p>
          <p><strong>Career Centers</strong></p>
          <p>Bring the best jobs to your students.</p>
        </div>
        </div>
        <div class="col-md-6"style={{  margin: 'auto'}}>
          <h1>Employer Sign In</h1>
          <form className='ui form' onSubmit={this.onSubmitHandler}>
            <div className='field'>
              <label>Email</label>
              <input
                type='text'
                name='company_email_id'
                value={this.state.company_email_id}
                placeholder='Email'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div className='field'>
              <label>Password</label>
              <input
                type='password'
                name='company_password'
                value={this.state.company_password}
                placeholder='Password'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div style={{marginBottom: '10px'}}>    
              {this.state.error && <div className='ui red message'>{this.state.error}</div>}
            </div>
            <button className='ui button' type='submit'>
              Sign In
            </button>
          </form>
          <Link to="/company/register" className="item">
         Not a user Register now
        </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;