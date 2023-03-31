import { createSlice } from "@reduxjs/toolkit";
import { fetch_api } from "../../hooks/fetch_api";
import { institution_types, institution_view, instituion_sectors } from "../../utils/Constants/Constants";

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
            const newData = sectors.data.map(elem => {
                let el = instituion_sectors.find(item => +item.id === +elem.id)
                if (el) {
                    return { ...elem, kyrgyzName: el.name }
                }
                return elem;
            })
            dispatch(staticDatasActions.setSectors(newData));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const types = await fetch_api({ types: '?action=types' });
            const newData = types.data.map(elem => {
                const id = institution_types.find(el => +el.id === +elem.id);
                if (id) {
                    return { ...elem, kyrgyzName: id.name }
                }
                return elem;
            })
            dispatch(staticDatasActions.setTypes(newData));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getViews = () => {
    return async (dispatch) => {
        try {
            const views = await fetch_api({ types: '?action=view' });
            const ids = [];
            let newData = views.data.filter((item, index, arr) => {
                const el = ids.find(elem => elem.id === item.id)
                if (!el) {
                    ids.push(item);
                    return item;
                }
            });
            const newData2 = newData.map(elem => {
                const el = institution_view.find(item => item.id === elem.id)
                if (el) {
                    return { ...elem, kyrgyzName: el.name }
                }
                return elem;
            })
            dispatch(staticDatasActions.setViews(newData2));
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