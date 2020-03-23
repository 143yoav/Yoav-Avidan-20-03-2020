import moment from 'moment';

export const formatDaysData = data => {
  if (!data) {
    return [];
  }

  var formatted = [];

  data.DailyForecasts.map(day => {
    formatted.push({
      day: moment(day.Date).format('ddd'),
      unit: day.Temperature.Minimum.Unit,
      min: day.Temperature.Minimum.Value,
      max: day.Temperature.Maximum.Value,
      icon: day.Day.Icon < 10 ? '0' + day.Day.Icon : day.Day.Icon
    });
  });

  return formatted;
};

export const formatCurrentData = (data, metric = true) => {
  if (!data[0]) {
    return {};
  }
  data = data[0];
  const unit = metric ? 'Metric' : 'Imperial';

  return {
    text: data.WeatherText,
    unit: data.Temperature[unit].Unit,
    value: data.Temperature[unit].Value,
    icon: data.WeatherIcon < 10 ? '0' + data.WeatherIcon : data.WeatherIcon
  };
};

export const formatAutocompleteData = data => {
  if (!data) {
    return [];
  }

  var formatted = [];

  data.map(result => {
    formatted.push({
      key: result.Key,
      city: result.LocalizedName,
      country: result.Country.LocalizedName,
      text: `${result.LocalizedName}, ${result.Country.LocalizedName}`
    });
  });

  return formatted;
};
