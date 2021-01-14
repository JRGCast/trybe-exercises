import React from 'react';
class Greeting extends React.Component {
  render() {
    const {name, lastName} = this.props;
    return (
      <h1 className='App-title'>
        Hello, {name} {lastName}!
      </h1>
    );
  }
}

export default Greeting;
