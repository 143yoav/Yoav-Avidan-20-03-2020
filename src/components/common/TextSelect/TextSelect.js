import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './TextSelect.scss';

const TextSelect = props => {
  return (
    <Select
      placeholder={props.placeholder}
      isClearable
      isSearchable
      getOptionLabel={option => option.text}
      className="TextSelect__Input"
      classNamePrefix="TextSelect"
      name="text"
      options={props.options}
      onInputChange={val => props.onChange(val)}
      onChange={val => props.onSelect(val)}
    />
  );
};

TextSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  onSelect: PropTypes.func
};

export default TextSelect;
