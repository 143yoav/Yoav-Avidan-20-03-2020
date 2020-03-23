import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../config.json';

const IconImg = ({ index }) => {
  return (
    <img src={`${config.weatherIconsPre}${index}${config.weatherIconsSuf}`} />
  );
};

IconImg.propTypes = {
  index: PropTypes.string
};

export default IconImg;
