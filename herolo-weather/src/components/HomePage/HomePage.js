import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextSelect from '../common/TextSelect/TextSelect';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import {
  getCurrentLocation,
  getCurrentWeather,
  getDailyWeather,
  getAutocompleteSearch,
  setCurrentCity
} from '../../actions/weather';
import './HomePage.scss';

class HomePage extends Component {
  state = {
    searchResults: [],
    days: [],
    current: []
  };

  componentWillMount() {
    //this.props.getCurrentLocation();
  }

  componentDidMount() {
    this.fetchData(this.props.cityKey);
  }

  fetchData = key => {
    Promise.all([
      getCurrentWeather(key),
      getDailyWeather(key, this.props.isMetric)
    ]).then(result => {
      this.setState({
        current: result[0],
        days: result[1]
      });
    });
  };

  onTextChanged = search => {
    if (search) {
      getAutocompleteSearch(search).then(searchResults =>
        this.setState({ searchResults })
      );
    } else {
      this.setState({ searchResults: [] });
    }
  };

  onCitySelect = city => {
    this.props.setCurrentCity(city.city, city.key);
    this.fetchData(city.key);
  };

  render() {
    return (
      <div className="HomePage__Wrapper">
        <TextSelect
          placeholder="city"
          options={this.state.searchResults}
          onChange={this.onTextChanged}
          onSelect={this.onCitySelect}
        />
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
  setCurrentCity: (name, key) => dispatch(setCurrentCity(name, key)),
  getCurrentLocation: () => dispatch(getCurrentLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
