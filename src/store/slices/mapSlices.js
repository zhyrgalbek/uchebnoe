import { createSlice } from "@reduxjs/toolkit"
import { fetch_api } from "../../hooks/fetch_api";

const initialState = {
    translation: 0,
    types: [],
    view: [],
    areas: [],
    regions: [],
    county: [],
    institutions: [],
    sectors: [],
    filter: [],
    institution: {},
    marker: ''
}

const mapSlices = createSlice({
    name: 'mapSlices',
    initialState,
    reducers: {
        setMarker(state, action) {
            state.marker = action.payload;
        },
        setTranslation(state, action) {
            state.translation = action.payload;
        },
        setTypes(state, action) {
            state.types = action.payload;
        },
        setViews(state, action) {
            state.view = action.payload;
        },
        setAreas(state, action) {
            state.areas = action.payload.areas?.data;
            state.regions = action.payload.regions?.data;
            state.county = action.payload.county?.data;
        },
        setInstitutions(state, action) {
            state.institutions = action.payload;
        },
        setSectors(state, action) {
            state.sectors = action.payload;
        },
        setFilter(state, { payload }) {
            state[payload.type] = payload.data;
        },
        setInstitution(state, action) {
            state.institution = action.payload
        }
    }
})

export const mapActions = mapSlices.actions;
export default mapSlices;

export const getFilterInstitutions = ({ region, areas, county, type, view, sector }) => {
    return async (dispatch) => {
        try {
            const institutions = await fetch_api({ types: `?action=institutions&area_id=${region}&area_aimak_id=${areas}&area_administrative_id=${county}&institution_type_id=${type}&institution_view_id=${view}&institution_sector_id=${sector}` });
            dispatch(mapActions.setInstitutions(institutions.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const getFilter = ({ searchValues }) => {
    let searchParams = `action=areas`;
    let type = '';
    searchValues.forEach((elem, index, arr) => {
        if (elem.value !== '' && elem.type === 'county') {
            return
        }
        if (elem.value !== '' && elem.type === 'region' || elem.value !== '' && elem.type === 'areas') {
            searchParams += `&parent_id=${elem.value}`;
            type = arr[index + 1].type;
        }
        if (elem.type === 'type' && elem.value !== '') {
            searchParams = `action=view&institution_type_id=${elem.value}`;
            type = arr[index + 1].type;
        }
        if (elem.type === 'view' && elem.value !== '') {
            return
        }
    })
    return async (dispatch) => {
        try {
            const f = searchValues.find(elem => elem.type === 'view' && elem.value !== '');
            if (f) {
                return
            }
            const filter = await fetch_api({ types: `?${searchParams}` });
            dispatch(mapActions.setFilter({ type: type, data: filter.data }));
        } catch (error) {
            console.log(error);
        }
    }
}

// другие 5, 7, 8,9,18,19,20,21,23
export const getInstitutions = ({ id }) => {
    let searchParams = '?action=institutions';
    let other = `&institution_type_id=5&institution_type_id=7&institution_type_id=8&institution_type_id=9&institution_type_id=18&institution_type_id=19&institution_type_id=20&institution_type_id=21&institution_type_id=23`
    let institution = '&institution_type_id=';
    return async (dispatch) => {
        try {
            if (id === 'other') {
                searchParams = searchParams + other;
            } else if (id === 'all') {
                searchParams = searchParams + '';
            }
            else {
                searchParams = searchParams + institution + id;
            }
            const institutions = await fetch_api({ types: searchParams });
            dispatch(mapActions.setInstitutions(institutions.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getSectors = () => {
    return async (dispatch) => {
        try {
            const sectors = await fetch_api({ types: '?action=sectors' });
            dispatch(mapActions.setSectors(sectors.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const types = await fetch_api({ types: '?action=types' });
            dispatch(mapActions.setTypes(types.data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getViews = () => {
    return async (dispatch) => {
        try {
            const views = await fetch_api({ types: '?action=view' });
            dispatch(mapActions.setViews(views.data));
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
            dispatch(mapActions.setAreas({
                areas, regions, county
            }));
        } catch (error) {
            console.log(error);
        }
    }
}