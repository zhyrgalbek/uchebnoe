import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    types: [],
    view: [],
    areas: [],
    regions: [],
    county: [],
    sectors: [],
}

const staticDatasSlices = createSlice({
    name: 'staticDatasSlices',
    initialState,
    reducers: {
        setAreas(state, action) {
            state.areas = action.payload.areas?.data;
            state.regions = action.payload.regions?.data;
            state.county = action.payload.county?.data;
        },
        setSectors(state, action) {
            state.sectors = action.payload;
        },
        setTypes(state, action) {
            state.types = action.payload;
        },
        setViews(state, action) {
            state.view = action.payload;
        },
    }
})

export const staticDatasActions = staticDatasSlices.actions;
export default staticDatasSlices;

export const getSectors = () => {
    return async (dispatch) => {
        try {
            const sectors = await fetch_api({ types: '?action=sectors' });
            dispatch(staticDatasActions.setSectors(sectors.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const types = await fetch_api({ types: '?action=types' });
            dispatch(staticDatasActions.setTypes(types.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getViews = () => {
    return async (dispatch) => {
        try {
            const views = await fetch_api({ types: '?action=view' });
            dispatch(staticDatasActions.setViews(views.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAreas = () => {
    return async (dispatch) => {
        try {
            const regions = await fetch_api({ types: '?action=areas&area_level_id=2' });
            const areas = await fetch_api({ types: '?action=areas&area_level_id=3' });
            const county = await fetch_api({ types: '?action=areas&area_level_id=4' });
            dispatch(staticDatasActions.setAreas({
                areas, regions, county
            }));
        } catch (error) {
            console.log(error);
        }
    }
}