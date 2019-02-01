/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Router from 'next/router';
import { TextField } from '@material-ui/core';
import Layout from '../components/layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  },
  form: {
    margin: '10px auto',
    maxWidth: 400,
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  loginButton: {
    margin: 20
  }
});

function useBreite() {
  const [breite, setBreite] = useState(0);

  useEffect(() => {
    setBreite(window.innerWidth);
    window.onresize = ev => setBreite(window.innerWidth);
  });

  return breite;
}

function Index({ classes }) {
  const [kennung, setKennung] = useState('');
  const [passwort, setPasswort] = useState('');
  const breite = useBreite();

  function login(kennung, passwort) {
    console.log(kennung, passwort);
    // Check
    Router.push('/start');
  }

  return (
    <Layout className={classes.root} title="Login">
      <div className={classes.form}>
        <TextField
          label="Kennung"
          value={kennung}
          onChange={e => setKennung(e.target.value)}
        />
        <TextField
          type="password"
          label="Passwort"
          value={passwort}
          onChange={e => setPasswort(e.target.value)}
        />
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          onClick={() => login(kennung, passwort)}
        >
          Anmelden
        </Button>
        <Typography>{breite}</Typography>
      </div>
    </Layout>
  );
}

export default withStyles(styles)(Index);
