import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import Header from '../Header/Header';
import './AppRouter.scss';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div className={classNames('AppRouter__Wrapper', 'theme-light')}>
        <Header />
        <Switch>
          <Route path="/" component={null} exact />
          <Route path="/favorites" component={null} exact />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
