import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/not-found/NotFound';
import Characters from './pages/Characters';
import Favourites from './pages/Favourites';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route path="/favourites" component={Favourites} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
