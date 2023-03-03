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
    marker: '',
    coordinate: {
        type: '',
        value: ''
    },
    requestFilter: [
        {
            type: 'region',
            value: '',
            text: ''
        },
        {
            type: 'areas',
            value: '',
            text: ''
        },
        {
            type: 'county',
            value: '',
            text: ''
        },
        {
            type: 'type',
            value: '',
            text: ''
        },
        {
            type: 'view',
            value: '',
            text: ''
        },
        {
            type: 'capacity',
            value: '',
            text: ''
        },
        {
            type: 'sector',
            value: '',
            text: ''
        },
        {
            type: 'typeId',
            value: 'all',
            text: ''
        }
    ],
    status: ''
}

const mapSlices = createSlice({
    name: 'mapSlices',
    initialState,
    reducers: {
        setRequestFilterReset(state) {
            state.requestFilter = state.requestFilter.map((elem) => {
                if (elem.type === 'typeId') {
                    return elem;
                }
                return { ...elem, value: '', text: '' }
            })
        },
        setRequestFilter(state, action) {
            let { type, value, text } = action.payload;
            let idx = null;
            state.requestFilter = state.requestFilter.map((elem, index) => {
                if (elem.type === type) {
                    idx = index;
                    return { ...elem, value: value, text: text };
                }
                if (idx !== null && index > idx) {
                    if (elem.type === 'typeId') {
                        return elem;
                    }
                    return { ...elem, value: '', text: '' }
                }
                return elem;
            })
        },
        setCoordinate(state, action) {
            state.coordinate = {
                type: action.payload.type,
                value: action.payload.text
            }
        },
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
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export const mapActions = mapSlices.actions;
export default mapSlices;

export const getFilterInstitutions = (requestFilter, areas) => {
    // let institution = '&institution_type_id=';
    let obj = { typeId: '', type: '', view: '', sector: '' };
    requestFilter.forEach((elem) => {
        obj[elem.type] = elem.value;
    })
    let { typeId, type, view, sector } = obj;
    let institution_types = `&institution_type_id=${typeId}`;
    let other = `&institution_type_id=5&institution_type_id=7&institution_type_id=8&institution_type_id=9&institution_type_id=18&institution_type_id=19&institution_type_id=20&institution_type_id=21&institution_type_id=23`
    if (typeId === 'other') {
        institution_types = other;
    }
    if (typeId === 'all') {
        institution_types = ``;
    }
    if (type !== '') {
        institution_types = `&institution_type_id=${type}`;
    }
    if (view !== '') {
        institution_types = `&institution_view_id=${view}`;
    }
    let requestOblast = ``
    if (requestFilter[0].value !== '') {
        let arr = areas.map(elem => {
            return elem.id;
        })
        requestOblast = `area_ids=[${arr}]`;
    }
    if (requestFilter[1].value !== '') {
        requestOblast = `area_id=${requestFilter[1].value}`;
    }
    if (requestFilter[2].value !== '') {
        requestOblast = `area_aimak_id=${requestFilter[2].value}`;
    }
    // console.log(institution_types);
    console.log(requestOblast)
    return async (dispatch) => {
        try {
            dispatch(mapActions.setStatus('pending'))
            const institutions = await fetch_api({ types: `?action=institutions&${requestOblast}${institution_types}&institution_sector_id=${sector}` });
            // console.log(institutions)
            dispatch(mapActions.setInstitutions(institutions.data));
            setTimeout(() => {
                dispatch(mapActions.setStatus('access'))
            }, 5000)
        } catch (error) {
            console.log(error)
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