import React, { Component } from 'react';
import TextInput from '../common/TextInput/TextInput';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import DaysData from '../../mocks/days.json';
import CurrentData from '../../mocks/current.json';
import {
  formatDaysData,
  formatCurrentData
} from '../../formatters/weatherFormmater';
import './HomePage.scss';

class HomePage extends Component {
  state = {
    search: ''
  };

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

export default HomePage;
