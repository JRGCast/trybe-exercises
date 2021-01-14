import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <h2>Look at this cat!</h2>
        <img src={this.props.source} alt={this.props.alternativeText} />
        <h3>Cute right?</h3>
      </div>
    );
  }
}

export default Image;
