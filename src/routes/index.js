import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Info from '../pages/Info';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Info} />
    </Switch>
  );
}

export default Routes;
