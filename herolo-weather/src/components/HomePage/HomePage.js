import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput/TextInput';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import DaysData from '../../mocks/days.json';
import CurrentData from '../../mocks/current.json';
import {
  getCurrentLocation,
  getCurrentWeather,
  getDailyWeather
} from '../../actions/weather';
import './HomePage.scss';

class HomePage extends Component {
  state = {
    search: '',
    days: [],
    current: []
  };

  componentWillMount() {
    //this.props.getCurrentLocation();
  }

  componentDidMount() {
    debugger;
    Promise.all([
      getCurrentWeather(this.props.cityKey),
      getDailyWeather(this.props.cityKey, this.props.isMetric)
    ]).then(result => {
      this.setState({
        current: result[0],
        days: result[1]
      });
    });
  }

  onTextChanged = search => {
    this.setState({ search });
  };

  render() {
    return (
      <div className="HomePage__Wrapper">
        <TextInput label="city" onChange={this.onTextChanged} />
        <WeatherContainer days={this.state.days} current={this.state.current} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cityKey: state.weather.cityKey,
  isMetric: state.weather.isMetric
});

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: () => dispatch(getCurrentLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
