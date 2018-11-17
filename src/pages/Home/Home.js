import React, { Component } from 'react';
import AppBar from '../../components/AppBar'
import './Home.css'
import HomeExpansionPanel from '../../components/HomeExpansionPanel'
import Banner from '../../components/Banner'
import Typography from '@material-ui/core/Typography';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <AppBar />
        <Banner />
        <Typography className="home-intro" variant="h1" color="inherit">
          I am a nerd, and I love to code!
        </Typography>
        <HomeExpansionPanel />
      </div>
    );
  }
}

export default Home;
