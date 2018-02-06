import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import LandingPage from '../components/LandingPage';
import LoginPage from './LoginPage';
import Header from './Header';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return(
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(null,actions)(App);