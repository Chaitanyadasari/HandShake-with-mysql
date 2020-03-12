import React, { Component } from 'react';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <nav class="navbar navbar-expand-lg" style={{ background: "#1569e0" }}>
          <a class="navbar-brand" style={{ color: "white" }} href="/">
            HandShake
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="/student/login"
                  style={{ color: "white" }}
                >
                  Student
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/company/login"
                  style={{ color: "white" }}
                >
                  
                  Employeer
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.sjsu.edu/careercenter/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Career Center
                </a>
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}
 
export default Navbar;