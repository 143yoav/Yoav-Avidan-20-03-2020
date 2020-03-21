import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import { getCurrentLocation } from '../../actions/weather';
import './AppRouter.scss';

const history = createBrowserHistory();

const AppRouter = props => {
  useEffect(() => {
    props.getCurrentLocation();
  });

  return (
    <Router history={history}>
      <div className={classNames('AppRouter__Wrapper', 'theme-dark')}>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/favorites" component={null} exact />
        </Switch>
      </div>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: () => dispatch(getCurrentLocation())
});

export default connect(null, mapDispatchToProps)(AppRouter);
