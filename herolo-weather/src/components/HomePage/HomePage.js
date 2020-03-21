import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput/TextInput';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import DaysData from '../../mocks/days.json';
import CurrentData from '../../mocks/current.json';
import {
  formatDaysData,
  formatCurrentData
} from '../../formatters/weatherFormmater';
import { getCurrentLocation } from '../../actions/weather';
import './HomePage.scss';

class HomePage extends Component {
  state = {
    search: ''
  };

  componentWillMount() {
    //this.props.getCurrentLocation();
  }

  onTextChanged = search => {
    this.setState({ search });
  };

  render() {
    return (
      <div className="HomePage__Wrapper">
        <TextInput label="city" onChange={this.onTextChanged} />
        <WeatherContainer
          days={formatDaysData(DaysData)}
          current={formatCurrentData(CurrentData[0])}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather
});

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: () => dispatch(getCurrentLocation())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
