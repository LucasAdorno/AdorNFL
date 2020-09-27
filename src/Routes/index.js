import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Schedule from '../pages/Schedule';
import TeamPage from '../pages/TeamPage';


// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/team/:id' component={TeamPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;