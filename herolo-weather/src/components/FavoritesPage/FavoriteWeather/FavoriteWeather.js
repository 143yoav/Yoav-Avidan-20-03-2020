import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteWeatherData from '../FavoriteWeatherData/FavoriteWeatherData';
import { getCurrentWeather } from '../../../actions/weather';
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
      this.setState({ isFetching: false, data });
    });
  };

  render() {
    const { value, unit, icon, text } = this.state.data;
    return (
      <div className="FavoriteWeather__Wrapper">
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

FavoriteWeather.propTypes = {};

export default connect(mapStateToProps)(FavoriteWeather);
