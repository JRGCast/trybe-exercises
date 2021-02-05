// App.js
import React from 'react';
import './App.css';

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const {joke} = this.state;
    return (
      <div className="App">
        <h1>{joke}</h1>
      </div>
    );
  }
}

export default Api;