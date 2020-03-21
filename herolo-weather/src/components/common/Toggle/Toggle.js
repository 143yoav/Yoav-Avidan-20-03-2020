import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import './Toggle.scss';

const Toggle = props => {
  const onChange = event => {
    props.onChange(event.target.checked);
  };

  return (
    <div className="Toggle__Wrapper">
      <label>{props.uncheckedLabel}</label>
      <Switch
        checked={props.isChecked}
        onChange={onChange}
        classes={{ checked: 'Toggle-checked', track: 'Toggle-track' }}
      ></Switch>
      <label>{props.checkedLabel}</label>
    </div>
  );
};

Toggle.propTypes = {
  uncheckedLabel: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  checkedLabel: PropTypes.string
};

export default Toggle;
