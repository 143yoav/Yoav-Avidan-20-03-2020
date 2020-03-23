import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import { getCurrentLocation, loadFavorites } from '../../actions/weather';
import { toast } from 'react-toastify';
import './AppRouter.scss';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

const AppRouter = props => {
  useEffect(() => {
    props.getCurrentLocation();
    props.loadFavorites();
    toast.configure({ position: toast.POSITION.BOTTOM_RIGHT });
  }, []);

  return (
    <Router history={history}>
      <div className={classNames('AppRouter__Wrapper', `theme-${props.theme}`)}>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/favorites" component={FavoritesPage} exact />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: () => dispatch(getCurrentLocation()),
  loadFavorites: () => dispatch(loadFavorites())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
