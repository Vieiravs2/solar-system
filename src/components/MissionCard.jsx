import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

export default class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missionCard" data-testid="mission-card">
        <div className="nameandyear">
          <p data-testid="mission-name">{name}</p>
          <p data-testid="mission-year">{year}</p>
        </div>
        <div className="countryanddestination">
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
