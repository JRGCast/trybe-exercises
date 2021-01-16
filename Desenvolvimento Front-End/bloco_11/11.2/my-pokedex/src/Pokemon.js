import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Pokemons extends Component {
  render() {
    const { id, name, type, averageWeight, image, moreInfo } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <div>
          <p> {id} </p>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        {/* <p>More info in:{moreInfo}</p> */}
      </div>
    )
  }
}

Pokemons.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemons