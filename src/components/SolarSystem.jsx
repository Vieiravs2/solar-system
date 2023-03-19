import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './SolarSystem.css';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planets" />
        <section className="planetsContainer">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              className={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </section>
      </div>
    );
  }
}
