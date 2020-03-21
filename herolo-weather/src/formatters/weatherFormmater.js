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
      max: day.Temperature.Maximum.Value
    });
  });

  return formatted;
};

export const formatCurrentData = (data, metric = true) => {
  if (!data) {
    return {};
  }

  const unit = metric ? 'Metric' : 'Imperial';

  return {
    text: data.WeatherText,
    unit: data.Temperature[unit].Unit,
    value: data.Temperature[unit].Value,
    icon: data.WeatherIcon < 10 ? '0' + data.WeatherIcon : data.WeatherIcon
  };
};
