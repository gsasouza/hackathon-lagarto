import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../../screens/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path={'/'}
        exact={false}
        render={(props) => <Dashboard {...props} /> }
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
