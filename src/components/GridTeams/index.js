import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api_espn } from '../../services/api';
import { Container, WeekBox } from './styles';

function GridTeams() {

  const [teams, setTeams] = useState([]);
  const [week, setWeek] = useState(0);

  useEffect(() => {
    api_espn.get('v2/sports/football/nfl/standings').then(response => {
      let afcTeams = response.data.children[0].standings.entries;
      let nfcTeams = response.data.children[1].standings.entries;
      let allTeams = afcTeams.concat(nfcTeams);
      setTeams(allTeams)
    })
    api_espn.get('site/v2/sports/football/nfl/scoreboard').then(response => {
      setWeek(response.data.week.number)
    })
  }, [])

  return (
    <>
      <WeekBox>
        <Link to='/schedule' className='week-text'>
          <h1>{'Week ' + week}</h1>
          <h1>Schedule</h1>
        </Link>
      </WeekBox>

      <Container>
        {teams.map(({ team }) => <>
          <Link to={'/team/'+ team.abbreviation} className='icon-box' key={team.id} >
            <img src={team.logos[0].href} alt='team logo' />
            <h2>{team.abbreviation}</h2>
          </Link>
        </>)}
      </Container>
    </>
  );
}

export default GridTeams;