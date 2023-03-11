import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marker: '',
    institution: {},
}

const institutionInfoSlices = createSlice({
    name: 'institutionInfoSlices',
    initialState,
    reducers: {
        setMarker(state, action) {
            state.marker = action.payload;
        },
        setInstitution(state, action) {
            state.institution = action.payload
        },
    }
})

export const institutionInfoActions = institutionInfoSlices.actions
export default institutionInfoSlices;

