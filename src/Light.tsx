import React, { useState } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';

interface LightProps {
    id:number;
    lat:number;//latitude
    long:number;//longitude
    status?:string;
    checked:boolean;
    handleClick?:any;
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function Light(props:LightProps){
    const classes = useStyles();

    //const [checked,setChecked] = useState(false);

    return (
        <div className={classes.root}>
            <Box display="flex" p={1} bgcolor="grey.300" >
                <Box m={1} bgcolor="white">緯度{props.lat}</Box>
                <Box m={1} bgcolor="white">経度{props.long}</Box>
                <Box m={1} bgcolor="white">{props.status}</Box>
                <Box m={1} bgcolor="white">checked: {props.checked.toString()}</Box>

                <Button variant="contained" color="primary" 
                    onClick={() =>{ 
                        //setChecked(!checked);
                        //console.log("aa");
                        props.handleClick(props.id);
                    }}>問題なし</Button>
            </Box>
        </div>
    );
}

export default Light;