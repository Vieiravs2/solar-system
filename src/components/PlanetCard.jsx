import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

export default class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planets" data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
