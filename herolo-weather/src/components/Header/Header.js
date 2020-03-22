import React, { useState } from 'react';
import { connect } from 'react-redux';
import NaviLink from '../common/NaviLink/NaviLink';
import Toggle from '../common/Toggle/Toggle';
import { updateUnit } from '../../actions/weather';
import { updateTheme } from '../../actions/theme';
import './Header.scss';

const Header = props => {
  const [selected, setSelected] = useState('/');

  const onClick = name => event => {
    setSelected(name);
  };

  return (
    <div className="Header__Wrapper">
      <span className="Header__Title">Herolo Weather Task</span>
      <div className="Header__Unit">
        <Toggle
          checkedLabel="°C"
          uncheckedLabel="°F"
          isChecked={props.isMetric}
          onChange={checked => {
            props.updateUnit(checked);
          }}
        />
      </div>
      <div className="Header__Theme">
        <Toggle
          checkedLabel="Light"
          uncheckedLabel="Dark"
          isChecked={props.isLight}
          onChange={checked => {
            props.updateTheme(checked);
          }}
        />
      </div>
      <div className="Header__Navigation">
        <NaviLink
          to={'/'}
          value="Home"
          isSelected={window.location.pathname == '/'}
          onClick={onClick}
        />
        <NaviLink
          to={'/favorites'}
          value="Favorites"
          isSelected={window.location.pathname == '/favorites'}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isMetric: state.weather.isMetric,
  isLight: state.theme == 'light'
});

const mapDispatchToProps = dispatch => ({
  updateUnit: isMetric => dispatch(updateUnit(isMetric)),
  updateTheme: theme => dispatch(updateTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
