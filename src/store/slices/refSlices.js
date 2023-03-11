import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mapInfo2: '',
    mapInfo: ''
}

const refSlices = createSlice({
    name: 'refSlices',
    initialState,
    reducers: {
        setMapInfo2(state, action) {
            state.mapInfo2 = action.payload
        },
        setMapInfo(state, action) {
            state.mapInfo = action.payload
        }
    }
})

export const refSlicesActions = refSlices.actions;
export default refSlices;