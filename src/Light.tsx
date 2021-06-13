import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { LightProps } from './Types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { useAppDispatch } from './app/hooks';
import { MapPosition, updatePostition } from './feature/googlemap/googleMapSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    detailButton: {
        marginLeft: '16px',
    },
    submitButton: {
        marginLeft: '16px',
    }
}));

function Light(props: LightProps) {
    const classes = useStyles();

    const param = queryString.stringify({ 'lat': props.lat, 'lng': props.long });

    const dispatch = useAppDispatch();

    const position: MapPosition = {
        lat: props.lat,
        lng: props.long,
    }
    
    return (
        <div className={classes.root}>
            <Box display="flex" border={0} boxShadow={1} m={1} p={0} bgcolor="grey.300" >
                <Box m={1} p={1} width={"200px"} bgcolor="white">{props.name}</Box>
                <Box m={1} p={1} width={"200px"} bgcolor="white" textAlign="center">緯度{props.lat}</Box>
                <Box m={1} p={1} width={"200px"} bgcolor="white">経度{props.long}</Box>
                <Box m={1} bgcolor="white">{props.status}</Box>

                {/* ここから右寄りに */}
                <Box m={1} ml={"auto"} p={1} textAlign="center" bgcolor="white">checked: {props.checked.toString()}</Box>

                <Box display="flex" alignItems="center" m={0} p={0} bgcolor="grey.400">
                    <Button className={classes.detailButton} component={Link} to={"/lightDetail?" + param} variant="outlined">Detail</Button>

                    <Button variant="outlined" onClick={()=>{ dispatch(updatePostition(position))}} >redux-version</Button>

                    <Button className={classes.submitButton} variant="contained" color="primary"
                        onClick={() => {
                            if (props.handleClick) {
                                props.handleClick(props.id);
                            }
                        }}>問題なし</Button>
                </Box>
            </Box>
        </div>
    );
}

export default Light;