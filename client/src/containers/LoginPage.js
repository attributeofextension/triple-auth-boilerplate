import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaFacebook from 'react-icons/lib/fa/facebook';

class LoginPage extends Component {
  render() {  
    return (
      <div>
        <div className="card" style={{width:400,textAligh:"center",margin:"auto",marginTop:20}}>
          <div className="card-content center-align">
            <h4>Sign In</h4>
            <p>Use existing social network account to sign in</p>
            <a className="waves-effect waves-light btn btn-login btn-twitter" href="/auth/twitter"><FaTwitter /> Sign in with Twitter</a>
            <a className="waves-effect waves-light btn btn-login btn-google" href="/auth/google"><FaGooglePlus /> Sign in with Google</a>
            <a className="waves-effect waves-light btn btn-login btn-facebook" href="/auth/facebook"><FaFacebook /> Sign in with Facebook</a>
          </div>
        </div>
      </div>
    );  
  }
}
export default LoginPage;