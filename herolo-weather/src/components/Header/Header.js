import React, { useState } from 'react';
import { connect } from 'react-redux';
import NaviLink from '../common/NaviLink/NaviLink';
import Toggle from '../common/Toggle/Toggle';
import { updateUnit } from '../../actions/weather';
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
          isChecked={true}
          onChange={() => {}}
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
  isMetric: state.weather.isMetric
});

const mapDispatchToProps = dispatch => ({
  updateUnit: isMetric => dispatch(updateUnit(isMetric))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
