import React  from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import {LightProps} from './Types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function Light(props:LightProps){
    const classes = useStyles();

    const param = queryString.stringify({'lat':props.lat,'lng':props.long});

    return (
        <div className={classes.root}>
            <Box display="flex" p={1} bgcolor="grey.300" >
                <Box m={1} bgcolor="white">{props.name}</Box>
                <Box m={1} bgcolor="white">緯度{props.lat}</Box>
                <Box m={1} bgcolor="white">経度{props.long}</Box>
                <Box m={1} bgcolor="white">{props.status}</Box>
                <Box m={1} bgcolor="white">checked: {props.checked.toString()}</Box>
                <Button component={Link} to={"/lightDetail?"+param} variant="contained">Detail</Button>
                <Button variant="contained" color="primary" 
                    onClick={() =>{ 
                        if(props.handleClick){
                            props.handleClick(props.id);
                        }
                    }}>問題なし</Button>
            </Box>
        </div>
    );
}

export default Light;