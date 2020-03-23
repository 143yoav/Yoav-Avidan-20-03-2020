import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NaviLink.scss';

const NaviLink = props => (
  <NavLink
    to={props.to}
    className="NaviLink"
    data-selected={props.isSelected}
    onClick={props.onClick(props.to)}
  >
    {props.value}
  </NavLink>
);

NaviLink.propTypes = {
  to: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default NaviLink;
