import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Light from './Light';
import {LightProps} from './Types';

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

    return (
        <div className="Area">
            <p>area</p>
            {lights.map((light) => {
                const newLight = Object.assign(light,{handleClick: ()=>(handleClick(light.id)),key:light.id});//書き方これでいい？？
                return <Light {...newLight} />
            })}
        </div>
    );
}

export default Area;