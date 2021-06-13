import { createAction, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MapPosition {
    lat: number,
    lng: number
}

const initialState: MapPosition = {
    lat: 0,
    lng: 0,
}

const GMAP_UPDATE = 'googlemap/updatePosition';

export const updatePostition = createAction<MapPosition>(GMAP_UPDATE);

export const googleMapReducer = createReducer(initialState, (builder) => {
    builder.addCase(updatePostition,(state,action)=>{
        console.log(action.payload)
        return action.payload
    })
})
