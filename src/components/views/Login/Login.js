import styles from './Login.module.scss';
import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const Login = () => (
  <div className = {styles.component}>
    <Paper>
      <Typography className={styles.title} variant="h4" component="h4" gutterBottom>
        Sign in
      </Typography>
      <form className={styles.wrapper}>
        <TextField className={styles.input}
          id="filled-password-input"
          label="Login"
          type="text"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField className={styles.input}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button className={styles.button} variant="contained" color="primary" href={process.env.PUBLIC_URL}>
          Log in
        </Button>
      </form>
    </Paper>
  </div>
);

export default Login;

