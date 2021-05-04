import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Light from './Light';

interface LightProps {
    id:number,
    lat:number;//latitude
    long:number;//longitude
    status?:string;
    checked:boolean;
}

const AREA_KEY = "AREA";

function Area(){

    const [lights, setLights] = useState<LightProps[]>([]);

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
                    lat:1,
                    long:1,
                    checked:true
                },
                {
                    id:2,
                    lat:2,
                    long:2,
                    checked:false
                },
                {
                    id:3,
                    lat:3,
                    long:3,
                    checked:false
                }
            ];
            //todo fetch webapi ??  
            setLights(lightList);
        } 
    }, [])

    const handleClick = useCallback((targetId) => {

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

    return (
        <div className="Area">
            <p>area</p>
            {lights.map((light) => (
                <Light key={light.id} id={light.id} lat={light.lat} long={light.long} checked={light.checked}
                handleClick={handleClick}></Light>
            ))}
        </div>
    );
}

export default Area;