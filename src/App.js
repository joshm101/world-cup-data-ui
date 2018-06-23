import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Routes from './routes'

class App extends Component {
  render() {
    const API_URL = process.env.REACT_APP_WCDUI_API_URL
    return (
      <div>
        <h3 style={{ color: '#bbb', marginBottom: 40 }}>
          <em>* UI is a work in progress *</em>
        </h3>
        {API_URL &&
          <div>
            <Routes />
          </div>
        }
        {!API_URL &&
          <h2>No API URL found. This application cannot run.</h2>
        }
      </div>
    );
  }
}

export default App;
