import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './components/Alert'

class App extends Component {
  render() {
    return (
      <div>
        <Alert>
          <strong>Default Info!</strong> You successfully read this important alert message.
        </Alert>

        <Alert alertType="danger">
          <strong>Danger Alert!</strong> You successfully read this important alert message.
        </Alert>

        <Alert alertType="warning">
          <strong>Warning!</strong> You successfully read this important alert message.
        </Alert>
      </div>
    );
  }
}

export default App;
