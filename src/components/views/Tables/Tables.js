import styles from './Tables.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';


const Tables = () => (
  <div className = {styles.component}>
    <h2> Tables View </h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}> Book table </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}> Edit booking </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}> Add event </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}> Edit event </Link>
  </div>
);

export default Tables;

