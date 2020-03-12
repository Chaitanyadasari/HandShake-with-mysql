import React, { Component } from "react";
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <footer class="page-footer font-small blue" style={{backgroundColor:'brown',color:'white',width:'100%',position:'absolute'}}>

        <div class="text-center" style={{paddingTop:'0.5%',paddingBottom:'0.5%'}}>© 2020 Copyright:
          <a href="https://saiChaitanyaDasari.xyz" style={{color:'white',textDecoration:'underline'}}> SaiChaitanyaDasari.com</a>
        </div>
       
      
      </footer> );
    }
}
 
export default Footer;