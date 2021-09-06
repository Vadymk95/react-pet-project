import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Characters from '../../pages/Characters';
import Favourites from '../../pages/Favourites';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/сharacters" component={Characters} />
      <Route path="/favourites" component={Favourites} />
      <Redirect to="/сharacters" />
    </Switch>
  );
};

export default AppRouter;
