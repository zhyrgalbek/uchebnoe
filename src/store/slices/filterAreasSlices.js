import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    areas2: [],
    county2: [],
    view2: [],
    view2Error: 'dont'
}

const filterAreasSlices = createSlice({
    name: 'filterAreasSlices',
    initialState,
    reducers: {
        setFilterAreas(state, action) {
            const { id, type, areas, county, view } = action.payload;
            if (type === 'region') {
                state.areas2 = areas.filter(elem => elem.parent_id === id);
                state.county2 = []
            }
            if (type === 'areas') {
                state.county2 = county.filter(elem => elem.parent_id === id);
            }
        },
        setFilterAreasReset(state, action) {
            state.areas2 = []
            state.county2 = []
            state.view2 = []
            state.view2Error = ''
        },
        setView2(state, action) {
            state.view2 = action.payload;
            state.view2Error = 'dont';
        },
        setView2Error(state, action) {
            state.view2Error = 'error';
        }
    }
})

export const filterAreasActions = filterAreasSlices.actions;
export default filterAreasSlices;


export const getFilterView = ({ type_id, type }) => {
    return async (dispatch) => {
        try {
            if (type !== 'type') {
                return;
            }
            const response = await fetch_api({ types: `?action=view&institution_type_id=${type_id}` });
            console.log(response);
            dispatch(filterAreasActions.setView2(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}