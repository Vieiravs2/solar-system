import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.isRequired,
};
