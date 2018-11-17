import React, { Component } from 'react';

import Gallery from '../../components/Gallery'
import Projects from './projects'
import AppBar from '../../components/AppBar'

class Portfolio extends Component {

  state = {
    projects: [],
  }

  componentDidMount() {
    this.setState({ projects: Projects.data })
  }

  render() {

    console.log(this.state.projects)

    return (
      <div className="Portfolio">
        <AppBar />
        <Gallery projects={Projects.data}/>
        <span>TEST</span>
      </div>
    );
  }
}

export default Portfolio;
