import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './pages/Contact'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path='/' component={Home} exact />
            <Route path='/contact' component={Contact} />
            <Route path='/portfolio' component={Portfolio} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
