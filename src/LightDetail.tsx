import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import { Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { useLocation, useParams } from 'react-router-dom';

const containerStyle = {
    width: '400px',
    height: '400px'
};

type LightDetailProps = {
    lat: number,
    lng: number
};

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const GoogleMapComponent = (props: LightDetailProps) => {

    let key: string = "key";
    if (undefined !== process.env.REACT_APP_MAP) {
        key = process.env.REACT_APP_MAP
    }

    const { isLoaded,loadError } = useJsApiLoader({
        // id: 'google-map-script',
        googleMapsApiKey: key
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{lat:props.lat,lng:props.lng}}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export const Map =  React.memo(GoogleMapComponent)

export default function LightDetail() {

    let query = useQuery();

    const qLat:number = Number(query.get("lat")) ?? 0;
    const qLng:number = Number(query.get("lng")) ?? 0;

    const [lat,setLat] = useState(qLat);
    const [lng,setLng] = useState(qLng);

    const [position,setPosition]= useState<LightDetailProps>({lat:qLat,lng:qLng});

    const handleClick = () =>{
        
        const newLightDetail = Object.assign({},{lat:position.lat+0.001,lng:position.lng});
        
        setPosition(newLightDetail);
    }
    
    return (
        <Box>
            <form noValidate autoComplete="off">
                <TextField label={"緯度 lat"} onChange={e => setLat(Number(e.target.value))} value={lat}/>
                <TextField label={"経度 lng"} onChange={e => setLng(Number(e.target.value)) } value={lng}/>
                <Button onClick={handleClick}>Update</Button>
            </form>
            <Map  {...position} />
        </Box>
    )
}