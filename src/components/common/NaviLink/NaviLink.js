import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NaviLink.scss';

const NaviLink = props => (
  <NavLink to={props.to} className="NaviLink" data-selected={props.isSelected}>
    {props.value}
  </NavLink>
);

NaviLink.propTypes = {
  to: PropTypes.string,
  isSelected: PropTypes.bool,

  value: PropTypes.string
};

export default NaviLink;
