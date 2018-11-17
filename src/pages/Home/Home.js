import React, { Component } from 'react';
import AppBar from '../../components/AppBar'
import HomeExpansionPanel from '../../components/HomeExpansionPanel'
import Banner from '../../components/Banner'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AppBar />
        <Banner />
        <HomeExpansionPanel />
      </div>
    );
  }
}

export default Home;
