import React, { useEffect, useState } from 'react';
import { api_espn } from '../../services/api'
import Return from '../../components/Return';
import { Container, ScheduleLine } from './styles';

function Schedule() {

  const [schedule, setSchedule] = useState({})

  useEffect(() => {
    api_espn.get('site/v2/sports/football/nfl/scoreboard')
      .then(response => setSchedule(response.data))
  }, [])

  return (
    <Container>
      <div className='week-title'>
        <h1>Week {schedule.week ? schedule.week.number : '0'}</h1>
        <h1>Schedule</h1>
      </div>

      <div id='schedule-div'>

        {schedule.events ? schedule.events.map(({ competitions, status }) =>
          <ScheduleLine>
            <div className='home-team'>
              <h2>{competitions[0].competitors[0].team.abbreviation}</h2>
              <img src={competitions[0].competitors[0].team.logo} />
              <h2>{competitions[0].competitors[0].score}</h2>
            </div>

            <div className='clock-div'>
              <h3>{status.period}Q</h3>
              <h3>{status.displayClock}</h3>
            </div>

            <div className='away-team'>
              <h2>{competitions[0].competitors[1].score}</h2>
              <img src={competitions[0].competitors[1].team.logo} />
              <h2>{competitions[0].competitors[1].team.abbreviation}</h2>
            </div>
          </ScheduleLine>
        ) : ''}

      </div>
      <Return />
    </Container>
  );
}

export default Schedule;