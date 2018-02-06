import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  renderContent() {
    if(this.props.auth) {
      return <li><a href="/api/logout" className="btn waves-effect waves-light btn-header">Logout</a></li>;
    } else {
      return <li><Link className="btn waves-effect waves-light btn-header" to="/login">Login</Link></li>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{backgroundColor:"grey"}}>
          <div className="container">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);