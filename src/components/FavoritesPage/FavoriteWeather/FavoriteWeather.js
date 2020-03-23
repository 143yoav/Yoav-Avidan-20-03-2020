import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import FavoriteWeatherData from '../FavoriteWeatherData/FavoriteWeatherData';
import { getCurrentWeather, setCurrentCity } from '../../../actions/weather';
import './FavoriteWeather.scss';

class FavoriteWeather extends Component {
  state = {
    isFetching: false,
    data: {}
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isMetric != this.props.isMetric) {
      this.fetchData();
    }
  }

  fetchData = () => {
    this.setState({ isFetching: true });
    getCurrentWeather(this.props.cityKey, this.props.isMetric).then(data => {
      if (data) {
        this.setState({ isFetching: false, data });
      }
    });
  };

  onClick = event => {
    const { cityKey, city } = this.props;
    this.props.setCurrentCity(city, cityKey);
    this.props.history.push('/');
  };

  render() {
    const { value, unit, icon, text } = this.state.data;

    return (
      <div className="FavoriteWeather__Wrapper" onClick={this.onClick}>
        <FavoriteWeatherData
          isFetching={this.state.isFetching}
          cityName={this.props.city}
          value={value}
          unit={unit}
          icon={icon}
          text={text}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMetric: state.weather.isMetric
});

const mapDispatchToProps = dispatch => ({
  setCurrentCity: (name, key) => dispatch(setCurrentCity(name, key))
});

FavoriteWeather.propTypes = {
  cityKey: PropTypes.string,
  city: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavoriteWeather));
