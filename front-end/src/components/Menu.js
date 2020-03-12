import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import usericon from "../images/user.png";
import "../CSS/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Menu = () => {
    function logOut(e){
        //e.preventDefault();
        localStorage.removeItem("password");
        localStorage.removeItem("username");
        //this.props.history.push(`/`);   
      };
  return (
       
    <div
      className="ui inverted menu"
      
      style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop:'0px',background:'#1569e0'}}
    >
      {/* <div className="ui pointing secondary menu" style={{paddingTop: '10px', paddingBottom: '10px'}}> */}
      <div className="item">
        <h1>HandShake</h1>
      </div>
      <div className="item">
        <div
          className="ui icon input"
          style={{ marginLeft: "10px", width: "350px" }}
        >
          <input type="text" placeholder="Search" />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
      <div className="right menu">
        <Link to="/jobs" className="item">
          Jobs
        </Link>
        <Link to="/event" className="item">
          Events
        </Link>
        <Link to="" className="item">
          FAQ
        </Link>
        <Link to="/students" className="item">
          Students
        </Link>
        <Link to="" className="item">
          Messages
        </Link>
        <a
          href="https://www.sjsu.edu/careercenter/"
          target="_blank"
          className="item"
        >
          Career Center
        </a>

        <a className="item">
          <div class="btn-group dropleft">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img class="ui avatar image" src={usericon}></img>
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="/profile">
                Profile
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                onClick={logOut(this)}
                
              >
                Logout
              </a>
            </div>
          </div>
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Menu;
