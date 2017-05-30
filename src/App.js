import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './components/Alert'
import { Button } from './components/Button'


class App extends Component {
  render() {
    return (
      <div>
        <h2>Alert Messages</h2><br/>
        <Alert>
          <strong>Default Info!</strong> You successfully read this important alert message.
        </Alert>

        <Alert alertType="danger">
          <strong>Danger Alert!</strong> You successfully read this important alert message.
        </Alert>

        <Alert alertType="success">
          <strong>Sucess Alert!</strong> You successfully read this important alert message.
        </Alert>

        <Alert alertType="warning">
          <strong>Warning!</strong> You successfully read this important alert message.
        </Alert>

        <br/>

        <h2>Buttons</h2><br/>

        <Button>
          <strong>info</strong>
        </Button>

        <Button buttonType="primary">
          <strong>One</strong>
        </Button>

        <Button buttonType="secondary">
          <strong>Secondary</strong>
        </Button>

        <Button buttonType="success">
          <strong>Success</strong>
        </Button>

        <Button buttonType="warning">
          <strong>Warning</strong>
        </Button>

        <Button buttonType="danger">
          <strong>Danger</strong>
        </Button>

        <Button buttonType="link">
          <strong>Link</strong>
        </Button>


      </div>


    );
  }
}

export default App;
