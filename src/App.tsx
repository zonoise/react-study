import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { AutorenewTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  gridContainer:{
    backgroundColor: '#555',

  },
  gridItem:{
    backgroundColor: 'lightBlue',
  },
  paper: {
    backgroundColor: '#999',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  
  circleButton:{
    color:"white",
    fontSize:25,
    margin:"0 auto",
    width:'70px',
    height:'70px',
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:"100%",
    backgroundColor:"#3865eb",
    border:"1px solid white"
  }
}));


function App() {

  const classes = useStyles();

  return (
    <div className="App">

      <Container fixed style={{backgroundColor:"red"}}>
        <Typography>AABBCC</Typography>
        <Button>bb</Button>
      </Container>

      <Container maxWidth="sm" style={{backgroundColor:"cyan",justifyItems:"center"}}>
        <div className={classes.circleButton}>出発</div>
      </Container>

      <Container fixed style={{backgroundColor:"red"}}>
        <Grid className={classes.gridContainer} container justify="space-evenly" spacing={1}>
          <Grid className={classes.gridItem} item xs={12} md={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={3}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
      </Container>
      </div>
  );
}

export default App;
