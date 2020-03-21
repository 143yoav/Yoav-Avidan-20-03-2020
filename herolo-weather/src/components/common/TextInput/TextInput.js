import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import './TextInput.scss';

const TextInput = props => {
  const onChange = event => {
    props.onChange(event.target.value);
  };

  return (
    <TextField
      label={props.label}
      variant="outlined"
      onChange={onChange}
      InputProps={{ classes: { notchedOutline: 'TextInput__Input' } }}
      fullWidth
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
