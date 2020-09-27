import React, { useState, useEffect } from 'react';
import Return from '../../components/Return';

import { api_espn, api_sports } from '../../services/api';

import { Container } from './styles';

function TeamPage({ match }) {

  const [current, setCurrent] = useState({});
  const [currentdb, setCurrentdb] = useState({});

  useEffect(() => {
    api_espn.get('v2/sports/football/nfl/standings').then(response => {
      let afcTeams = response.data.children[0].standings.entries;
      let nfcTeams = response.data.children[1].standings.entries;
      let allTeams = afcTeams.concat(nfcTeams);
      let current_team = {}
      allTeams.map(({ team, stats }) => team.abbreviation === match.params.id ? current_team = { team, stats } : {})
      setCurrent(current_team)
    })

    api_sports.get().then(response =>
      response.data.teams.map(team => {
        let abbreviation = team.strTeamShort;

        if (abbreviation === 'OAK') abbreviation = 'LV';
        else if (abbreviation === 'LA') abbreviation = 'LAR';
        else if (abbreviation === 'WAS') abbreviation = 'WSH';

        if (abbreviation === match.params.id) setCurrentdb(team);
      }))
  }, [match.params.id])

  //seed 0 win% 3   DR 10   HR 15 AR 16
  return (
    <Container>
      {current.team && currentdb ?
        <>
          <div id='title-page'>
            <h1>{current.team.displayName.toUpperCase()}</h1>
            <h1>{'(' + current.stats[1].value + '-' + current.stats[2].value + '-' + current.stats[5].value + ')'}</h1>
          </div>

          <div id='main-page'>
            <div id='win-seed-line'>
              <h2>WIN: {current.stats[3].displayValue}%</h2>
              <h2>SEED: {current.stats[0].displayValue}</h2>
            </div>

            <div id='records-jersey-line'>
              <div id='records'>
                <h2>D.R: {current.stats[10].displayValue}</h2>
                <h2>H.R: {current.stats[15].displayValue}</h2>
                <h2>A.W: {current.stats[16].displayValue}</h2>
              </div>
              <img src={currentdb.strTeamJersey} alt='team jersey' />
            </div>

            <div id='stadium'>
              <h2>{currentdb.strStadium}</h2>
              <img src={currentdb.strStadiumThumb} alt='team stadium' />
              <h2 className='stadium-details'>{currentdb.strStadiumLocation}</h2>
              <h2 className='stadium-details'>Capacity: {Number(currentdb.intStadiumCapacity).toLocaleString()}</h2>
            </div>
          </div>
        </>

        : <></>
      }


      <Return />
    </Container>
  );
}

export default TeamPage;