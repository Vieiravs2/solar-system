import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

export default class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missions" />
        <div className="missionsContainer" data-testid="missions">
          <div className="missionsDetails">
            { missions.map((mission, index) => (
              <MissionCard
                key={ index }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />))}
          </div>
        </div>
      </>
    );
  }
}
