import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import "../../CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_email_id: '',
      company_password: '',
      company_name: '',
      company_location: '',
      redirect: '',
      error: undefined
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3002/company/register',
        {
          company_email_id: this.state.company_email_id,
          company_password: this.state.company_password,
          company_name: this.state.company_name,
          company_location: this.state.company_location    
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/company/login'/> });
        } else {
          console.log(res);
          this.setState({ error: "Invalid Credentials" });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <nav style={{background:'#1569e0',height:'50px' }}>
          <h1 style={{color:'white'}}>Handshake
          </h1>
          </nav>
        {this.state.redirect}
        <div
          class="display_inline"
          style={{ height: "-webkit-fill-available" }}
        >
          <div class="col-md-6" style={{marginTop:'5%',paddingLeft:'10%'}}>
            <h1>
            Join the Handshake
            </h1>
            <h1>
            community
            </h1>
          </div>
          <div class="col-md-6" style={{marginTop:'5%'}}>
            <form className="ui form" onSubmit={this.onSubmitHandler}>
            <div class="col-md-6" style={{marginTop:'5%',paddingLeft:'30%'}}>
            <h1>
                               Employer
            </h1>
            </div>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="company_name"
                  value={this.state.company_name}
                  placeholder="Company Name"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="company_email_id"
                  value={this.state.company_email_id}
                  placeholder="Email"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="company_password"
                  value={this.state.company_password}
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Location</label>
                <input
                  type="text"
                  name="company_location"
                  value={this.state.company_location}
                  placeholder="Location"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                {this.state.error && (
                  <div className="ui red message">{this.state.error}</div>
                )}
              </div>
              <button className="ui button coloring" type="submit" style={{background:'#1569e0'}}>
              Employer Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
