import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Light from './Light';
import {LightProps} from './Types';
import { Container, makeStyles, Paper, Typography } from '@material-ui/core';
import gray from '@material-ui/core/colors/grey';
import {Map} from './LightDetail';
import { useAppSelector } from './app/hooks';

const AREA_KEY = "AREA";

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:gray[100]
    },
    container:{
        backgroundColor: gray[200]
    }
}));

function Area(){

    const classes = useStyles();

    const [lights, setLights] = useState<LightProps[]>([]);

    const position = useAppSelector((state) => state.googlMap )

    useEffect(() => {

        const areaData = localStorage.getItem(AREA_KEY);
        let initialState:LightProps[]=[];
        if(null !== areaData){
            initialState = JSON.parse(areaData);
            setLights(initialState);
        }else{
            const lightList:LightProps[] = [
                {
                    id:1,
                    name:"HogeStreet1-1-1",
                    lat:1,
                    long:1,
                    checked:true
                },
                {
                    id:2,
                    name:"HogeStreet1-1-2",
                    lat:2,
                    long:2,
                    checked:false
                },
                {
                    id:3,
                    name:"HogeStreet1-1-3",
                    lat:3,
                    long:3,
                    checked:false
                }
            ];
            //todo fetch webapi ??  
            setLights(lightList);
        } 
    }, [])

    const handleClick:(targetId:any) => void = useCallback((targetId) => {

        const index = lights.findIndex(light => light.id === targetId);
        const light = lights[index];
        light.checked = !light.checked ;
        
        const newlights = [...lights];
        newlights.splice(index, 1,light);
        setLights(newlights);

    }, [lights]);

    useEffect(() => {
        localStorage.setItem(AREA_KEY, JSON.stringify(lights))
    }, [lights])

    // const position = {lat:1,lng:1};

    return (
        <div className={classes.root}>
            <Typography variant="h4">Area</Typography>
            <Container className={classes.container} fixed>
            {lights.map((light) => {
                const newLight = Object.assign(light,{handleClick: ()=>(handleClick(light.id)),key:light.id});//書き方これでいい？？
                return <Light {...newLight} />
            })}
            </Container>
            <Map  {...position} />
        </div>
    );
}

export default Area;