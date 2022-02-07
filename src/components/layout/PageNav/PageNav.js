import styles from './PageNav.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PageNav = props => (
  <nav className = {styles.component}>
    <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
  </nav>
);

PageNav.propTypes = {
  chldren: PropTypes.node,
};

export default PageNav;