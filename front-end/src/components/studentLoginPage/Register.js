import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import "../../CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student_email_id: '',
      student_password: '',
      student_name: '',
      student_college_name: '',
       major:'',
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
      .post('http://localhost:3002/student/register',
        {
          student_email_id: this.state.student_email_id,
          student_password: this.state.student_password,
          student_name: this.state.student_name,
          student_college_name: this.state.student_college_name,
          major:this.state.major
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/student/login'/> });
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
              <div className="field">
                <label>College Name</label>
                <input
                  type="text"
                  name="student_college_name"
                  value={this.state.student_college_name}
                  placeholder="College Name"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="student_name"
                  value={this.state.student_name}
                  placeholder="Name"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="student_email_id"
                  value={this.state.student_email_id}
                  placeholder="Email"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="student_password"
                  value={this.state.student_password}
                  placeholder="Password"
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className="field">
                <label>Major</label>
                <input
                  type="text"
                  name="major"
                  value={this.state.major}
                  placeholder="Major"
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
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
