import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";
import { institution_view } from "../../utils/Constants/Constants";

const initialState = {
    areas2: [],
    county2: [],
    view2: [],
    view2Error: 'dont',
    county2Dont: false
}

const filterAreasSlices = createSlice({
    name: 'filterAreasSlices',
    initialState,
    reducers: {
        setFilterAreas(state, action) {
            const { id, type, areas, county, view } = action.payload;
            if (type === 'region') {
                state.areas2 = areas.filter(elem => elem.parent_id === id);
                state.county2 = [];
                state.county2Dont = false;
            }
            if (type === 'areas') {
                let arr = county.filter(elem => elem.parent_id === id);
                if (arr.length !== 0 && +id === 4) {
                    state.county2 = []
                    state.county2Dont = true;
                } else if (arr.length !== 0) {
                    state.county2 = arr;
                    state.county2Dont = false;
                }
                else {
                    state.county2 = []
                    state.county2Dont = true;
                }
            }
        },
        setFilterAreasReset(state, action) {
            state.areas2 = []
            state.county2 = []
            state.view2 = []
            state.view2Error = 'dont'
            state.county2Dont = false
        },
        setView2(state, action) {
            state.view2 = action.payload;
            state.view2Error = '';
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
            const newData = response.data.map(elem => {
                const el = institution_view.find(item => item.id === elem.id)
                if (el) {
                    return { ...elem, kyrgyzName: el.name }
                }
                return elem;
            })
            dispatch(filterAreasActions.setView2(newData))
        } catch (error) {
            console.log(error)
        }
    }
}