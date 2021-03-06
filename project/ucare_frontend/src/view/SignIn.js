
import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { FormControlLabel, Checkbox  } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import userService from '../service/userService';
import Footer from '../include/Footer';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    height: '100vh',
  },
  image: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflowY: 'scroll',
    "&::-webkit-scrollbar": {
      display: "none"
    },
    "&::before":{
      content: '""',
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${require("../assets/image/his#1.jpg")})`,
      backgroundSize: 'cover',
      opacity: 0.7,
      zIndex: -1,
      position: 'fixed',
    }
  },
  paper: {
    margin: theme.spacing(20, 10, 8, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide({ history }) {
  const classes = useStyles();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const idChange = (e) => {
    setId(e.target.value)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  useEffect( () => {
    !!localStorage.getItem('id') ? (setId(localStorage.getItem('id')), setCheck(true) ): null;
  }, [])

  const login = (e) => {
    e.preventDefault();

    let user = {
      id: id,
      password: password
    }

    userService.login(user)
    .then( res => {
      if(res.data.data) {
        console.log(user.id + '?????? ??????????????? ????????????????????????.');
        window.sessionStorage.setItem('user', id);
        history.push('/home');
      } else {
        console.log('????????? ????????? ????????????.');
      }
    })
    .catch( err => {
      console.log('login() ??????', err);
    });
  }

  const remember = (e) => {
      e.target.checked ? (localStorage.setItem('id', id), localStorage.setItem('checked', true), setCheck(true) ): 
                          (localStorage.removeItem('id'), localStorage.removeItem('checked', false), setCheck(false));
  }

  return (
    <Fragment>
    <CssBaseline />
    <Grid container component="main" className={classes.image}>
      <Grid item xs={12} sm={6} md={4} />
      <Grid item xs={12} sm={8} md={4} elevation={6} >
        <div className={classes.paper}>
            <Typography component="h1" variant="h3">
                U-Care
            </Typography>
            <LocalHospitalIcon color="secondary" style={{ fontSize: 80 }}/>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              style={{backgroundColor: '#F2F2F2'}}
              required
              fullWidth
              id="id"
              label="id"
              name="id"
              autoComplete="id"
              autoFocus
              value={ id }
              onChange={ idChange }
            />
            <TextField
              variant="outlined"
              margin="normal"
              style={{backgroundColor: '#F2F2F2'}}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={ password }
              onChange={ passwordChange }
            />
            <FormControlLabel
              control={<Checkbox value="remember" checked={check} color="primary" onChange={ remember }/>}
              label="ID ??????"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={ login }
            >
              ????????? ??????
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/patient" variant="body2">
                  ???????????? ??????
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2" style={{ fontSize: 15 }}>
                  {"????????????"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} />
    </Grid>
    <Footer />
    </Fragment>
  );
}