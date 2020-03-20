import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header/Header';
import './AppRouter.scss';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history} className="AppRouter__Wrapper">
      <Header />
      <Switch>
        <Route path="/" component={null} exact />
        <Route path="/favorites" component={null} exact />
      </Switch>
    </Router>
  );
};

export default AppRouter;
